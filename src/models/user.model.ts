import {BaseModel,Field,FieldType,Model} from "dso/mod.ts";

@Model("users")
class User extends BaseModel {
  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id?: number;

  @Field({ type: FieldType.STRING, length: 30 })
  name?: string;

  @Field({ type: FieldType.STRING, length: 30 })
  password?: string;
}

export default User;