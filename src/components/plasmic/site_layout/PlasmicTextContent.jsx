// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oH8FCw6CW4Lg76cBx26GoT
// Component: cLfqUBakSC
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web";
import { useScreenVariants } from "../PlasmicGlobalVariant__Screen"; // plasmic-import: fOWX3a-rE7c/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import "../plasmic__default_style.css"; // plasmic-import: global/defaultcss
import "./plasmic_site_layout.css"; // plasmic-import: oH8FCw6CW4Lg76cBx26GoT/projectcss
import "./PlasmicTextContent.css"; // plasmic-import: cLfqUBakSC/css

export const PlasmicTextContent__VariantProps = new Array();

export const PlasmicTextContent__ArgProps = new Array("children");

function PlasmicTextContent__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants(),
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        "plasmic_default__all",
        "plasmic_default__div",
        "root_reset_oH8FCw6CW4Lg76cBx26GoT",
        "TextContent__root__pyf4A"
      )}
    >
      <p.PlasmicSlot
        defaultContents={
          "I'm a computer scientist and I've been studying probabilistic AI. Self-employed software engineer after internships at Google, Facebook, Dropbox, and imo.im. Former ACM-ICPC contestant."
        }
        value={args.children}
        className={classNames("TextContent__slotChildren__s4SI")}
      />
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root"],
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTextContent__ArgProps,
      internalVariantPropNames: PlasmicTextContent__VariantProps,
    });

    return PlasmicTextContent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTextContent";
  } else {
    func.displayName = `PlasmicTextContent.${nodeName}`;
  }
  return func;
}

export const PlasmicTextContent = Object.assign(
  // Top-level PlasmicTextContent renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicTextContent
    internalVariantProps: PlasmicTextContent__VariantProps,
    internalArgProps: PlasmicTextContent__ArgProps,
  }
);

export default PlasmicTextContent;
/* prettier-ignore-end */
