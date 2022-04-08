
/**
* The object returned for a bad request
*/
export class APIException {
    /**
    * The error number
    */
    'errorNumber'?: number;
    /**
    * The type of error
    */
    'type'?: string;
    /**
    * The message describing the error
    */
    'message'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errorNumber",
            "baseName": "ErrorNumber",
            "type": "number"
        }        {
            "name": "type",
            "baseName": "Type",
            "type": "string"
        }        {
            "name": "message",
            "baseName": "Message",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return APIException.attributeTypeMap;
    }
}

