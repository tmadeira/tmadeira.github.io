// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oH8FCw6CW4Lg76cBx26GoT
// Component: pt1RbgzI3D
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import "../plasmic__default_style.css"; // plasmic-import: global/defaultcss
import "./plasmic_site_layout.css"; // plasmic-import: oH8FCw6CW4Lg76cBx26GoT/projectcss
import "./PlasmicPagination.css"; // plasmic-import: pt1RbgzI3D/css

export const PlasmicPagination__VariantProps = new Array();

export const PlasmicPagination__ArgProps = new Array();

function PlasmicPagination__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "plasmic_default__all",
        "plasmic_default__div",
        "root_reset_oH8FCw6CW4Lg76cBx26GoT",
        "Pagination__root__vKwe9"
      )}
    >
      <a
        data-plasmic-name={"prev"}
        data-plasmic-override={overrides.prev}
        className={classNames(
          "plasmic_default__all",
          "plasmic_default__a",
          "__wab_text",
          "Pagination__prev__pfrdz"
        )}
        href={""}
      >
        {"←  Página anterior"}
      </a>

      <a
        data-plasmic-name={"next"}
        data-plasmic-override={overrides.next}
        className={classNames(
          "plasmic_default__all",
          "plasmic_default__a",
          "__wab_text",
          "Pagination__next__pUhYk"
        )}
        href={""}
      >
        {"Próxima página →"}
      </a>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "prev", "next"],
  prev: ["prev"],
  next: ["next"],
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPagination__ArgProps,
      internalVariantPropNames: PlasmicPagination__VariantProps,
    });

    return PlasmicPagination__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPagination";
  } else {
    func.displayName = `PlasmicPagination.${nodeName}`;
  }
  return func;
}

export const PlasmicPagination = Object.assign(
  // Top-level PlasmicPagination renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    prev: makeNodeComponent("prev"),
    next: makeNodeComponent("next"),
    // Metadata about props expected for PlasmicPagination
    internalVariantProps: PlasmicPagination__VariantProps,
    internalArgProps: PlasmicPagination__ArgProps,
  }
);

export default PlasmicPagination;
/* prettier-ignore-end */
