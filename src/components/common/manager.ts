import {ComponentSchema, ComponentSchemaElemDict} from './base-component';

interface CompSchemaMappingType {
  [compName: string]: Map<string, ComponentSchema<ComponentSchemaElemDict>>;
}

interface ConfigType {
  [cname: string]: {
    [key: string]: ComponentSchema<ComponentSchemaElemDict>;
  };
}

export class CompSchemaManager {
  componentSchemasMapping: CompSchemaMappingType = {};

  register(
    compName: string,
    schemaName: string,
    schema: ComponentSchema<ComponentSchemaElemDict>,
  ): void;
  register(config: ConfigType): void;
  register(
    config: string | ConfigType,
    schemaName?: string,
    schema?: ComponentSchema<ComponentSchemaElemDict>,
  ): void {
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
