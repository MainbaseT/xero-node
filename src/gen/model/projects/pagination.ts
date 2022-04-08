
export class Pagination {
    /**
    * Set to 1 by default. The requested number of the page in paged response - Must be a number greater than 0.
    */
    'page'?: number;
    /**
    * Optional, it is set to 50 by default. The number of items to return per page in a paged response - Must be a number between 1 and 500.
    */
    'pageSize'?: number;
    /**
    * Number of pages available
    */
    'pageCount'?: number;
    /**
    * Number of items returned
    */
    'itemCount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "page",
            "baseName": "page",
            "type": "number"
        }        {
            "name": "pageSize",
            "baseName": "pageSize",
            "type": "number"
        }        {
            "name": "pageCount",
            "baseName": "pageCount",
            "type": "number"
        }        {
            "name": "itemCount",
            "baseName": "itemCount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Pagination.attributeTypeMap;
    }
}

