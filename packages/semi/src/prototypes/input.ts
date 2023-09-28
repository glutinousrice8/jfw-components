import { ComponentPrototypeType } from '@music163/tango-helpers';
import { InstancePrototypes, StylePrototypes } from './common';

export const Input: ComponentPrototypeType = {
  name: 'Input',
  title: '输入框',
  icon: 'icon-shurukuang',
  type: 'element',
  package: '@jfw-designer/semi',
  help: '通过鼠标或键盘输入内容，是最基础的表单域的包装',
  hasChildren: false,
  props: [
    ...StylePrototypes,
    ...InstancePrototypes,
    {
      name: 'placeholder',
      title: '占位符',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'borderless',
      title: '无边框模式',
      setter: 'boolSetter',
      group: 'basic'
    },
    {
      name: 'defaultValue',
      title: '默认内容',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'addonAfter',
      title: '后置标签',
      setter: 'jsxSetter',
      group: 'advanced',
    },
    {
      name: 'addonBefore',
      title: '前置标签',
      setter: 'jsxSetter',
      group: 'advanced',
    },
    {
      name: 'clearIcon',
      title: '清除按钮',
      setter: 'iconSetter',
      group: 'advanced',
      tip: '可用于自定义清除按钮, showClear为true时有效'
    },
    {
      name: 'disabled',
      title: '禁用',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'hideSuffix',
      title: '隐藏后缀标签',
      setter: 'boolSetter',
      tip: '清除按钮与后缀标签并存时隐藏后缀标签',
      group: 'basic',
    },
    {
      name: 'showClear',
      title: '允许清除内容',
      setter: 'boolSetter',
      group: 'basic',
      tip: '输入框有内容且 hover 或 focus 时展示清除按钮'
    },
    {
      name: 'size',
      title: '控件大小',
      setter: 'choiceSetter',
      setterProps: {
        options: [
          { label: '小', value: 'small' },
          { label: '中', value: 'default' },
          { label: '大', value: 'large' },
        ],
      },
    },
    {
      name: 'type',
      title: '类型',
      tip: '声明 input 类型，同原生 input 标签的 type 属性',
      setter: 'textSetter',
      group: 'advanced',
    },
    {
      name: 'value',
      title: '当前内容',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'onChange',
      title: '内容变化回调',
      setter: 'actionSetter',
      group: 'event',
      autoCompleteOptions: ['(value:string, e:event)=>{}'],
    },
    {
      name: 'onEnterPress',
      title: '回车回调',
      setter: 'actionSetter',
      group: 'event',
    },
  ],
};
