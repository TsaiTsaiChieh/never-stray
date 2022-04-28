import {JSONSchemaType} from 'ajv'

export const toggleTrackingSchema: JSONSchemaType<{pet_id: number}> = {
  type: 'object',
  properties: {
    pet_id: {
      type: 'integer',
      nullable: false,
    },
  },
  required: ['pet_id'],
}
