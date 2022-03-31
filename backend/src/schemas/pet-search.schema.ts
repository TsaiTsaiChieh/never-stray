import {JSONSchemaType} from 'ajv'

import {CityID, Region} from '../entity/area.entity'
import {Age, Kind, Ref, Sex, Status, Ternary} from '../entity/pet.entity'
import {ShelterID} from '../entity/shelter.entity'

export const petSearchSchema: JSONSchemaType<PetSearchQueryType> = {
  type: 'object',
  properties: {
    status: {
      type: 'array',
      items: {type: 'string', enum: Object.values(Status)},
      uniqueItems: true,
      nullable: true,
    },
    ref: {
      type: 'array',
      items: {type: 'string', enum: Object.values(Ref)},
      uniqueItems: true,
      nullable: true,
    },
    city_id: {
      type: 'array',
      items: {type: 'integer', enum: Object.values(CityID)},
      uniqueItems: true,
      nullable: true,
    },
    shelter_id: {
      type: 'array',
      items: {type: 'integer', enum: Object.values(ShelterID)},
      uniqueItems: true,
      nullable: true,
    },
    kind: {
      type: 'array',
      items: {type: 'string', enum: Object.values(Kind)},
      uniqueItems: true,
      nullable: true,
    },
    sex: {
      type: 'array',
      items: {type: 'string', enum: Object.values(Sex)},
      uniqueItems: true,
      nullable: true,
    },
    color: {
      type: 'array',
      items: {type: 'string'},
      uniqueItems: true,
      nullable: true,
    },
    age: {
      type: 'array',
      items: {type: 'string', enum: Object.values(Age)},
      uniqueItems: true,
      nullable: true,
    },
    region: {
      type: 'array',
      items: {type: 'string', enum: Object.values(Region)},
      uniqueItems: true,
      nullable: true,
    },
    ligation: {
      type: 'array',
      items: {type: 'string', enum: Object.values(Ternary)},
      uniqueItems: true,
      nullable: true,
    },
    // eslint-disable-next-line camelcase
    order_key: {
      type: 'string',
      enum: [
        'id',
        'ref',
        'city_id',
        'shelter_id',
        'kind',
        'sex',
        'color',
        'age',
        'created_at',
        'updated_at',
      ],
      nullable: true,
    },
    ascend: {
      type: 'boolean',
      enum: [true, false],
      default: true,
      nullable: true,
    },
    limit: {
      type: 'integer',
      default: 10,
      minimum: 1,
      maximum: 100,
      nullable: true,
    },
    page: {type: 'integer', default: 1, minimum: 1, nullable: true},
  },
}
