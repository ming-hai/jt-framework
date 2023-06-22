package io.github.hylexus.jt.jt1078.support.codec.impl.collector;

import io.github.hylexus.jt.jt1078.spec.Jt1078Request;
import io.github.hylexus.jt.jt1078.spec.impl.subscription.PassThroughJt1078Subscription;
import reactor.core.publisher.FluxSink;

public class PassThroughJt1078ChannelCollector
        extends AbstractChannelCollector<PassThroughJt1078Subscription, PassThroughSubscriber> {

    @Override
    protected void doCollect(Jt1078Request request) {
        forEachSubscriber(passThroughSubscriber -> {
            passThroughSubscriber.sink().next(new PassThroughJt1078Subscription(request));
        });
    }

    @Override
    protected PassThroughSubscriber createSubscribe(String uuid, FluxSink<PassThroughJt1078Subscription> fluxSink) {
        return new PassThroughSubscriber(uuid, "request.rawByteBuf()", fluxSink);
    }
}
