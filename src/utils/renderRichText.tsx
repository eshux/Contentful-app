import { ReactNode } from 'react';
import { Document, BLOCKS, INLINES, MARKS, Node, Block, Inline } from '@contentful/rich-text-types';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Links } from "../types/GetArticleBySlug";
import { baseURL } from '../config/config';

export const renderRichText = (json: Document, links: Links | undefined) => {


  const options = {
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
            // className={styles.paragraph} 
            style={{ color: "red" }}
          >
            {children}
          </p>
        );
      },
      [INLINES.HYPERLINK]: (node: Node, children: ReactNode) => {
        return (
          <a 
            // className={styles.anchor} 
            href={node.data.uri} 
            target="_blank" 
            rel="noreferrer"
            style={{ color: "blue" }}
          >
            {children}
          </a>
        )
      },
      [INLINES.ENTRY_HYPERLINK]: (node: Block | Inline, children: ReactNode) => {
        const entryId = node.data.target.sys.id;
        const entry = links?.entries.hyperlink.find(entry => entry.sys.id === entryId);
        return <a href={`${baseURL}article/${entry?.slug}`} target="_blank" rel="noreferrer">{children}</a>
      },
      [INLINES.ASSET_HYPERLINK]: (node: Node, children: ReactNode) => {
        const assetId = node.data.target.sys.id;
        const asset = links?.assets.hyperlink.find(entry => entry.sys.id === assetId);
        return <a href={asset?.url} target="_blank" rel="noreferrer">{children}</a>
      },
      [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => {
        const assetId = node.data.target.sys.id;
        const asset = links?.assets.block.find(entry => entry.sys.id === assetId);
        return <img src={asset?.url} alt={asset?.description} style={{width: "100%", maxWidth: "300px"}}/>
      }
    }
  }

  return documentToReactComponents(json, options)
}