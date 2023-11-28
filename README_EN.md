
## Deployment
### Docker
```shell
docker run -d -p 3000:3000 \
    -e OPENAI_API_KEY="sk-xxx" \
    -e BASE_URL="https://api.openai.com" \
    -e MJ_SERVER_ID="" \
    -e MJ_CHANNEL_ID="" \
    -e MJ_USER_TOKEN="" \
    /chatgpt-midjourney:v3.1.1
```
