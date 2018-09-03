// import {once} from 'lodash';
import _ from 'lodash';
import {ThemeProvider} from 'styled-components';

const CHANNEL = '__styled-components__';

const CHANNEL_NEXT = `${CHANNEL}next__`;

// declare const process: any;

// const isFunction = (test: any): boolean => typeof test === 'function';

export default class ChonThemeProvider extends ThemeProvider {
  broadcast: any;
  unsubscribeToOuterId: any;
  outerTheme: any;
  publish: any;
  props: any;
  context: any;
  chonSchema: any;

  getChildContext(): any {
    let chonSchema;

    if (this.context[CHANNEL_NEXT]) {
      chonSchema = this.context[CHANNEL_NEXT].chonSchema;
    }

    if (!chonSchema) {
      chonSchema = this.buildContext();
    }

    let {schema, schemas: schemaDict, mapping, mappingConfig} = chonSchema;

    let {schema: schemaName} = this.props;

    if (schemaName) {
      schemaName = mapping[schemaName];
      schema = schemaDict[schemaName];
      mapping = {...mapping, ...mappingConfig[schemaName]};
    }

    chonSchema = {
      schema,
      schemas: schemaDict,
      mapping,
      mappingConfig,
    };
    console.info('getContext', schema ? schema.options : '');
    return {
      ...this.context,
      [CHANNEL_NEXT]: {
        getTheme: this.getTheme,
        chonSchema,
        subscribe: this.broadcast.subscribe,
        unsubscribe: this.broadcast.unsubscribe,
      },
    };
  }

  getTheme(): any {
    if (this.context[CHANNEL_NEXT]) {
      const temp = this.context[CHANNEL_NEXT].chonSchema;
      console.info('getTheme', temp.schema.options);
      return temp;
    }
  }

  private buildContext(): any {
    let config = this.props.config;

    if (!config) {
      throw new Error('Property `config` is required for root `StyleProvider`');
    }

    return {
      schema: config.default,
      schemas: config.schemas,
      mapping: _.mapValues(config.schemas, (_, key) => key),
      mappingConfig: config.mapping,
    };
  }
}
