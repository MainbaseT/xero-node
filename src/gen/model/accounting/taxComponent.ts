
export class TaxComponent {
    /**
    * Name of Tax Component
    */
    'name'?: string;
    /**
    * Tax Rate (up to 4dp)
    */
    'rate'?: number;
    /**
    * Boolean to describe if Tax rate is compounded.
    */
    'isCompound'?: boolean;
    /**
    * Boolean to describe if tax rate is non-recoverable. Non-recoverable rates are only applicable to Canadian organisations
    */
    'isNonRecoverable'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        }        {
            "name": "rate",
            "baseName": "Rate",
            "type": "number"
        }        {
            "name": "isCompound",
            "baseName": "IsCompound",
            "type": "boolean"
        }        {
            "name": "isNonRecoverable",
            "baseName": "IsNonRecoverable",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return TaxComponent.attributeTypeMap;
    }
}

