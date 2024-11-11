export interface UnitsContentsDataInterface{
    order: number,
    unit_id: string,
    topic : string,
    methods: MethodInterface[]

}

export interface MethodInterface {
    id: number,
    method_name: string
}