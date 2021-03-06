// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oH8FCw6CW4Lg76cBx26GoT
// Component: 2K6EDJzV0q
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import "../plasmic__default_style.css"; // plasmic-import: global/defaultcss
import "./plasmic_site_layout.css"; // plasmic-import: oH8FCw6CW4Lg76cBx26GoT/projectcss
import "./PlasmicSectionItem.css"; // plasmic-import: 2K6EDJzV0q/css

export const PlasmicSectionItem__VariantProps = new Array();

export const PlasmicSectionItem__ArgProps = new Array(
  "title",
  "description",
  "subdescription",
  "subtitle",
  "badge"
);

function PlasmicSectionItem__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
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
        "SectionItem__root__vQUdQ"
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(
          "plasmic_default__all",
          "plasmic_default__div",
          "SectionItem__box___9E2UC"
        )}
      >
        <p.PlasmicSlot
          defaultContents={""}
          value={args.title}
          className={classNames("SectionItem__slotTitle__nVul")}
        />

        <div
          className={classNames(
            "plasmic_default__all",
            "plasmic_default__div",
            "SectionItem__box__e1X66"
          )}
        >
          <p.PlasmicSlot defaultContents={null} value={args.badge} />
        </div>
      </p.Stack>

      <p.PlasmicSlot
        defaultContents={""}
        value={args.subtitle}
        className={classNames("SectionItem__slotSubtitle__os36H")}
      />

      <p.PlasmicSlot
        defaultContents={""}
        value={args.description}
        className={classNames("SectionItem__slotDescription__eDhTx")}
      />

      <p.PlasmicSlot
        defaultContents={""}
        value={args.subdescription}
        className={classNames("SectionItem__slotSubdescription___55Z1T")}
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
      internalArgPropNames: PlasmicSectionItem__ArgProps,
      internalVariantPropNames: PlasmicSectionItem__VariantProps,
    });

    return PlasmicSectionItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSectionItem";
  } else {
    func.displayName = `PlasmicSectionItem.${nodeName}`;
  }
  return func;
}

export const PlasmicSectionItem = Object.assign(
  // Top-level PlasmicSectionItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicSectionItem
    internalVariantProps: PlasmicSectionItem__VariantProps,
    internalArgProps: PlasmicSectionItem__ArgProps,
  }
);

export default PlasmicSectionItem;
/* prettier-ignore-end */
