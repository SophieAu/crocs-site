declare module '*.png';
declare module '*.svg';
declare module '*.jpg';
declare module '*.webp';

declare module '@sanity/block-content-to-react';
{
  import * as React from 'react';
  import Block from './types';

  export interface BlockContentProps {
    blocks: Block[] | Block;
    // container classname (if rendered)
    className?: string;
    // default: false
    renderContainerOnSingleChild?: boolean;

    serializers?: {
      /**
       * Serializers for block types
       * @example
       * ```jsx
       * const input = [{
       *   _type: 'block',
       *   children: [{
       *     _key: 'a1ph4',
       *     _type: 'span',
       *     marks: ['s0m3k3y'],
       *     text: 'Sanity'
       *   }],
       *   markDefs: [{
       *     _key: 's0m3k3y',
       *     _type: 'highlight',
       *     color: '#E4FC5B'
       *   }]
       * }]
       *
       * const highlight = props => {
       *   return (
       *     <span style={{backgroundColor: props.mark.color}}>
       *       {props.children}
       *     </span>
       *   )
       * }
       *
       * <BlockContent
       *   blocks={input}
       *   serializers={{marks: {highlight}}}
       * />
       * ```
       */
      types?: Record<string, (props: any) => JSX.Element | null>;
      /**
       * Serializers for marks - data that annotates a text child of a block.
       * @example
       * ```jsx
       * const input = [{
       *   _type: 'block',
       *   children: [{
       *     _key: 'a1ph4',
       *     _type: 'span',
       *     marks: ['s0m3k3y'],
       *     text: 'Sanity'
       *   }],
       *   markDefs: [{
       *     _key: 's0m3k3y',
       *     _type: 'highlight',
       *     color: '#E4FC5B'
       *   }]
       * }]
       *
       * const highlight = props => {
       *   return (
       *     <span style={{backgroundColor: props.mark.color}}>
       *       {props.children}
       *     </span>
       *   )
       * }
       *
       * <BlockContent
       *   blocks={input}
       *   serializers={{marks: {highlight}}}
       * />
       * ```
       */
      marks?: Record<string, (props: any) => JSX.Element | null>;
      /** React component to use when rendering a list node */
      list?: React.Component;
      /** React component to use when rendering a list item node */
      listItem?: React.Component;
      /**
       * React component to use when transforming newline characters
       * to a hard break (<br/> by default, pass false to render newline character)
       */
      hardBreak?: React.Component;
      /** Serializer for the container wrapping the blocks */
      container?: React.Component;
    };
    /**
     * When encountering image blocks,
     * this defines which query parameters to apply in order to control size/crop mode etc.
     */
    imageOptions?: any;
    projectId?: string;
    dataset?: string;
  }

  export default function BlockContent(props: BlockContentProps): JSX.Element;
}
