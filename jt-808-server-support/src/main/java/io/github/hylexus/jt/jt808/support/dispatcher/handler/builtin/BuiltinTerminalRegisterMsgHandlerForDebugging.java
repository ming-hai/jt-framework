package io.github.hylexus.jt.jt808.support.dispatcher.handler.builtin;

import io.github.hylexus.jt.core.BuiltinComponent;
import io.github.hylexus.jt.core.ReplaceableComponent;
import io.github.hylexus.jt.jt808.spec.Jt808RequestEntity;
import io.github.hylexus.jt.jt808.spec.Jt808Response;
import io.github.hylexus.jt.jt808.spec.builtin.msg.req.BuiltinTerminalRegisterMsgV2011;
import io.github.hylexus.jt.jt808.spec.builtin.msg.req.BuiltinTerminalRegisterMsgV2013;
import io.github.hylexus.jt.jt808.spec.builtin.msg.req.BuiltinTerminalRegisterMsgV2019;
import io.github.hylexus.jt.jt808.spec.builtin.msg.resp.BuiltinTerminalRegisterReplyMsg;
import io.github.hylexus.jt.jt808.spec.session.Jt808Session;
import io.github.hylexus.jt.jt808.support.annotation.handler.Jt808RequestHandler;
import io.github.hylexus.jt.jt808.support.annotation.handler.Jt808RequestHandlerMapping;
import lombok.extern.slf4j.Slf4j;

import static io.github.hylexus.jt.jt808.Jt808ProtocolVersion.*;

/**
 * @author hylexus
 */
@Slf4j
@Jt808RequestHandler
public class BuiltinTerminalRegisterMsgHandlerForDebugging implements ReplaceableComponent, BuiltinComponent {

    @Override
    public int getOrder() {
        return LOWEST_PRECEDENCE;
    }

    @Jt808RequestHandlerMapping(msgType = 0x0100, versions = VERSION_2011)
    public BuiltinTerminalRegisterReplyMsg processTerminalRegisterV2011(BuiltinTerminalRegisterMsgV2011 msgBody, Jt808Session session) {
        log.info("TerminalRegister V2011 : {}", msgBody);
        return new BuiltinTerminalRegisterReplyMsg()
                .setFlowId(session.getCurrentFlowId())
                .setAuthCode("AuthCode-admin-2011")
                .setResult((byte) 0);
    }

    @Jt808RequestHandlerMapping(msgType = 0x0100, versions = VERSION_2013)
    public BuiltinTerminalRegisterReplyMsg processTerminalRegisterV2013(Jt808RequestEntity<BuiltinTerminalRegisterMsgV2013> entity) {
        log.info("TerminalRegister V2013 : {}", entity.body());
        return new BuiltinTerminalRegisterReplyMsg()
                .setFlowId(entity.session().getCurrentFlowId())
                .setAuthCode("AuthCode-admin-2013")
                .setResult((byte) 0);
    }

    @Jt808RequestHandlerMapping(msgType = 0x0100, versions = VERSION_2019)
    public Jt808Response processTerminalRegisterV2019(Jt808RequestEntity<BuiltinTerminalRegisterMsgV2019> entity) {
        log.info("TerminalRegister V2019 : {}", entity.body());

        return Jt808Response.newBuilder()
                .flowId(entity.session().getCurrentFlowId())
                .body(writer -> writer
                        // 应答流水号
                        .writeWord(entity.session().getCurrentFlowId())
                        // 结果
                        .writeByte(0)
                        // 鉴权码
                        .writeString("AuthCode-admin-2019")
                ).build();
    }

}