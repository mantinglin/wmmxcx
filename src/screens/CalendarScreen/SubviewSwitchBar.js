import React from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';

export default function SubviewSwitchBar({ subviewIdx, setSubviewIdx }) {
  return (
    <Layout style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "#ECECEC", height: 45 }}>
      <Button style={{ backgroundColor: subviewIdx === 0 ? "#D8D8D8" : "#ECECEC", borderRadius: 100 }} appearance='ghost' status='basic' size='small' onPress={() => setSubviewIdx(0)}>
        <Text appearance={ subviewIdx === 0 ? "default" : "hint" }>每月</Text>
      </Button>
      <Button style={{ backgroundColor: subviewIdx === 1 ? "#D8D8D8" : "#ECECEC", borderRadius: 100 }} appearance='ghost' status='basic' size='small' onPress={() => setSubviewIdx(1)}>
        <Text appearance={ subviewIdx === 1 ? "default" : "hint" }>每周</Text>
      </Button>
      <Button style={{ backgroundColor: subviewIdx === 2 ? "#D8D8D8" : "#ECECEC", borderRadius: 100 }} appearance='ghost' status='basic' size='small' onPress={() => setSubviewIdx(2)}>
        <Text appearance={ subviewIdx === 2 ? "default" : "hint" }>每日</Text>
      </Button>
    </Layout>
  );
}
