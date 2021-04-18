export interface BaseModel {
  id?: string | null;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export interface Server extends BaseModel {
  name: string;
  created_by: string;
}

export interface Category extends BaseModel {
  name: string;
  server_id: string;
  created_by: string;
}

export interface Channel extends BaseModel {
  server_id: string;
  category_id: string;
  created_by: string;
  name: string;
}

export interface Message extends BaseModel {
  channel_id: string;
  text: string;
  sent_by: string;
}
