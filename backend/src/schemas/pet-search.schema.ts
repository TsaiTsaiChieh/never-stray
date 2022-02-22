import {JSONSchemaType} from 'ajv'
import {Region} from '../entity/area.entity'
import {Age, Kind, Ref, Sex, Status} from '../entity/pet.entity'

export const petSearchSchema: JSONSchemaType<PetSearchQueryType> = {
  type: 'object',
  properties: {
    status: {type: 'string', enum: Object.values(Status), nullable: true},
    ref: {type: 'string', enum: Object.values(Ref), nullable: true},
    city_id: {type: 'integer', nullable: true},
    shelter_id: {type: 'integer', nullable: true},
    kind: {type: 'string', enum: Object.values(Kind), nullable: true},
    sex: {type: 'string', enum: Object.values(Sex), nullable: true},
    color: {type: 'string', nullable: true},
    age: {type: 'string', enum: Object.values(Age), nullable: true},
    region: {type: 'string', enum: Object.values(Region), nullable: true},
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
