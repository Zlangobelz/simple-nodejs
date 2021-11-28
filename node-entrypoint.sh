#TODO: should be in Dockerfile but actually it doesn't work there for some reasons
if [ "${NODE_ENV}" = "dev" ] ; \
 then npm install --include=dev && npm run dev ; \
 else npm install && npm run prod ; \
fi