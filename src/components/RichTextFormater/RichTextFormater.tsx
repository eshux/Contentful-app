import { ReactNode } from 'react';
import { BLOCKS, INLINES, MARKS, Node } from '@contentful/rich-text-types';
import styles from './RichTextFormater.module.scss';

type Props = {
  textColor?: string;
}

export const RichTextFormater = ({textColor}: Props) => {

  return {
    renderMark: {
      [MARKS.BOLD]: (text: ReactNode) => {
        return (
          <b style={{ color: "lightblue" }}>{text}</b>
        )
      }
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: Node, children: ReactNode) => {
        return (
          <p 
            className={styles.paragraph} 
            style={{ color: textColor }}
          >
            {children}
          </p>
        );
      },
      [INLINES.HYPERLINK]: (node: Node, children: ReactNode) => {
        return (
          <a 
            className={styles.anchor} 
            href={node.data.uri} 
            target="_blank" 
            rel="noreferrer"
            style={{ color: "lightblue" }}
          >
            {children}
          </a>
        )
      }
    }
  }
}