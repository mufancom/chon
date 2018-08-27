import {
  ComponentSchema,
  GeneralComponentSchemaElementDict,
} from './base-component';

interface ConfigType {
  [cname: string]: {
    [key: string]: ComponentSchema<GeneralComponentSchemaElementDict>;
  };
}

export class CompSchemaManager {
  componentSchemasMapping: ConfigType = {};

  register(
    compName: string,
    schemaName: string,
    schema: ComponentSchema<GeneralComponentSchemaElementDict>,
  ): void;
  register(config: ConfigType): void;
  register(
    config: string | ConfigType,
    schemaName?: string,
    schema?: ComponentSchema<GeneralComponentSchemaElementDict>,
  ): void {
    if (typeof config === 'string') {
      if (!schemaName || !schema) {
        throw new Error(
          'Register a schema has to provide a schema name and a schema object',
        );
      }

      this.componentSchemasMapping[config][schemaName] = schema;
    } else {
      for (let cname in config) {
        for (let key in config[cname]) {
          this.componentSchemasMapping[cname][key] = config[cname][key];
        }
      }
    }
  }
}
