FROM public.ecr.aws/sam/build-nodejs20.x

WORKDIR /user

# set home folder
ENV HOME /user

RUN touch ~/.bashrc && \
  yarn -v || npm install --global yarn && \
  source ~/.bashrc && \
  yarn global add serverless@3.40.0

RUN touch ~/.bashrc && \
  echo "alias u='yarn run u'" >> ~/.bashrc && \
  echo "alias i='yarn run i'" >> ~/.bashrc && \
  echo "alias it='yarn run it'" >> ~/.bashrc && \
  echo "alias t='yarn run t'" >> ~/.bashrc && \
  echo "alias ts='yarn run ts'" >> ~/.bashrc && \
  echo "alias tsv='yarn run tsv'" >> ~/.bashrc && \
  source ~/.bashrc

RUN chmod -R 757 /user

# set correct execution env
ENV LAMBDA_TASK_ROOT /user/project

ARG COMMAND=bash
ENV COMMAND=${COMMAND}

ENTRYPOINT (cd project && $COMMAND)
