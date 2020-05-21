//TODO: Review middlweware.
export default async (ctx:any) => {
    const start = Date.now();
    const ms = Date.now() - start;
    ctx.res.addHeader("X-Response-Time",`${ms}ms`);
    return;
};