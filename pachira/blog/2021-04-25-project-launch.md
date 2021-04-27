---
slug: project launch
title: Project Launch Schedule
author: Team Pachira
author_title: skunkwerks
author_url: https://github.com/pachira-org
author_image_url: "../src/img/money_tree_logo.png"
tags: [launch]
---

### Project Launch Schedule

|  milestone  |  phase  |  date  |  status  |
|---|---|---|---|
|  protocol rules  |  alpha  |  May 2021  |  pre-release  |
|  test net v1  |  alpha  |  May 2021  |  pre-release  |
|  mining firmware  |  alpha  |  June 2021  |  in development  |
|  protocol audit  |  alpha  |  June 2021  |  in development  |
|  test net v2 (public)  |  beta  | June 2021  |  in development  |
|  mining firmware  |  beta  |  June 2021  |  planning  |
|  mainnet release  |  production  |  July 2021  |  planning  |

:::tip Can I sign up for updates?

Yes, please fill out this form to get on our mailing list.

:::

export const Highlight = ({children, color}) => (
<span
style={{
backgroundColor: color,
borderRadius: '20px',
color: '#fff',
padding: '10px',
cursor: 'pointer',
}}
onClick={() => {
alert(`You clicked the color ${color} with label ${children}`)
}}>
{children}
</span>
);
