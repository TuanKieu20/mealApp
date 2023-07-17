import category from "./categories"

class Meal {
        id:string;
        title: string;// tên món ăn
        linkImage: string; //url ảnh 
        forPeople: number; //khẩu phần ăn cho mấy người
        description: string; // mô tả món ăn
        ingredients: Array<Map<string, string>>; // nguyên liệu
        spice: Array<string>;// gia vị
        process: string;// sơ chế
        perform: string;//quá trình thực hiện
        use: string;//cách sử dụng
        tips: string;// mẹo khi dùng
        category: category;//thể loại
    constructor(
        id: string, 
        title: string,
        linkImage: string,
        forPeople: number,
        description: string,
        ingredients: Array<Map<string, string>>, // nguyeen lieeju
        spice: Array<string>,
        process: string,// sơ chế
        perform: string,//quá trình thực hiện
        use: string,
        tips: string,
        category: category,
    ){
        this.id=id,
        this.title = title,
        this.linkImage = linkImage,
        this.forPeople=forPeople,
        this.description = description,
        this.ingredients = ingredients,
        this.spice=spice,
        this.process = process,
        this.perform = perform,
        this.use = use,
        this.tips = tips,
        this.category = category
    }
}
export default Meal;