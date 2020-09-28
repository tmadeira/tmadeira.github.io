/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsx createPlasmicElementProxy */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oH8FCw6CW4Lg76cBx26GoT
// Component: VqtJtITmmH
import * as React from "react";
import {
  classNames,
  Renderer,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import "../plasmic__default_style.css"; // plasmic-import: global/defaultcss
import "./plasmic_site_layout.css"; // plasmic-import: oH8FCw6CW4Lg76cBx26GoT/projectcss
import "./PlasmicComments.css"; // plasmic-import: VqtJtITmmH/css

export const PlasmicComments__VariantProps = new Array();

export const PlasmicComments__ArgProps = new Array();

function PlasmicComments__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames({
        Comments__root__WTQdA: true,
        "plasmic-default__all": true,
        "plasmic-default__div": true
      })}
    >
      <div
        data-plasmic-name={"box"}
        data-plasmic-override={overrides.box}
        className={classNames({
          Comments__box__dD6FA: true,
          "plasmic-default__all": true,
          "plasmic-default__div": true
        })}
      >
        {
          "O blog está temporariamente sem comentários. Em breve eles estarão de volta.\n"
        }
      </div>
    </div>
  );
}

class PlasmicComments__Renderer extends Renderer {
  constructor(variants, args) {
    super(variants, args, PlasmicComments__RenderFunc, "root");
  }
  create(variants, args) {
    return new PlasmicComments__Renderer(variants, args);
  }
  getInternalVariantProps() {
    return PlasmicComments__VariantProps;
  }
  getInternalArgProps() {
    return PlasmicComments__ArgProps;
  }
  forNode(name) {
    return super.forNode(name);
  }
}

export const PlasmicComments = function PlasmicCommentsRoot(props) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: "root",
    descendantNames: ["root", "box"],
    internalArgPropNames: PlasmicComments__ArgProps,
    internalVariantPropNames: PlasmicComments__VariantProps
  });

  return PlasmicComments__RenderFunc({
    variants,
    args,
    overrides,
    forNode: "root"
  });
};

PlasmicComments.box = function PlasmicCommentsBox(props) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: "box",
    descendantNames: ["box"],
    internalArgPropNames: PlasmicComments__ArgProps,
    internalVariantPropNames: PlasmicComments__VariantProps
  });

  return PlasmicComments__RenderFunc({
    variants,
    args,
    overrides,
    forNode: "box"
  });
};

PlasmicComments.createRenderer = () => new PlasmicComments__Renderer({}, {});

export default PlasmicComments;
/* prettier-ignore-end */
