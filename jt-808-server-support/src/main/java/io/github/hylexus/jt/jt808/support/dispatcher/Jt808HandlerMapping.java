package io.github.hylexus.jt.jt808.support.dispatcher;

import io.github.hylexus.jt.core.OrderedComponent;
import io.github.hylexus.jt.jt808.request.Jt808Request;
import io.github.hylexus.jt.jt808.session.Jt808Session;

import java.util.Optional;

/**
 * @author hylexus
 */
public interface Jt808HandlerMapping extends OrderedComponent {

    Optional<Jt808HandlerExecutionChain> getHandler(Jt808Request request, Jt808Session session);

}