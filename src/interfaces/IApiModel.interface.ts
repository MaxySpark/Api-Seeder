export interface IApiModel {
    name: string;
    slug: string;
    items: Array<any>;
    generate(total: number): Array<any>;
}