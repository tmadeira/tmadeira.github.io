/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsx createPlasmicElementProxy */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oH8FCw6CW4Lg76cBx26GoT
// Component: 3RgVkGyAq0r
import * as React from "react";
import {
  classNames,
  Renderer,
  createPlasmicElementProxy,
  PlasmicSlot,
  deriveRenderOpts,
} from "@plasmicapp/react-web";
import TextContent from "../../TextContent"; // plasmic-import: cLfqUBakSC/component
import TagList from "../../TagList"; // plasmic-import: 5P9Z-2oNX3/component
import "@plasmicapp/react-web/lib/plasmic.css";
import "../plasmic__default_style.css"; // plasmic-import: global/defaultcss
import "./plasmic_site_layout.css"; // plasmic-import: oH8FCw6CW4Lg76cBx26GoT/projectcss
import "./PlasmicArticle.css"; // plasmic-import: 3RgVkGyAq0r/css

export const PlasmicArticle__VariantProps = new Array();

export const PlasmicArticle__ArgProps = new Array("title", "date", "children");

function PlasmicArticle__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <article
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames({
        "Article__root--baseMedium__AHmRZz0TSU_MVUpr": true,
        Article__root__AHmRZ: true,
        "plasmic-default__all": true,
        "plasmic-default__article": true,
      })}
    >
      <h1
        data-plasmic-name={"title"}
        data-plasmic-override={overrides.title}
        className={classNames({
          "Article__title--baseMedium__2ETOgz0TSU_MVUpr": true,
          Article__title__2ETOg: true,
          "plasmic-default__all": true,
          "plasmic-default__h1": true,
        })}
      >
        <PlasmicSlot
          defaultContents={""}
          value={args.title}
          className={classNames({
            "Article__slotTitle--baseMedium__4AoPvz0TSU_MVUpr": true,
            Article__slotTitle__4AoPv: true,
          })}
        />
      </h1>

      <div
        data-plasmic-name={"date"}
        data-plasmic-override={overrides.date}
        className={classNames({
          "Article__date--baseMedium__G2s7ez0TSU_MVUpr": true,
          Article__date__G2s7e: true,
          "plasmic-default__all": true,
          "plasmic-default__div": true,
        })}
      >
        <PlasmicSlot
          defaultContents={""}
          value={args.date}
          className={classNames({
            "Article__slotDate--baseMedium__dZG6Ez0TSU_MVUpr": true,
            Article__slotDate__dZG6E: true,
          })}
        />
      </div>

      <div
        data-plasmic-name={"content"}
        data-plasmic-override={overrides.content}
        className={classNames({
          "Article__content--baseMedium__lMoNrz0TSU_MVUpr": true,
          Article__content__lMoNr: true,
          "plasmic-default__all": true,
          "plasmic-default__div": true,
        })}
      >
        <PlasmicSlot
          defaultContents={
            <TextContent
              data-plasmic-name={"textContent"}
              data-plasmic-override={overrides.textContent}
              className={classNames({
                Article__textContent__dUZP6: true,
                __wab_instance: true,
              })}
              {...{}}
            ></TextContent>
          }
          value={args.children}
        />
      </div>

      <TagList
        data-plasmic-name={"tags"}
        data-plasmic-override={overrides.tags}
        className={classNames({
          "Article__tags--baseMedium__ldbiSz0TSU_MVUpr": true,
          Article__tags__ldbiS: true,
          __wab_instance: true,
        })}
        {...{}}
      ></TagList>
    </article>
  );
}

class PlasmicArticle__Renderer extends Renderer {
  constructor(variants, args) {
    super(variants, args, PlasmicArticle__RenderFunc, "root");
  }
  create(variants, args) {
    return new PlasmicArticle__Renderer(variants, args);
  }
  getInternalVariantProps() {
    return PlasmicArticle__VariantProps;
  }
  getInternalArgProps() {
    return PlasmicArticle__ArgProps;
  }
  forNode(name) {
    return super.forNode(name);
  }
}

export const PlasmicArticle = function PlasmicArticleRoot(props) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: "root",
    descendantNames: ["root", "content", "textContent", "tags"],
    internalArgPropNames: PlasmicArticle__ArgProps,
    internalVariantPropNames: PlasmicArticle__VariantProps,
  });

  return PlasmicArticle__RenderFunc({
    variants,
    args,
    overrides,
    forNode: "root",
  });
};

PlasmicArticle.title = function PlasmicArticleTitle(props) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: "title",
    descendantNames: [],
    internalArgPropNames: PlasmicArticle__ArgProps,
    internalVariantPropNames: PlasmicArticle__VariantProps,
  });

  return PlasmicArticle__RenderFunc({
    variants,
    args,
    overrides,
    forNode: "title",
  });
};

PlasmicArticle.date = function PlasmicArticleDate(props) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: "date",
    descendantNames: [],
    internalArgPropNames: PlasmicArticle__ArgProps,
    internalVariantPropNames: PlasmicArticle__VariantProps,
  });

  return PlasmicArticle__RenderFunc({
    variants,
    args,
    overrides,
    forNode: "date",
  });
};

PlasmicArticle.content = function PlasmicArticleContent(props) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: "content",
    descendantNames: ["content", "textContent"],
    internalArgPropNames: PlasmicArticle__ArgProps,
    internalVariantPropNames: PlasmicArticle__VariantProps,
  });

  return PlasmicArticle__RenderFunc({
    variants,
    args,
    overrides,
    forNode: "content",
  });
};

PlasmicArticle.textContent = function PlasmicArticleTextContent(props) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: "textContent",
    descendantNames: ["textContent"],
    internalArgPropNames: PlasmicArticle__ArgProps,
    internalVariantPropNames: PlasmicArticle__VariantProps,
  });

  return PlasmicArticle__RenderFunc({
    variants,
    args,
    overrides,
    forNode: "textContent",
  });
};

PlasmicArticle.tags = function PlasmicArticleTags(props) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: "tags",
    descendantNames: ["tags"],
    internalArgPropNames: PlasmicArticle__ArgProps,
    internalVariantPropNames: PlasmicArticle__VariantProps,
  });

  return PlasmicArticle__RenderFunc({
    variants,
    args,
    overrides,
    forNode: "tags",
  });
};

PlasmicArticle.createRenderer = () => new PlasmicArticle__Renderer({}, {});

export default PlasmicArticle;
/* prettier-ignore-end */
