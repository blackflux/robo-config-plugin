GROUP=${1:-0}
MOD=${2:-1}

echo "Running Group $(($GROUP+1)) / $MOD"

yarn build-clean

tmp_file=$(mktemp);

INDEX=0
find "$(dirname "${BASH_SOURCE[0]}")/handler" -type f -iname "*.spec.json" -printf '%P\0' | while read -d $'\0' i
do
  if [ $(($INDEX % $MOD)) -eq $GROUP ]; then
      printf 'yarn tsv -g "^Testing Lambda Functions: lambda-test Test %s$" --timeout 30000 --folder lib 2> /dev/null | grep "✔ Test" || printf "${RED}    ✗ Test %q${NC}\\\\n"\n' "$(echo "$i" | sed 's/[.[\*^$]/\\&/g')" "$i";
  fi;
  ((++INDEX))
done > "$tmp_file"

if [[ -z "${CIRCLECI}" ]]; then
  thread_count=$(grep -c ^processor /proc/cpuinfo)
else
  thread_count=1
fi

output="$(xargs -d'\n' --arg-file="$tmp_file" --max-procs=$thread_count -I CMD bash -c CMD | tee /dev/tty)"

code=0

if [[ $output == *"✗"* ]]; then
  code=1
fi

rm -f "$tmp_file"

yarn clean

exit $code
