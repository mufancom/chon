import {ChonSchema, ComponentSchemaElemDict} from '.';

type CompSchemaMappingType = {
  [compName: string]: Map<string, ChonSchema<ComponentSchemaElemDict>>;
};

type ConfigType = {
  [cname: string]: {
    [key: string]: ChonSchema<ComponentSchemaElemDict>;
  };
};

export class CompSchemaManager {
  componentSchemasMapping: CompSchemaMappingType = {};

  register(
    compName: string,
    schemaName: string,
    schema: ChonSchema<ComponentSchemaElemDict>,
  ): void;
  register(config: ConfigType): void;
  register(
    config: string | ConfigType,
    schemaName?: string,
    schema?: ChonSchema<ComponentSchemaElemDict>,
  ) {
    if (typeof config === 'string') {
      if (!schemaName || !schema) {
        throw new Error(
          'Register a schema has to provide a schema name and a schema object',
        );
      }
      this.componentSchemasMapping[config].set(schemaName, schema);
    } else {
      for (let cname in config) {
        for (let key in config[cname]) {
          this.componentSchemasMapping[cname].set(key, config[cname][key]);
        }
      }
    }
  }
}
