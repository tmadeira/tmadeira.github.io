/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsx createPlasmicElementProxy */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oH8FCw6CW4Lg76cBx26GoT
// Component: HXZAepZU2F
import * as React from "react";
import {
  hasVariant,
  classNames,
  Renderer,
  createPlasmicElementProxy,
  PlasmicSlot,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import "../plasmic__default_style.css"; // plasmic-import: global/defaultcss
import "./plasmic_site_layout.css"; // plasmic-import: oH8FCw6CW4Lg76cBx26GoT/projectcss
import "./PlasmicMenuItem.css"; // plasmic-import: HXZAepZU2F/css

export const PlasmicMenuItem__VariantProps = new Array("state");

export const PlasmicMenuItem__ArgProps = new Array("children");

function PlasmicMenuItem__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames({
        "MenuItem__root--baseMedium__QAqgkSMvEo_MVUpr": true,
        "MenuItem__root--current__QAqgkKROJS": hasVariant(
          variants,
          "state",
          "current"
        ),

        MenuItem__root__QAqgk: true,
        "plasmic-default__all": true,
        "plasmic-default__div": true
      })}
    >
      <PlasmicSlot
        defaultContents={"About\n"}
        value={args.children}
        className={classNames({
          "MenuItem__slotChildren--baseMedium__1pWANSMvEo_MVUpr": true,
          "MenuItem__slotChildren--current__1pWANKROJS": hasVariant(
            variants,
            "state",
            "current"
          ),

          MenuItem__slotChildren__1pWAN: true
        })}
      />
    </div>
  );
}

class PlasmicMenuItem__Renderer extends Renderer {
  constructor(variants, args) {
    super(variants, args, PlasmicMenuItem__RenderFunc, "root");
  }
  create(variants, args) {
    return new PlasmicMenuItem__Renderer(variants, args);
  }
  getInternalVariantProps() {
    return PlasmicMenuItem__VariantProps;
  }
  getInternalArgProps() {
    return PlasmicMenuItem__ArgProps;
  }
  forNode(name) {
    return super.forNode(name);
  }
}

export const PlasmicMenuItem = function PlasmicMenuItemRoot(props) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: "root",
    descendantNames: ["root"],
    internalArgPropNames: PlasmicMenuItem__ArgProps,
    internalVariantPropNames: PlasmicMenuItem__VariantProps
  });

  return PlasmicMenuItem__RenderFunc({
    variants,
    args,
    overrides,
    forNode: "root"
  });
};

PlasmicMenuItem.createRenderer = () => new PlasmicMenuItem__Renderer({}, {});

export default PlasmicMenuItem;
/* prettier-ignore-end */
