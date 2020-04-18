import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem, { TreeItemProps } from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import DraggableCore from 'react-draggable';
import _ = require('lodash');
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';


function MinusSquare(props: SvgIconProps) {
  return (
    <SvgIcon fontSize="inherit" {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
    </SvgIcon>
  );
}

function PlusSquare(props: SvgIconProps) {
  return (
    <SvgIcon fontSize="inherit" {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
    </SvgIcon>
  );
}

declare module 'csstype' {
  interface Properties {
    '--tree-view-color'?: string;
    '--tree-view-bg-color'?: string;
  }
}

type StyledTreeItemProps = TreeItemProps & {
  bgColor?: string;
  color?: string;
  labelIcon: any;
  labelInfo?: string;
  labelText: string;
  triggerDrop?: any;
};

const useTreeItemStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.text.secondary,
      '&:focus > $content': {
        backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
        color: 'var(--tree-view-color)',
      },
    },
    content: {
      color: theme.palette.text.secondary,
      borderTopRightRadius: theme.spacing(2),
      borderBottomRightRadius: theme.spacing(2),
      paddingRight: theme.spacing(1),
      fontWeight: theme.typography.fontWeightMedium,
      '$expanded > &': {
        fontWeight: theme.typography.fontWeightRegular,
      },
    },
    group: {
      marginLeft: 0,
      '& $content': {
        paddingLeft: theme.spacing(2),
      },
    },
    expanded: {},
    label: {
      fontWeight: 'inherit',
      color: 'inherit',
    },
    labelRoot: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0.5, 0),
    },
    labelText: {
      fontWeight: 'inherit',
      flexGrow: 1,
    },
  }),
);

function StyledTreeItem(props: StyledTreeItemProps) {
  const classes = useTreeItemStyles();
  const { labelText, labelIcon, labelInfo, color, bgColor, triggerDrop, ...other } = props;
  const handleTriggerDrop = (e: any) => {
    triggerDrop(labelText, e)
  }
  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <DraggableCore
            defaultPosition={{ x: 0, y: 0 }}
            position={{ x: 0, y: 0 }}
            scale={1}
            onStop={handleTriggerDrop}>
            <div style={{ display: "flex", flexDirection: 'row' }}>
              <div style={{marginRight: 5}}>
                {labelIcon}
              </div>
              <Typography variant="body2" className={classes.labelText}>
                {labelText}
              </Typography>
            </div>
          </DraggableCore>
        </div>

      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
  );
}

const useStyles = makeStyles(
  createStyles({
    root: {
      flexGrow: 1
    },
  }),
);

interface Props {
  data: any[]
  triggerDrop: any
}

export default function CustomizedTreeView(props: Props) {
  const classes = useStyles();
  const { data, triggerDrop } = props;
  const byGroyp = _.groupBy(data, (o) => o.group);
  const treeData = Object.keys(byGroyp).reduce((ret: any, group: string) => {
    ret[group as string] = _.groupBy(byGroyp[group], (o) => o.category);
    return ret;
  }, {});
  const ids: string[] | undefined = [];
  let curId = 0;
  const buildTree = () => {
    return Object.keys(treeData).map(group => {
      curId += 1;
      ids.push(curId.toString());
      return <TreeItem
        key={`group-${curId}`}
        nodeId={curId.toString()}
        label={<Typography variant="body1" style={{fontWeight: `bold`}}>{`${group} Steps`}</Typography>}>
        {
          Object.keys(treeData[group]).map(category => {
            curId += 1;
            ids.push(curId.toString());
            return <TreeItem
              key={`category-${curId}`}
              nodeId={curId.toString()}
              label={category}>
              {
                treeData[group][category].map((item: any, index: number) => {
                  curId += 1;
                  ids.push(curId.toString());
                  return <StyledTreeItem
                    key={`item-${curId}`}
                    nodeId={curId.toString()}
                    triggerDrop={triggerDrop}
                    labelText={item.type}
                    labelIcon={item.icon}
                    labelInfo={item.category}
                  />
                })
              }
            </TreeItem>
          })
        }
      </TreeItem>
    })
  }

  return (
    <TreeView
      className={classes.root}
      defaultExpanded={ids}
      defaultCollapseIcon={<MinusSquare />}
      defaultExpandIcon={<PlusSquare />}
      defaultEndIcon={<div style={{ width: 24 }} />}
    >
      {
        !!data && buildTree()
      }

    </TreeView>
  );
}