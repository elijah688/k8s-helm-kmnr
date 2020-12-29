FROM alpine:3.12.3

RUN apk add curl bash openssl --no-cache && \
curl -LO "https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl" && \
chmod +x ./kubectl && \
mv ./kubectl /usr/local/bin/kubectl && \
curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3 && \
chmod 700 get_helm.sh && \
./get_helm.sh

CMD [ "/bin/sh" ]

