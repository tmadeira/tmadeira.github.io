/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsx createPlasmicElementProxy */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oH8FCw6CW4Lg76cBx26GoT
// Component: cOAv4QMHX7
import * as React from "react";
import {
  classNames,
  Renderer,
  createPlasmicElementProxy,
  PlasmicSlot,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Badge from "../../Badge"; // plasmic-import: Zh0Xu99edL/component
import "@plasmicapp/react-web/lib/plasmic.css";
import "../plasmic__default_style.css"; // plasmic-import: global/defaultcss
import "./plasmic_site_layout.css"; // plasmic-import: oH8FCw6CW4Lg76cBx26GoT/projectcss
import "./PlasmicAward.css"; // plasmic-import: cOAv4QMHX7/css
import AwardsvgIcon from "./PlasmicIcon__Awardsvg"; // plasmic-import: LnEYthlvR/icon

export const PlasmicAward__VariantProps = new Array();

export const PlasmicAward__ArgProps = new Array(
  "title",
  "description",
  "badge"
);

function PlasmicAward__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <li
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      data-plasmic-wrap-flex-child={true}
      className={classNames({
        Award__root__1LT3p: true,
        "plasmic-default__all": true,
        "plasmic-default__li": true
      })}
    >
      <AwardsvgIcon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames({
          "Award__svg--baseMedium__Kys_EhTQV6_MVUpr": true,
          Award__svg__Kys_E: true,
          "plasmic-default__all": true,
          "plasmic-default__svg": true
        })}
        role={"img"}
        {...{}}
      ></AwardsvgIcon>

      <div
        className={classNames({
          "Award__box--baseMedium__PdrAMhTQV6_MVUpr": true,
          Award__box__PdrAM: true,
          "plasmic-default__all": true,
          "plasmic-default__div": true
        })}
      >
        <div
          className={classNames({
            "Award__box__d-2BI": true,
            "plasmic-default__all": true,
            "plasmic-default__div": true
          })}
        >
          <PlasmicSlot
            defaultContents={"Honorable Mention at ACM-ICPC World Finals"}
            value={args.title}
            className={classNames({
              "Award__slotTitle--baseMedium__sSzf1hTQV6_MVUpr": true,
              Award__slotTitle__sSzf1: true
            })}
          />
        </div>

        <div
          className={classNames({
            "Award__box--baseMedium__Jgq_hhTQV6_MVUpr": true,
            Award__box__Jgq_h: true,
            "plasmic-default__all": true,
            "plasmic-default__div": true
          })}
        >
          <PlasmicSlot
            defaultContents={"Orlando, USA"}
            value={args.description}
            className={classNames({
              "Award__slotDescription--baseMedium__c78elhTQV6_MVUpr": true,
              Award__slotDescription__c78el: true
            })}
          />
        </div>
      </div>

      <PlasmicSlot
        defaultContents={
          <Badge
            data-plasmic-name={"badge"}
            data-plasmic-override={overrides.badge}
            className={classNames({
              Award__badge__QJFA4: true,
              __wab_instance: true
            })}
            {...{}}
          >
            {"2011"}
          </Badge>
        }
        value={args.badge}
      />
    </li>
  );
}

class PlasmicAward__Renderer extends Renderer {
  constructor(variants, args) {
    super(variants, args, PlasmicAward__RenderFunc, "root");
  }
  create(variants, args) {
    return new PlasmicAward__Renderer(variants, args);
  }
  getInternalVariantProps() {
    return PlasmicAward__VariantProps;
  }
  getInternalArgProps() {
    return PlasmicAward__ArgProps;
  }
  forNode(name) {
    return super.forNode(name);
  }
}

export const PlasmicAward = function PlasmicAwardRoot(props) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: "root",
    descendantNames: ["root", "svg"],
    internalArgPropNames: PlasmicAward__ArgProps,
    internalVariantPropNames: PlasmicAward__VariantProps
  });

  return PlasmicAward__RenderFunc({
    variants,
    args,
    overrides,
    forNode: "root"
  });
};

PlasmicAward.svg = function PlasmicAwardSvg(props) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: "svg",
    descendantNames: ["svg"],
    internalArgPropNames: PlasmicAward__ArgProps,
    internalVariantPropNames: PlasmicAward__VariantProps
  });

  return PlasmicAward__RenderFunc({
    variants,
    args,
    overrides,
    forNode: "svg"
  });
};

PlasmicAward.badge = function PlasmicAwardBadge(props) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: "badge",
    descendantNames: [],
    internalArgPropNames: PlasmicAward__ArgProps,
    internalVariantPropNames: PlasmicAward__VariantProps
  });

  return PlasmicAward__RenderFunc({
    variants,
    args,
    overrides,
    forNode: "badge"
  });
};

PlasmicAward.createRenderer = () => new PlasmicAward__Renderer({}, {});

export default PlasmicAward;
/* prettier-ignore-end */
