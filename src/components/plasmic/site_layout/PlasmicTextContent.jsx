/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsx createPlasmicElementProxy */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oH8FCw6CW4Lg76cBx26GoT
// Component: cLfqUBakSC
import * as React from "react";
import {
  classNames,
  Renderer,
  createPlasmicElementProxy,
  PlasmicSlot,
  deriveRenderOpts,
} from "@plasmicapp/react-web";
import { ScreenContext } from "../PlasmicGlobalVariant__Screen"; // plasmic-import: fOWX3a-rE7c/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import "../plasmic__default_style.css"; // plasmic-import: global/defaultcss
import "./plasmic_site_layout.css"; // plasmic-import: oH8FCw6CW4Lg76cBx26GoT/projectcss
import "./PlasmicTextContent.css"; // plasmic-import: cLfqUBakSC/css

export const PlasmicTextContent__VariantProps = new Array();

export const PlasmicTextContent__ArgProps = new Array("children");

function PlasmicTextContent__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = {
    screen: React.useContext(ScreenContext),
  };

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      data-plasmic-wrap-flex-child={true}
      className={classNames({
        "TextContent__root--baseMedium__PYF4afFuoP_MVUpr": true,
        TextContent__root__PYF4a: true,
        "plasmic-default__all": true,
        "plasmic-default__div": true,
      })}
    >
      <PlasmicSlot
        defaultContents={
          "I'm a computer scientist and I've been studying probabilistic AI. Self-employed software engineer after internships at Google, Facebook, Dropbox, and imo.im. Former ACM-ICPC contestant."
        }
        value={args.children}
        className={classNames({
          "TextContent__slotChildren--baseMedium__s4_sIfFuoP_MVUpr": true,
          TextContent__slotChildren__s4_sI: true,
        })}
      />
    </div>
  );
}

class PlasmicTextContent__Renderer extends Renderer {
  constructor(variants, args) {
    super(variants, args, PlasmicTextContent__RenderFunc, "root");
  }
  create(variants, args) {
    return new PlasmicTextContent__Renderer(variants, args);
  }
  getInternalVariantProps() {
    return PlasmicTextContent__VariantProps;
  }
  getInternalArgProps() {
    return PlasmicTextContent__ArgProps;
  }
  forNode(name) {
    return super.forNode(name);
  }
}

export const PlasmicTextContent = function PlasmicTextContentRoot(props) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: "root",
    descendantNames: ["root"],
    internalArgPropNames: PlasmicTextContent__ArgProps,
    internalVariantPropNames: PlasmicTextContent__VariantProps,
  });

  return PlasmicTextContent__RenderFunc({
    variants,
    args,
    overrides,
    forNode: "root",
  });
};

PlasmicTextContent.createRenderer = () =>
  new PlasmicTextContent__Renderer({}, {});

export default PlasmicTextContent;
/* prettier-ignore-end */
