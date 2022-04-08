
export class BookDepreciationDetail {
    /**
    * When an asset is disposed, this will be the sell price minus the purchase price if a profit was made.
    */
    'currentCapitalGain'?: number;
    /**
    * When an asset is disposed, this will be the lowest one of sell price or purchase price, minus the current book value.
    */
    'currentGainLoss'?: number;
    /**
    * YYYY-MM-DD
    */
    'depreciationStartDate'?: string;
    /**
    * The value of the asset you want to depreciate, if this is less than the cost of the asset.
    */
    'costLimit'?: number;
    /**
    * The value of the asset remaining when you\'ve fully depreciated it.
    */
    'residualValue'?: number;
    /**
    * All depreciation prior to the current financial year.
    */
    'priorAccumDepreciationAmount'?: number;
    /**
    * All depreciation occurring in the current financial year.
    */
    'currentAccumDepreciationAmount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "currentCapitalGain",
            "baseName": "currentCapitalGain",
            "type": "number"
        }        {
            "name": "currentGainLoss",
            "baseName": "currentGainLoss",
            "type": "number"
        }        {
            "name": "depreciationStartDate",
            "baseName": "depreciationStartDate",
            "type": "string"
        }        {
            "name": "costLimit",
            "baseName": "costLimit",
            "type": "number"
        }        {
            "name": "residualValue",
            "baseName": "residualValue",
            "type": "number"
        }        {
            "name": "priorAccumDepreciationAmount",
            "baseName": "priorAccumDepreciationAmount",
            "type": "number"
        }        {
            "name": "currentAccumDepreciationAmount",
            "baseName": "currentAccumDepreciationAmount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return BookDepreciationDetail.attributeTypeMap;
    }
}

