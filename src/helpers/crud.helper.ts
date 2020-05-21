import { BaseModel } from "https://deno.land/x/dso@v1.0.0/mod.ts";

export const all = async (model: BaseModel) => {
  const data = await model.findAll({});
  return { data };
};

export const store = (model: BaseModel) =>
  async (ctx: any) => {
    const { body } = await ctx.req;
    const insertRecord = await model.insert(body);

    if (!insertRecord) {
      throw new Error("Error create");
    }

    const data = await model.findById(insertRecord);
    return { data };
  };