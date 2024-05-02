export interface Blogs {
    code:    number;
    message: string;
    data:    BlogId;
}

export interface BlogId {
    id:             number;
    name_device:    string;
    relase_date:    Date;
    resolution_eye: string;
    field_view:     number;
    weight:         string;
    relase_price:   string;
    image_url:      string;
    description:    string;
    Information:    string;
}
