import ModelKeyConverter from "@/helper/ModelKeyConverter";

export default class DtoObject<T extends DtoObject<T>> {

    toDto(): any {
        return ModelKeyConverter.keyToUpperCamel(this);
    }

    setFromDto(dto: Partial<T>) {
        Object.assign(this, ModelKeyConverter.keyToLowerCamel(dto))
    }
}
