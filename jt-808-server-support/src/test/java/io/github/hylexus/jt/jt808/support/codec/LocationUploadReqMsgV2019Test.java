package io.github.hylexus.jt.jt808.support.codec;

import io.github.hylexus.jt.jt808.support.annotation.msg.req.RequestField;
import io.github.hylexus.jt.jt808.support.annotation.msg.req.SlicedFrom;
import io.github.hylexus.jt.jt808.support.annotation.msg.req.SplittableRequestField;
import lombok.Data;
import lombok.experimental.Accessors;
import lombok.extern.slf4j.Slf4j;

import java.util.List;

import static io.github.hylexus.jt.jt808.support.data.MsgDataType.*;

/**
 * @author hylexus
 */
@Slf4j
@Data
@Accessors(chain = true)
//@Jt808ReqMsgBody(msgType = 0x0200, version = Jt808ProtocolVersion.VERSION_2019)
//public class LocationUploadReqMsgV2019Test implements Jt808HeaderSpecAware {
public class LocationUploadReqMsgV2019Test {

    //    @ToString.Exclude
    //    private Jt808MsgHeaderSpec header;

    //    public void setHeader(Jt808MsgHeaderSpec headerSpec) {
    //        this.header = headerSpec;
    //    }

    // (1). 报警标志
    @RequestField(order = 0, startIndex = 0, dataType = DWORD)
    private int alarmFlag;
    // (2). 状态
    @RequestField(order = 1, startIndex = 4, dataType = DWORD)
    @SplittableRequestField(splitPropertyValueIntoNestedBeanField = "statusInfo")
    private int status;

    private LocationUploadStatus statusInfo;

    // 将上面的 status 字段的第0位取出转为 int 类型
    @SlicedFrom(sourceFieldName = "status", bitIndex = 0)
    private int accIntStatus;
    // 将上面的 status 字段的第0位取出转为 boolean 类型
    @SlicedFrom(sourceFieldName = "status", bitIndex = 0)
    private Boolean accBooleanStatus;
    // 0 北纬;1 南纬
    // 将上面的 status 字段的第2位取出转为 int 类型
    @SlicedFrom(sourceFieldName = "status", bitIndex = 2)
    private int latType;
    // (3). 纬度(尚未除以 10^6)
    @RequestField(order = 2, startIndex = 8, dataType = DWORD)
    private Integer intLat;
    // (4). 经度(尚未除以 10^6)
    @RequestField(order = 3, startIndex = 12, dataType = DWORD)
    private Integer intLng;
    // (5). 高度
    @RequestField(order = 4, startIndex = 16, dataType = WORD)
    private Integer height;
    // (6). 速度
    @RequestField(order = 5, startIndex = 18, dataType = WORD)
    private int speed;
    // (7). 方向
    @RequestField(order = 6, startIndex = 20, dataType = WORD)
    private Integer direction;

    // (8). 时间
    @RequestField(order = 7, startIndex = 22, dataType = BCD, length = 6)
    private String time;

    // @BasicField(order = 8, startIndex = 28, dataType = LIST, byteCountMethod = "getExtraInfoLength")
    // @BasicField(order = 8, startIndex = 28, dataType = LIST, lengthExpression = "getExtraInfoLength()")
    @RequestField(order = 8, startIndex = 28, dataType = LIST, lengthExpression = "#request.msgBodyLength() - 28")
    private List<ExtraItem> extraItemList;

    @Data
    public static class ExtraItem {
        @RequestField(order = 0, startIndex = 0, dataType = BYTE)
        private byte id;
        @RequestField(order = 1, startIndex = 1, dataType = BYTE)
        private byte contentLength;

        // @BasicField(order = 3, startIndex = 2, lengthMethod = "getContentLengthMethod", dataType = BYTES)
        @RequestField(order = 3, startIndex = 2, lengthExpression = "#this.contentLength", dataType = BYTES)
        private byte[] content;

        public int getContentLengthMethod() {
            return contentLength;
        }
    }

    @Data
    public static class LocationUploadStatus {
        @SplittableRequestField.BitAt(bitIndex = 0)
        private boolean accStatus; // acc开?

        @SplittableRequestField.BitAt(bitIndex = 1)
        private int bit1; //1:定位, 0:未定位

        @SplittableRequestField.BitAt(bitIndex = 2)
        private Boolean isSouthLat;// 是否南纬? 0:北纬 1:南纬

        // 0:东经 1:西经
        @SplittableRequestField.BitAt(bitIndex = 3)
        private Integer lngType;

        // 0: 运营  1:停运
        @SplittableRequestField.BitAt(bitIndex = 4)
        private int operationStatus;

        // 0: 经纬度未经过保密插件加密  1:经纬度已经保密插件加密
        @SplittableRequestField.BitAt(bitIndex = 5)
        private int latLngEncryptStatus;

        // 1: 紧急刹车系统采集的前撞预警
        @SplittableRequestField.BitAt(bitIndex = 6)
        private int bit6;

        // 扯到偏移预警
        @SplittableRequestField.BitAt(bitIndex = 7)
        private int bit7;
    }
}
