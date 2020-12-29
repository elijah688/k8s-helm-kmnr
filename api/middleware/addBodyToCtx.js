exports.addBodyToCtxMiddleWare = (ctx, next) => {
  const {
    request: {
      body: { title, content, overwrite },
    },
  } = ctx;

  const dataIsPresent = title && content && true;
  ctx.dataIsPresent = dataIsPresent;
  ctx.title = title;
  ctx.content = content;
  ctx.overwrite = overwrite;

  return next();
};
