package io.github.hylexus.jt.jt808.support.dispatcher;

import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import javax.annotation.Nonnull;
import javax.annotation.Nullable;

@Setter
@Getter
@Accessors(chain = true)
public class Jt808HandlerResult {

    private static final Jt808HandlerResult EMPTY_RESULT = new Jt808HandlerResult();

    public static Jt808HandlerResult empty() {
        return EMPTY_RESULT;
    }

    public static boolean isEmptyResult(Jt808HandlerResult result) {
        return result == EMPTY_RESULT;
    }

    @Nonnull
    private Object handler;

    @Nullable
    private Object returnValue;

}