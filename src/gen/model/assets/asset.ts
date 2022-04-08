import { AssetStatus } from '././assetStatus';
import { BookDepreciationDetail } from '././bookDepreciationDetail';
import { BookDepreciationSetting } from '././bookDepreciationSetting';

export class Asset {
    /**
    * The Xero-generated Id for the asset
    */
    'assetId'?: string;
    /**
    * The name of the asset
    */
    'assetName': string;
    /**
    * The Xero-generated Id for the asset type
    */
    'assetTypeId'?: string;
    /**
    * Must be unique.
    */
    'assetNumber'?: string;
    /**
    * The date the asset was purchased YYYY-MM-DD
    */
    'purchaseDate'?: string;
    /**
    * The purchase price of the asset
    */
    'purchasePrice'?: number;
    /**
    * The date the asset was disposed
    */
    'disposalDate'?: string;
    /**
    * The price the asset was disposed at
    */
    'disposalPrice'?: number;
    'assetStatus'?: AssetStatus;
    /**
    * The date the asset’s warranty expires (if needed) YYYY-MM-DD
    */
    'warrantyExpiryDate'?: string;
    /**
    * The asset\'s serial number
    */
    'serialNumber'?: string;
    'bookDepreciationSetting'?: BookDepreciationSetting;
    'bookDepreciationDetail'?: BookDepreciationDetail;
    /**
    * Boolean to indicate whether depreciation can be rolled back for this asset individually. This is true if it doesn\'t have \'legacy\' journal entries and if there is no lock period that would prevent this asset from rolling back.
    */
    'canRollback'?: boolean;
    /**
    * The accounting value of the asset
    */
    'accountingBookValue'?: number;
    /**
    * Boolean to indicate whether delete is enabled
    */
    'isDeleteEnabledForDate'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "assetId",
            "baseName": "assetId",
            "type": "string"
        }        {
            "name": "assetName",
            "baseName": "assetName",
            "type": "string"
        }        {
            "name": "assetTypeId",
            "baseName": "assetTypeId",
            "type": "string"
        }        {
            "name": "assetNumber",
            "baseName": "assetNumber",
            "type": "string"
        }        {
            "name": "purchaseDate",
            "baseName": "purchaseDate",
            "type": "string"
        }        {
            "name": "purchasePrice",
            "baseName": "purchasePrice",
            "type": "number"
        }        {
            "name": "disposalDate",
            "baseName": "disposalDate",
            "type": "string"
        }        {
            "name": "disposalPrice",
            "baseName": "disposalPrice",
            "type": "number"
        }        {
            "name": "assetStatus",
            "baseName": "assetStatus",
            "type": "AssetStatus"
        }        {
            "name": "warrantyExpiryDate",
            "baseName": "warrantyExpiryDate",
            "type": "string"
        }        {
            "name": "serialNumber",
            "baseName": "serialNumber",
            "type": "string"
        }        {
            "name": "bookDepreciationSetting",
            "baseName": "bookDepreciationSetting",
            "type": "BookDepreciationSetting"
        }        {
            "name": "bookDepreciationDetail",
            "baseName": "bookDepreciationDetail",
            "type": "BookDepreciationDetail"
        }        {
            "name": "canRollback",
            "baseName": "canRollback",
            "type": "boolean"
        }        {
            "name": "accountingBookValue",
            "baseName": "accountingBookValue",
            "type": "number"
        }        {
            "name": "isDeleteEnabledForDate",
            "baseName": "isDeleteEnabledForDate",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return Asset.attributeTypeMap;
    }
}

