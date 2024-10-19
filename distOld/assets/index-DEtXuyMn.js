(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = t(l);
    fetch(l.href, o);
  }
})();
var es = { exports: {} },
  rl = {},
  ns = { exports: {} },
  R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $t = Symbol.for("react.element"),
  hc = Symbol.for("react.portal"),
  yc = Symbol.for("react.fragment"),
  gc = Symbol.for("react.strict_mode"),
  wc = Symbol.for("react.profiler"),
  kc = Symbol.for("react.provider"),
  Sc = Symbol.for("react.context"),
  Ec = Symbol.for("react.forward_ref"),
  Cc = Symbol.for("react.suspense"),
  xc = Symbol.for("react.memo"),
  Ac = Symbol.for("react.lazy"),
  Bi = Symbol.iterator;
function Nc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Bi && e[Bi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ts = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  rs = Object.assign,
  ls = {};
function ut(e, n, t) {
  (this.props = e),
    (this.context = n),
    (this.refs = ls),
    (this.updater = t || ts);
}
ut.prototype.isReactComponent = {};
ut.prototype.setState = function (e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, n, "setState");
};
ut.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function os() {}
os.prototype = ut.prototype;
function Ko(e, n, t) {
  (this.props = e),
    (this.context = n),
    (this.refs = ls),
    (this.updater = t || ts);
}
var Wo = (Ko.prototype = new os());
Wo.constructor = Ko;
rs(Wo, ut.prototype);
Wo.isPureReactComponent = !0;
var Ui = Array.isArray,
  is = Object.prototype.hasOwnProperty,
  Yo = { current: null },
  us = { key: !0, ref: !0, __self: !0, __source: !0 };
function ss(e, n, t) {
  var r,
    l = {},
    o = null,
    i = null;
  if (n != null)
    for (r in (n.ref !== void 0 && (i = n.ref),
    n.key !== void 0 && (o = "" + n.key),
    n))
      is.call(n, r) && !us.hasOwnProperty(r) && (l[r] = n[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = t;
  else if (1 < u) {
    for (var s = Array(u), f = 0; f < u; f++) s[f] = arguments[f + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: $t,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Yo.current,
  };
}
function Pc(e, n) {
  return {
    $$typeof: $t,
    type: e.type,
    key: n,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Go(e) {
  return typeof e == "object" && e !== null && e.$$typeof === $t;
}
function zc(e) {
  var n = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (t) {
      return n[t];
    })
  );
}
var Hi = /\/+/g;
function El(e, n) {
  return typeof e == "object" && e !== null && e.key != null
    ? zc("" + e.key)
    : n.toString(36);
}
function Sr(e, n, t, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case $t:
          case hc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + El(i, 0) : r),
      Ui(l)
        ? ((t = ""),
          e != null && (t = e.replace(Hi, "$&/") + "/"),
          Sr(l, n, t, "", function (f) {
            return f;
          }))
        : l != null &&
          (Go(l) &&
            (l = Pc(
              l,
              t +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Hi, "$&/") + "/") +
                e
            )),
          n.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Ui(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + El(o, u);
      i += Sr(o, n, t, s, l);
    }
  else if (((s = Nc(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + El(o, u++)), (i += Sr(o, n, t, s, l));
  else if (o === "object")
    throw (
      ((n = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (n === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : n) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function lr(e, n, t) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Sr(e, r, "", "", function (o) {
      return n.call(t, o, l++);
    }),
    r
  );
}
function _c(e) {
  if (e._status === -1) {
    var n = e._result;
    (n = n()),
      n.then(
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = t));
        },
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = t));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = n));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var se = { current: null },
  Er = { transition: null },
  Lc = {
    ReactCurrentDispatcher: se,
    ReactCurrentBatchConfig: Er,
    ReactCurrentOwner: Yo,
  };
function as() {
  throw Error("act(...) is not supported in production builds of React.");
}
R.Children = {
  map: lr,
  forEach: function (e, n, t) {
    lr(
      e,
      function () {
        n.apply(this, arguments);
      },
      t
    );
  },
  count: function (e) {
    var n = 0;
    return (
      lr(e, function () {
        n++;
      }),
      n
    );
  },
  toArray: function (e) {
    return (
      lr(e, function (n) {
        return n;
      }) || []
    );
  },
  only: function (e) {
    if (!Go(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
R.Component = ut;
R.Fragment = yc;
R.Profiler = wc;
R.PureComponent = Ko;
R.StrictMode = gc;
R.Suspense = Cc;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lc;
R.act = as;
R.cloneElement = function (e, n, t) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = rs({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (n != null) {
    if (
      (n.ref !== void 0 && ((o = n.ref), (i = Yo.current)),
      n.key !== void 0 && (l = "" + n.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in n)
      is.call(n, s) &&
        !us.hasOwnProperty(s) &&
        (r[s] = n[s] === void 0 && u !== void 0 ? u[s] : n[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = t;
  else if (1 < s) {
    u = Array(s);
    for (var f = 0; f < s; f++) u[f] = arguments[f + 2];
    r.children = u;
  }
  return { $$typeof: $t, type: e.type, key: l, ref: o, props: r, _owner: i };
};
R.createContext = function (e) {
  return (
    (e = {
      $$typeof: Sc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: kc, _context: e }),
    (e.Consumer = e)
  );
};
R.createElement = ss;
R.createFactory = function (e) {
  var n = ss.bind(null, e);
  return (n.type = e), n;
};
R.createRef = function () {
  return { current: null };
};
R.forwardRef = function (e) {
  return { $$typeof: Ec, render: e };
};
R.isValidElement = Go;
R.lazy = function (e) {
  return { $$typeof: Ac, _payload: { _status: -1, _result: e }, _init: _c };
};
R.memo = function (e, n) {
  return { $$typeof: xc, type: e, compare: n === void 0 ? null : n };
};
R.startTransition = function (e) {
  var n = Er.transition;
  Er.transition = {};
  try {
    e();
  } finally {
    Er.transition = n;
  }
};
R.unstable_act = as;
R.useCallback = function (e, n) {
  return se.current.useCallback(e, n);
};
R.useContext = function (e) {
  return se.current.useContext(e);
};
R.useDebugValue = function () {};
R.useDeferredValue = function (e) {
  return se.current.useDeferredValue(e);
};
R.useEffect = function (e, n) {
  return se.current.useEffect(e, n);
};
R.useId = function () {
  return se.current.useId();
};
R.useImperativeHandle = function (e, n, t) {
  return se.current.useImperativeHandle(e, n, t);
};
R.useInsertionEffect = function (e, n) {
  return se.current.useInsertionEffect(e, n);
};
R.useLayoutEffect = function (e, n) {
  return se.current.useLayoutEffect(e, n);
};
R.useMemo = function (e, n) {
  return se.current.useMemo(e, n);
};
R.useReducer = function (e, n, t) {
  return se.current.useReducer(e, n, t);
};
R.useRef = function (e) {
  return se.current.useRef(e);
};
R.useState = function (e) {
  return se.current.useState(e);
};
R.useSyncExternalStore = function (e, n, t) {
  return se.current.useSyncExternalStore(e, n, t);
};
R.useTransition = function () {
  return se.current.useTransition();
};
R.version = "18.3.1";
ns.exports = R;
var F = ns.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rc = F,
  Tc = Symbol.for("react.element"),
  Mc = Symbol.for("react.fragment"),
  Ic = Object.prototype.hasOwnProperty,
  Oc = Rc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  jc = { key: !0, ref: !0, __self: !0, __source: !0 };
function cs(e, n, t) {
  var r,
    l = {},
    o = null,
    i = null;
  t !== void 0 && (o = "" + t),
    n.key !== void 0 && (o = "" + n.key),
    n.ref !== void 0 && (i = n.ref);
  for (r in n) Ic.call(n, r) && !jc.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps)
    for (r in ((n = e.defaultProps), n)) l[r] === void 0 && (l[r] = n[r]);
  return {
    $$typeof: Tc,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Oc.current,
  };
}
rl.Fragment = Mc;
rl.jsx = cs;
rl.jsxs = cs;
es.exports = rl;
var x = es.exports,
  fs = { exports: {} },
  we = {},
  ds = { exports: {} },
  ps = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function n(P, _) {
    var L = P.length;
    P.push(_);
    e: for (; 0 < L; ) {
      var W = (L - 1) >>> 1,
        Z = P[W];
      if (0 < l(Z, _)) (P[W] = _), (P[L] = Z), (L = W);
      else break e;
    }
  }
  function t(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var _ = P[0],
      L = P.pop();
    if (L !== _) {
      P[0] = L;
      e: for (var W = 0, Z = P.length, tr = Z >>> 1; W < tr; ) {
        var gn = 2 * (W + 1) - 1,
          Sl = P[gn],
          wn = gn + 1,
          rr = P[wn];
        if (0 > l(Sl, L))
          wn < Z && 0 > l(rr, Sl)
            ? ((P[W] = rr), (P[wn] = L), (W = wn))
            : ((P[W] = Sl), (P[gn] = L), (W = gn));
        else if (wn < Z && 0 > l(rr, L)) (P[W] = rr), (P[wn] = L), (W = wn);
        else break e;
      }
    }
    return _;
  }
  function l(P, _) {
    var L = P.sortIndex - _.sortIndex;
    return L !== 0 ? L : P.id - _.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    f = [],
    v = 1,
    m = null,
    p = 3,
    S = !1,
    w = !1,
    C = !1,
    O = typeof setTimeout == "function" ? setTimeout : null,
    c = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(P) {
    for (var _ = t(f); _ !== null; ) {
      if (_.callback === null) r(f);
      else if (_.startTime <= P)
        r(f), (_.sortIndex = _.expirationTime), n(s, _);
      else break;
      _ = t(f);
    }
  }
  function h(P) {
    if (((C = !1), d(P), !w))
      if (t(s) !== null) (w = !0), wl(A);
      else {
        var _ = t(f);
        _ !== null && kl(h, _.startTime - P);
      }
  }
  function A(P, _) {
    (w = !1), C && ((C = !1), c(E), (E = -1)), (S = !0);
    var L = p;
    try {
      for (
        d(_), m = t(s);
        m !== null && (!(m.expirationTime > _) || (P && !Pe()));

      ) {
        var W = m.callback;
        if (typeof W == "function") {
          (m.callback = null), (p = m.priorityLevel);
          var Z = W(m.expirationTime <= _);
          (_ = e.unstable_now()),
            typeof Z == "function" ? (m.callback = Z) : m === t(s) && r(s),
            d(_);
        } else r(s);
        m = t(s);
      }
      if (m !== null) var tr = !0;
      else {
        var gn = t(f);
        gn !== null && kl(h, gn.startTime - _), (tr = !1);
      }
      return tr;
    } finally {
      (m = null), (p = L), (S = !1);
    }
  }
  var g = !1,
    k = null,
    E = -1,
    T = 5,
    z = -1;
  function Pe() {
    return !(e.unstable_now() - z < T);
  }
  function ct() {
    if (k !== null) {
      var P = e.unstable_now();
      z = P;
      var _ = !0;
      try {
        _ = k(!0, P);
      } finally {
        _ ? ft() : ((g = !1), (k = null));
      }
    } else g = !1;
  }
  var ft;
  if (typeof a == "function")
    ft = function () {
      a(ct);
    };
  else if (typeof MessageChannel < "u") {
    var Fi = new MessageChannel(),
      vc = Fi.port2;
    (Fi.port1.onmessage = ct),
      (ft = function () {
        vc.postMessage(null);
      });
  } else
    ft = function () {
      O(ct, 0);
    };
  function wl(P) {
    (k = P), g || ((g = !0), ft());
  }
  function kl(P, _) {
    E = O(function () {
      P(e.unstable_now());
    }, _);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || S || ((w = !0), wl(A));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (T = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return t(s);
    }),
    (e.unstable_next = function (P) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = p;
      }
      var L = p;
      p = _;
      try {
        return P();
      } finally {
        p = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, _) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var L = p;
      p = P;
      try {
        return _();
      } finally {
        p = L;
      }
    }),
    (e.unstable_scheduleCallback = function (P, _, L) {
      var W = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? W + L : W))
          : (L = W),
        P)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = L + Z),
        (P = {
          id: v++,
          callback: _,
          priorityLevel: P,
          startTime: L,
          expirationTime: Z,
          sortIndex: -1,
        }),
        L > W
          ? ((P.sortIndex = L),
            n(f, P),
            t(s) === null &&
              P === t(f) &&
              (C ? (c(E), (E = -1)) : (C = !0), kl(h, L - W)))
          : ((P.sortIndex = Z), n(s, P), w || S || ((w = !0), wl(A))),
        P
      );
    }),
    (e.unstable_shouldYield = Pe),
    (e.unstable_wrapCallback = function (P) {
      var _ = p;
      return function () {
        var L = p;
        p = _;
        try {
          return P.apply(this, arguments);
        } finally {
          p = L;
        }
      };
    });
})(ps);
ds.exports = ps;
var Dc = ds.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fc = F,
  ge = Dc;
function y(e) {
  for (
    var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1;
    t < arguments.length;
    t++
  )
    n += "&args[]=" + encodeURIComponent(arguments[t]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    n +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ms = new Set(),
  It = {};
function Tn(e, n) {
  et(e, n), et(e + "Capture", n);
}
function et(e, n) {
  for (It[e] = n, e = 0; e < n.length; e++) ms.add(n[e]);
}
var We = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  $l = Object.prototype.hasOwnProperty,
  Bc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Qi = {},
  Vi = {};
function Uc(e) {
  return $l.call(Vi, e)
    ? !0
    : $l.call(Qi, e)
    ? !1
    : Bc.test(e)
    ? (Vi[e] = !0)
    : ((Qi[e] = !0), !1);
}
function Hc(e, n, t, r) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof n) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : t !== null
        ? !t.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Qc(e, n, t, r) {
  if (n === null || typeof n > "u" || Hc(e, n, t, r)) return !0;
  if (r) return !1;
  if (t !== null)
    switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
  return !1;
}
function ae(e, n, t, r, l, o, i) {
  (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = t),
    (this.propertyName = e),
    (this.type = n),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ae(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var n = e[0];
  ne[n] = new ae(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ne[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ne[e] = new ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ne[e] = new ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ne[e] = new ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ne[e] = new ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ne[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Xo = /[\-:]([a-z])/g;
function Jo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(Xo, Jo);
    ne[n] = new ae(n, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(Xo, Jo);
    ne[n] = new ae(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var n = e.replace(Xo, Jo);
  ne[n] = new ae(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ne[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ae(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ne[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Zo(e, n, t, r) {
  var l = ne.hasOwnProperty(n) ? ne[n] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < n.length) ||
      (n[0] !== "o" && n[0] !== "O") ||
      (n[1] !== "n" && n[1] !== "N")) &&
    (Qc(n, t, l, r) && (t = null),
    r || l === null
      ? Uc(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
      : l.mustUseProperty
      ? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : "") : t)
      : ((n = l.attributeName),
        (r = l.attributeNamespace),
        t === null
          ? e.removeAttribute(n)
          : ((l = l.type),
            (t = l === 3 || (l === 4 && t === !0) ? "" : "" + t),
            r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var Je = Fc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  or = Symbol.for("react.element"),
  On = Symbol.for("react.portal"),
  jn = Symbol.for("react.fragment"),
  $o = Symbol.for("react.strict_mode"),
  ql = Symbol.for("react.profiler"),
  vs = Symbol.for("react.provider"),
  hs = Symbol.for("react.context"),
  qo = Symbol.for("react.forward_ref"),
  bl = Symbol.for("react.suspense"),
  eo = Symbol.for("react.suspense_list"),
  bo = Symbol.for("react.memo"),
  qe = Symbol.for("react.lazy"),
  ys = Symbol.for("react.offscreen"),
  Ki = Symbol.iterator;
function dt(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ki && e[Ki]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var V = Object.assign,
  Cl;
function St(e) {
  if (Cl === void 0)
    try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      Cl = (n && n[1]) || "";
    }
  return (
    `
` +
    Cl +
    e
  );
}
var xl = !1;
function Al(e, n) {
  if (!e || xl) return "";
  xl = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n)
      if (
        ((n = function () {
          throw Error();
        }),
        Object.defineProperty(n.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(n, []);
        } catch (f) {
          var r = f;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (f) {
          r = f;
        }
        e.call(n.prototype);
      }
    else {
      try {
        throw Error();
      } catch (f) {
        r = f;
      }
      e();
    }
  } catch (f) {
    if (f && r && typeof f.stack == "string") {
      for (
        var l = f.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (xl = !1), (Error.prepareStackTrace = t);
  }
  return (e = e ? e.displayName || e.name : "") ? St(e) : "";
}
function Vc(e) {
  switch (e.tag) {
    case 5:
      return St(e.type);
    case 16:
      return St("Lazy");
    case 13:
      return St("Suspense");
    case 19:
      return St("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Al(e.type, !1)), e;
    case 11:
      return (e = Al(e.type.render, !1)), e;
    case 1:
      return (e = Al(e.type, !0)), e;
    default:
      return "";
  }
}
function no(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case jn:
      return "Fragment";
    case On:
      return "Portal";
    case ql:
      return "Profiler";
    case $o:
      return "StrictMode";
    case bl:
      return "Suspense";
    case eo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case hs:
        return (e.displayName || "Context") + ".Consumer";
      case vs:
        return (e._context.displayName || "Context") + ".Provider";
      case qo:
        var n = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = n.displayName || n.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case bo:
        return (
          (n = e.displayName || null), n !== null ? n : no(e.type) || "Memo"
        );
      case qe:
        (n = e._payload), (e = e._init);
        try {
          return no(e(n));
        } catch {}
    }
  return null;
}
function Kc(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (n.displayName || "Context") + ".Consumer";
    case 10:
      return (n._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = n.render),
        (e = e.displayName || e.name || ""),
        n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return n;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return no(n);
    case 8:
      return n === $o ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof n == "function") return n.displayName || n.name || null;
      if (typeof n == "string") return n;
  }
  return null;
}
function pn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function gs(e) {
  var n = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (n === "checkbox" || n === "radio")
  );
}
function Wc(e) {
  var n = gs(e) ? "checked" : "value",
    t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
    r = "" + e[n];
  if (
    !e.hasOwnProperty(n) &&
    typeof t < "u" &&
    typeof t.get == "function" &&
    typeof t.set == "function"
  ) {
    var l = t.get,
      o = t.set;
    return (
      Object.defineProperty(e, n, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, n, { enumerable: t.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[n];
        },
      }
    );
  }
}
function ir(e) {
  e._valueTracker || (e._valueTracker = Wc(e));
}
function ws(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue(),
    r = "";
  return (
    e && (r = gs(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== t ? (n.setValue(e), !0) : !1
  );
}
function Mr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function to(e, n) {
  var t = n.checked;
  return V({}, n, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: t ?? e._wrapperState.initialChecked,
  });
}
function Wi(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue,
    r = n.checked != null ? n.checked : n.defaultChecked;
  (t = pn(n.value != null ? n.value : t)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: t,
      controlled:
        n.type === "checkbox" || n.type === "radio"
          ? n.checked != null
          : n.value != null,
    });
}
function ks(e, n) {
  (n = n.checked), n != null && Zo(e, "checked", n, !1);
}
function ro(e, n) {
  ks(e, n);
  var t = pn(n.value),
    r = n.type;
  if (t != null)
    r === "number"
      ? ((t === 0 && e.value === "") || e.value != t) && (e.value = "" + t)
      : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value")
    ? lo(e, n.type, t)
    : n.hasOwnProperty("defaultValue") && lo(e, n.type, pn(n.defaultValue)),
    n.checked == null &&
      n.defaultChecked != null &&
      (e.defaultChecked = !!n.defaultChecked);
}
function Yi(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (n.value !== void 0 && n.value !== null)
      )
    )
      return;
    (n = "" + e._wrapperState.initialValue),
      t || n === e.value || (e.value = n),
      (e.defaultValue = n);
  }
  (t = e.name),
    t !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    t !== "" && (e.name = t);
}
function lo(e, n, t) {
  (n !== "number" || Mr(e.ownerDocument) !== e) &&
    (t == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var Et = Array.isArray;
function Gn(e, n, t, r) {
  if (((e = e.options), n)) {
    n = {};
    for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
    for (t = 0; t < e.length; t++)
      (l = n.hasOwnProperty("$" + e[t].value)),
        e[t].selected !== l && (e[t].selected = l),
        l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = "" + pn(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function oo(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(y(91));
  return V({}, n, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Gi(e, n) {
  var t = n.value;
  if (t == null) {
    if (((t = n.children), (n = n.defaultValue), t != null)) {
      if (n != null) throw Error(y(92));
      if (Et(t)) {
        if (1 < t.length) throw Error(y(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ""), (t = n);
  }
  e._wrapperState = { initialValue: pn(t) };
}
function Ss(e, n) {
  var t = pn(n.value),
    r = pn(n.defaultValue);
  t != null &&
    ((t = "" + t),
    t !== e.value && (e.value = t),
    n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
    r != null && (e.defaultValue = "" + r);
}
function Xi(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function Es(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function io(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Es(n)
    : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ur,
  Cs = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (n, t, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(n, t, r, l);
          });
        }
      : e;
  })(function (e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = n;
    else {
      for (
        ur = ur || document.createElement("div"),
          ur.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
          n = ur.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; n.firstChild; ) e.appendChild(n.firstChild);
    }
  });
function Ot(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var At = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Yc = ["Webkit", "ms", "Moz", "O"];
Object.keys(At).forEach(function (e) {
  Yc.forEach(function (n) {
    (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (At[n] = At[e]);
  });
});
function xs(e, n, t) {
  return n == null || typeof n == "boolean" || n === ""
    ? ""
    : t || typeof n != "number" || n === 0 || (At.hasOwnProperty(e) && At[e])
    ? ("" + n).trim()
    : n + "px";
}
function As(e, n) {
  e = e.style;
  for (var t in n)
    if (n.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0,
        l = xs(t, n[t], r);
      t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : (e[t] = l);
    }
}
var Gc = V(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function uo(e, n) {
  if (n) {
    if (Gc[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(y(60));
      if (
        typeof n.dangerouslySetInnerHTML != "object" ||
        !("__html" in n.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (n.style != null && typeof n.style != "object") throw Error(y(62));
  }
}
function so(e, n) {
  if (e.indexOf("-") === -1) return typeof n.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ao = null;
function ei(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var co = null,
  Xn = null,
  Jn = null;
function Ji(e) {
  if ((e = er(e))) {
    if (typeof co != "function") throw Error(y(280));
    var n = e.stateNode;
    n && ((n = sl(n)), co(e.stateNode, e.type, n));
  }
}
function Ns(e) {
  Xn ? (Jn ? Jn.push(e) : (Jn = [e])) : (Xn = e);
}
function Ps() {
  if (Xn) {
    var e = Xn,
      n = Jn;
    if (((Jn = Xn = null), Ji(e), n)) for (e = 0; e < n.length; e++) Ji(n[e]);
  }
}
function zs(e, n) {
  return e(n);
}
function _s() {}
var Nl = !1;
function Ls(e, n, t) {
  if (Nl) return e(n, t);
  Nl = !0;
  try {
    return zs(e, n, t);
  } finally {
    (Nl = !1), (Xn !== null || Jn !== null) && (_s(), Ps());
  }
}
function jt(e, n) {
  var t = e.stateNode;
  if (t === null) return null;
  var r = sl(t);
  if (r === null) return null;
  t = r[n];
  e: switch (n) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (t && typeof t != "function") throw Error(y(231, n, typeof t));
  return t;
}
var fo = !1;
if (We)
  try {
    var pt = {};
    Object.defineProperty(pt, "passive", {
      get: function () {
        fo = !0;
      },
    }),
      window.addEventListener("test", pt, pt),
      window.removeEventListener("test", pt, pt);
  } catch {
    fo = !1;
  }
function Xc(e, n, t, r, l, o, i, u, s) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, f);
  } catch (v) {
    this.onError(v);
  }
}
var Nt = !1,
  Ir = null,
  Or = !1,
  po = null,
  Jc = {
    onError: function (e) {
      (Nt = !0), (Ir = e);
    },
  };
function Zc(e, n, t, r, l, o, i, u, s) {
  (Nt = !1), (Ir = null), Xc.apply(Jc, arguments);
}
function $c(e, n, t, r, l, o, i, u, s) {
  if ((Zc.apply(this, arguments), Nt)) {
    if (Nt) {
      var f = Ir;
      (Nt = !1), (Ir = null);
    } else throw Error(y(198));
    Or || ((Or = !0), (po = f));
  }
}
function Mn(e) {
  var n = e,
    t = e;
  if (e.alternate) for (; n.return; ) n = n.return;
  else {
    e = n;
    do (n = e), n.flags & 4098 && (t = n.return), (e = n.return);
    while (e);
  }
  return n.tag === 3 ? t : null;
}
function Rs(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (
      (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
      n !== null)
    )
      return n.dehydrated;
  }
  return null;
}
function Zi(e) {
  if (Mn(e) !== e) throw Error(y(188));
}
function qc(e) {
  var n = e.alternate;
  if (!n) {
    if (((n = Mn(e)), n === null)) throw Error(y(188));
    return n !== e ? null : e;
  }
  for (var t = e, r = n; ; ) {
    var l = t.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        t = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === t) return Zi(l), e;
        if (o === r) return Zi(l), n;
        o = o.sibling;
      }
      throw Error(y(188));
    }
    if (t.return !== r.return) (t = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === t) {
          (i = !0), (t = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (t = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === t) {
            (i = !0), (t = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (t = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(y(189));
      }
    }
    if (t.alternate !== r) throw Error(y(190));
  }
  if (t.tag !== 3) throw Error(y(188));
  return t.stateNode.current === t ? e : n;
}
function Ts(e) {
  return (e = qc(e)), e !== null ? Ms(e) : null;
}
function Ms(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = Ms(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var Is = ge.unstable_scheduleCallback,
  $i = ge.unstable_cancelCallback,
  bc = ge.unstable_shouldYield,
  ef = ge.unstable_requestPaint,
  Y = ge.unstable_now,
  nf = ge.unstable_getCurrentPriorityLevel,
  ni = ge.unstable_ImmediatePriority,
  Os = ge.unstable_UserBlockingPriority,
  jr = ge.unstable_NormalPriority,
  tf = ge.unstable_LowPriority,
  js = ge.unstable_IdlePriority,
  ll = null,
  Fe = null;
function rf(e) {
  if (Fe && typeof Fe.onCommitFiberRoot == "function")
    try {
      Fe.onCommitFiberRoot(ll, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Te = Math.clz32 ? Math.clz32 : uf,
  lf = Math.log,
  of = Math.LN2;
function uf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((lf(e) / of) | 0)) | 0;
}
var sr = 64,
  ar = 4194304;
function Ct(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Dr(e, n) {
  var t = e.pendingLanes;
  if (t === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = t & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = Ct(u)) : ((o &= i), o !== 0 && (r = Ct(o)));
  } else (i = t & ~l), i !== 0 ? (r = Ct(i)) : o !== 0 && (r = Ct(o));
  if (r === 0) return 0;
  if (
    n !== 0 &&
    n !== r &&
    !(n & l) &&
    ((l = r & -r), (o = n & -n), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return n;
  if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
    for (e = e.entanglements, n &= r; 0 < n; )
      (t = 31 - Te(n)), (l = 1 << t), (r |= e[t]), (n &= ~l);
  return r;
}
function sf(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return n + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function af(e, n) {
  for (
    var t = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Te(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & t) || u & r) && (l[i] = sf(u, n))
      : s <= n && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function mo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ds() {
  var e = sr;
  return (sr <<= 1), !(sr & 4194240) && (sr = 64), e;
}
function Pl(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function qt(e, n, t) {
  (e.pendingLanes |= n),
    n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (n = 31 - Te(n)),
    (e[n] = t);
}
function cf(e, n) {
  var t = e.pendingLanes & ~n;
  (e.pendingLanes = n),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= n),
    (e.mutableReadLanes &= n),
    (e.entangledLanes &= n),
    (n = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Te(t),
      o = 1 << l;
    (n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~o);
  }
}
function ti(e, n) {
  var t = (e.entangledLanes |= n);
  for (e = e.entanglements; t; ) {
    var r = 31 - Te(t),
      l = 1 << r;
    (l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l);
  }
}
var I = 0;
function Fs(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Bs,
  ri,
  Us,
  Hs,
  Qs,
  vo = !1,
  cr = [],
  ln = null,
  on = null,
  un = null,
  Dt = new Map(),
  Ft = new Map(),
  en = [],
  ff =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function qi(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      ln = null;
      break;
    case "dragenter":
    case "dragleave":
      on = null;
      break;
    case "mouseover":
    case "mouseout":
      un = null;
      break;
    case "pointerover":
    case "pointerout":
      Dt.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ft.delete(n.pointerId);
  }
}
function mt(e, n, t, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: n,
        domEventName: t,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      n !== null && ((n = er(n)), n !== null && ri(n)),
      e)
    : ((e.eventSystemFlags |= r),
      (n = e.targetContainers),
      l !== null && n.indexOf(l) === -1 && n.push(l),
      e);
}
function df(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return (ln = mt(ln, e, n, t, r, l)), !0;
    case "dragenter":
      return (on = mt(on, e, n, t, r, l)), !0;
    case "mouseover":
      return (un = mt(un, e, n, t, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Dt.set(o, mt(Dt.get(o) || null, e, n, t, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Ft.set(o, mt(Ft.get(o) || null, e, n, t, r, l)), !0
      );
  }
  return !1;
}
function Vs(e) {
  var n = En(e.target);
  if (n !== null) {
    var t = Mn(n);
    if (t !== null) {
      if (((n = t.tag), n === 13)) {
        if (((n = Rs(t)), n !== null)) {
          (e.blockedOn = n),
            Qs(e.priority, function () {
              Us(t);
            });
          return;
        }
      } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Cr(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = ho(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      (ao = r), t.target.dispatchEvent(r), (ao = null);
    } else return (n = er(t)), n !== null && ri(n), (e.blockedOn = t), !1;
    n.shift();
  }
  return !0;
}
function bi(e, n, t) {
  Cr(e) && t.delete(n);
}
function pf() {
  (vo = !1),
    ln !== null && Cr(ln) && (ln = null),
    on !== null && Cr(on) && (on = null),
    un !== null && Cr(un) && (un = null),
    Dt.forEach(bi),
    Ft.forEach(bi);
}
function vt(e, n) {
  e.blockedOn === n &&
    ((e.blockedOn = null),
    vo ||
      ((vo = !0),
      ge.unstable_scheduleCallback(ge.unstable_NormalPriority, pf)));
}
function Bt(e) {
  function n(l) {
    return vt(l, e);
  }
  if (0 < cr.length) {
    vt(cr[0], e);
    for (var t = 1; t < cr.length; t++) {
      var r = cr[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ln !== null && vt(ln, e),
      on !== null && vt(on, e),
      un !== null && vt(un, e),
      Dt.forEach(n),
      Ft.forEach(n),
      t = 0;
    t < en.length;
    t++
  )
    (r = en[t]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < en.length && ((t = en[0]), t.blockedOn === null); )
    Vs(t), t.blockedOn === null && en.shift();
}
var Zn = Je.ReactCurrentBatchConfig,
  Fr = !0;
function mf(e, n, t, r) {
  var l = I,
    o = Zn.transition;
  Zn.transition = null;
  try {
    (I = 1), li(e, n, t, r);
  } finally {
    (I = l), (Zn.transition = o);
  }
}
function vf(e, n, t, r) {
  var l = I,
    o = Zn.transition;
  Zn.transition = null;
  try {
    (I = 4), li(e, n, t, r);
  } finally {
    (I = l), (Zn.transition = o);
  }
}
function li(e, n, t, r) {
  if (Fr) {
    var l = ho(e, n, t, r);
    if (l === null) Dl(e, n, r, Br, t), qi(e, r);
    else if (df(l, e, n, t, r)) r.stopPropagation();
    else if ((qi(e, r), n & 4 && -1 < ff.indexOf(e))) {
      for (; l !== null; ) {
        var o = er(l);
        if (
          (o !== null && Bs(o),
          (o = ho(e, n, t, r)),
          o === null && Dl(e, n, r, Br, t),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Dl(e, n, r, null, t);
  }
}
var Br = null;
function ho(e, n, t, r) {
  if (((Br = null), (e = ei(r)), (e = En(e)), e !== null))
    if (((n = Mn(e)), n === null)) e = null;
    else if (((t = n.tag), t === 13)) {
      if (((e = Rs(n)), e !== null)) return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated)
        return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
  return (Br = e), null;
}
function Ks(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (nf()) {
        case ni:
          return 1;
        case Os:
          return 4;
        case jr:
        case tf:
          return 16;
        case js:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tn = null,
  oi = null,
  xr = null;
function Ws() {
  if (xr) return xr;
  var e,
    n = oi,
    t = n.length,
    r,
    l = "value" in tn ? tn.value : tn.textContent,
    o = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++);
  var i = t - e;
  for (r = 1; r <= i && n[t - r] === l[o - r]; r++);
  return (xr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Ar(e) {
  var n = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
      : (e = n),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function fr() {
  return !0;
}
function eu() {
  return !1;
}
function ke(e) {
  function n(t, r, l, o, i) {
    (this._reactName = t),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((t = e[u]), (this[u] = t ? t(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? fr
        : eu),
      (this.isPropagationStopped = eu),
      this
    );
  }
  return (
    V(n.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t &&
          (t.preventDefault
            ? t.preventDefault()
            : typeof t.returnValue != "unknown" && (t.returnValue = !1),
          (this.isDefaultPrevented = fr));
      },
      stopPropagation: function () {
        var t = this.nativeEvent;
        t &&
          (t.stopPropagation
            ? t.stopPropagation()
            : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
          (this.isPropagationStopped = fr));
      },
      persist: function () {},
      isPersistent: fr,
    }),
    n
  );
}
var st = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ii = ke(st),
  bt = V({}, st, { view: 0, detail: 0 }),
  hf = ke(bt),
  zl,
  _l,
  ht,
  ol = V({}, bt, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ui,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ht &&
            (ht && e.type === "mousemove"
              ? ((zl = e.screenX - ht.screenX), (_l = e.screenY - ht.screenY))
              : (_l = zl = 0),
            (ht = e)),
          zl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : _l;
    },
  }),
  nu = ke(ol),
  yf = V({}, ol, { dataTransfer: 0 }),
  gf = ke(yf),
  wf = V({}, bt, { relatedTarget: 0 }),
  Ll = ke(wf),
  kf = V({}, st, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Sf = ke(kf),
  Ef = V({}, st, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Cf = ke(Ef),
  xf = V({}, st, { data: 0 }),
  tu = ke(xf),
  Af = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Nf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Pf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function zf(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = Pf[e]) ? !!n[e] : !1;
}
function ui() {
  return zf;
}
var _f = V({}, bt, {
    key: function (e) {
      if (e.key) {
        var n = Af[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress"
        ? ((e = Ar(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Nf[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ui,
    charCode: function (e) {
      return e.type === "keypress" ? Ar(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ar(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Lf = ke(_f),
  Rf = V({}, ol, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ru = ke(Rf),
  Tf = V({}, bt, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ui,
  }),
  Mf = ke(Tf),
  If = V({}, st, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Of = ke(If),
  jf = V({}, ol, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Df = ke(jf),
  Ff = [9, 13, 27, 32],
  si = We && "CompositionEvent" in window,
  Pt = null;
We && "documentMode" in document && (Pt = document.documentMode);
var Bf = We && "TextEvent" in window && !Pt,
  Ys = We && (!si || (Pt && 8 < Pt && 11 >= Pt)),
  lu = " ",
  ou = !1;
function Gs(e, n) {
  switch (e) {
    case "keyup":
      return Ff.indexOf(n.keyCode) !== -1;
    case "keydown":
      return n.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Xs(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Dn = !1;
function Uf(e, n) {
  switch (e) {
    case "compositionend":
      return Xs(n);
    case "keypress":
      return n.which !== 32 ? null : ((ou = !0), lu);
    case "textInput":
      return (e = n.data), e === lu && ou ? null : e;
    default:
      return null;
  }
}
function Hf(e, n) {
  if (Dn)
    return e === "compositionend" || (!si && Gs(e, n))
      ? ((e = Ws()), (xr = oi = tn = null), (Dn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
        if (n.char && 1 < n.char.length) return n.char;
        if (n.which) return String.fromCharCode(n.which);
      }
      return null;
    case "compositionend":
      return Ys && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var Qf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function iu(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!Qf[e.type] : n === "textarea";
}
function Js(e, n, t, r) {
  Ns(r),
    (n = Ur(n, "onChange")),
    0 < n.length &&
      ((t = new ii("onChange", "change", null, t, r)),
      e.push({ event: t, listeners: n }));
}
var zt = null,
  Ut = null;
function Vf(e) {
  ia(e, 0);
}
function il(e) {
  var n = Un(e);
  if (ws(n)) return e;
}
function Kf(e, n) {
  if (e === "change") return n;
}
var Zs = !1;
if (We) {
  var Rl;
  if (We) {
    var Tl = "oninput" in document;
    if (!Tl) {
      var uu = document.createElement("div");
      uu.setAttribute("oninput", "return;"),
        (Tl = typeof uu.oninput == "function");
    }
    Rl = Tl;
  } else Rl = !1;
  Zs = Rl && (!document.documentMode || 9 < document.documentMode);
}
function su() {
  zt && (zt.detachEvent("onpropertychange", $s), (Ut = zt = null));
}
function $s(e) {
  if (e.propertyName === "value" && il(Ut)) {
    var n = [];
    Js(n, Ut, e, ei(e)), Ls(Vf, n);
  }
}
function Wf(e, n, t) {
  e === "focusin"
    ? (su(), (zt = n), (Ut = t), zt.attachEvent("onpropertychange", $s))
    : e === "focusout" && su();
}
function Yf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return il(Ut);
}
function Gf(e, n) {
  if (e === "click") return il(n);
}
function Xf(e, n) {
  if (e === "input" || e === "change") return il(n);
}
function Jf(e, n) {
  return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
}
var Ie = typeof Object.is == "function" ? Object.is : Jf;
function Ht(e, n) {
  if (Ie(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null)
    return !1;
  var t = Object.keys(e),
    r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!$l.call(n, l) || !Ie(e[l], n[l])) return !1;
  }
  return !0;
}
function au(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function cu(e, n) {
  var t = au(e);
  e = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (((r = e + t.textContent.length), e <= n && r >= n))
        return { node: t, offset: n - e };
      e = r;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = au(t);
  }
}
function qs(e, n) {
  return e && n
    ? e === n
      ? !0
      : e && e.nodeType === 3
      ? !1
      : n && n.nodeType === 3
      ? qs(e, n.parentNode)
      : "contains" in e
      ? e.contains(n)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(n) & 16)
      : !1
    : !1;
}
function bs() {
  for (var e = window, n = Mr(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) e = n.contentWindow;
    else break;
    n = Mr(e.document);
  }
  return n;
}
function ai(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    n &&
    ((n === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      n === "textarea" ||
      e.contentEditable === "true")
  );
}
function Zf(e) {
  var n = bs(),
    t = e.focusedElem,
    r = e.selectionRange;
  if (
    n !== t &&
    t &&
    t.ownerDocument &&
    qs(t.ownerDocument.documentElement, t)
  ) {
    if (r !== null && ai(t)) {
      if (
        ((n = r.start),
        (e = r.end),
        e === void 0 && (e = n),
        "selectionStart" in t)
      )
        (t.selectionStart = n), (t.selectionEnd = Math.min(e, t.value.length));
      else if (
        ((e = ((n = t.ownerDocument || document) && n.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = t.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = cu(t, o));
        var i = cu(t, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((n = n.createRange()),
          n.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(n), e.extend(i.node, i.offset))
            : (n.setEnd(i.node, i.offset), e.addRange(n)));
      }
    }
    for (n = [], e = t; (e = e.parentNode); )
      e.nodeType === 1 &&
        n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
      (e = n[t]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var $f = We && "documentMode" in document && 11 >= document.documentMode,
  Fn = null,
  yo = null,
  _t = null,
  go = !1;
function fu(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  go ||
    Fn == null ||
    Fn !== Mr(r) ||
    ((r = Fn),
    "selectionStart" in r && ai(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (_t && Ht(_t, r)) ||
      ((_t = r),
      (r = Ur(yo, "onSelect")),
      0 < r.length &&
        ((n = new ii("onSelect", "select", null, n, t)),
        e.push({ event: n, listeners: r }),
        (n.target = Fn))));
}
function dr(e, n) {
  var t = {};
  return (
    (t[e.toLowerCase()] = n.toLowerCase()),
    (t["Webkit" + e] = "webkit" + n),
    (t["Moz" + e] = "moz" + n),
    t
  );
}
var Bn = {
    animationend: dr("Animation", "AnimationEnd"),
    animationiteration: dr("Animation", "AnimationIteration"),
    animationstart: dr("Animation", "AnimationStart"),
    transitionend: dr("Transition", "TransitionEnd"),
  },
  Ml = {},
  ea = {};
We &&
  ((ea = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Bn.animationend.animation,
    delete Bn.animationiteration.animation,
    delete Bn.animationstart.animation),
  "TransitionEvent" in window || delete Bn.transitionend.transition);
function ul(e) {
  if (Ml[e]) return Ml[e];
  if (!Bn[e]) return e;
  var n = Bn[e],
    t;
  for (t in n) if (n.hasOwnProperty(t) && t in ea) return (Ml[e] = n[t]);
  return e;
}
var na = ul("animationend"),
  ta = ul("animationiteration"),
  ra = ul("animationstart"),
  la = ul("transitionend"),
  oa = new Map(),
  du =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function vn(e, n) {
  oa.set(e, n), Tn(n, [e]);
}
for (var Il = 0; Il < du.length; Il++) {
  var Ol = du[Il],
    qf = Ol.toLowerCase(),
    bf = Ol[0].toUpperCase() + Ol.slice(1);
  vn(qf, "on" + bf);
}
vn(na, "onAnimationEnd");
vn(ta, "onAnimationIteration");
vn(ra, "onAnimationStart");
vn("dblclick", "onDoubleClick");
vn("focusin", "onFocus");
vn("focusout", "onBlur");
vn(la, "onTransitionEnd");
et("onMouseEnter", ["mouseout", "mouseover"]);
et("onMouseLeave", ["mouseout", "mouseover"]);
et("onPointerEnter", ["pointerout", "pointerover"]);
et("onPointerLeave", ["pointerout", "pointerover"]);
Tn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Tn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Tn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Tn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Tn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Tn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var xt =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  ed = new Set("cancel close invalid load scroll toggle".split(" ").concat(xt));
function pu(e, n, t) {
  var r = e.type || "unknown-event";
  (e.currentTarget = t), $c(r, n, void 0, e), (e.currentTarget = null);
}
function ia(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (n)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            f = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          pu(l, u, f), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (f = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          pu(l, u, f), (o = s);
        }
    }
  }
  if (Or) throw ((e = po), (Or = !1), (po = null), e);
}
function D(e, n) {
  var t = n[Co];
  t === void 0 && (t = n[Co] = new Set());
  var r = e + "__bubble";
  t.has(r) || (ua(n, e, 2, !1), t.add(r));
}
function jl(e, n, t) {
  var r = 0;
  n && (r |= 4), ua(t, e, r, n);
}
var pr = "_reactListening" + Math.random().toString(36).slice(2);
function Qt(e) {
  if (!e[pr]) {
    (e[pr] = !0),
      ms.forEach(function (t) {
        t !== "selectionchange" && (ed.has(t) || jl(t, !1, e), jl(t, !0, e));
      });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[pr] || ((n[pr] = !0), jl("selectionchange", !1, n));
  }
}
function ua(e, n, t, r) {
  switch (Ks(n)) {
    case 1:
      var l = mf;
      break;
    case 4:
      l = vf;
      break;
    default:
      l = li;
  }
  (t = l.bind(null, n, t, e)),
    (l = void 0),
    !fo ||
      (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(n, t, { capture: !0, passive: l })
        : e.addEventListener(n, t, !0)
      : l !== void 0
      ? e.addEventListener(n, t, { passive: l })
      : e.addEventListener(n, t, !1);
}
function Dl(e, n, t, r, l) {
  var o = r;
  if (!(n & 1) && !(n & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = En(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Ls(function () {
    var f = o,
      v = ei(t),
      m = [];
    e: {
      var p = oa.get(e);
      if (p !== void 0) {
        var S = ii,
          w = e;
        switch (e) {
          case "keypress":
            if (Ar(t) === 0) break e;
          case "keydown":
          case "keyup":
            S = Lf;
            break;
          case "focusin":
            (w = "focus"), (S = Ll);
            break;
          case "focusout":
            (w = "blur"), (S = Ll);
            break;
          case "beforeblur":
          case "afterblur":
            S = Ll;
            break;
          case "click":
            if (t.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            S = nu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = gf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = Mf;
            break;
          case na:
          case ta:
          case ra:
            S = Sf;
            break;
          case la:
            S = Of;
            break;
          case "scroll":
            S = hf;
            break;
          case "wheel":
            S = Df;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = Cf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = ru;
        }
        var C = (n & 4) !== 0,
          O = !C && e === "scroll",
          c = C ? (p !== null ? p + "Capture" : null) : p;
        C = [];
        for (var a = f, d; a !== null; ) {
          d = a;
          var h = d.stateNode;
          if (
            (d.tag === 5 &&
              h !== null &&
              ((d = h),
              c !== null && ((h = jt(a, c)), h != null && C.push(Vt(a, h, d)))),
            O)
          )
            break;
          a = a.return;
        }
        0 < C.length &&
          ((p = new S(p, w, null, t, v)), m.push({ event: p, listeners: C }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (S = e === "mouseout" || e === "pointerout"),
          p &&
            t !== ao &&
            (w = t.relatedTarget || t.fromElement) &&
            (En(w) || w[Ye]))
        )
          break e;
        if (
          (S || p) &&
          ((p =
            v.window === v
              ? v
              : (p = v.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          S
            ? ((w = t.relatedTarget || t.toElement),
              (S = f),
              (w = w ? En(w) : null),
              w !== null &&
                ((O = Mn(w)), w !== O || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((S = null), (w = f)),
          S !== w)
        ) {
          if (
            ((C = nu),
            (h = "onMouseLeave"),
            (c = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((C = ru),
              (h = "onPointerLeave"),
              (c = "onPointerEnter"),
              (a = "pointer")),
            (O = S == null ? p : Un(S)),
            (d = w == null ? p : Un(w)),
            (p = new C(h, a + "leave", S, t, v)),
            (p.target = O),
            (p.relatedTarget = d),
            (h = null),
            En(v) === f &&
              ((C = new C(c, a + "enter", w, t, v)),
              (C.target = d),
              (C.relatedTarget = O),
              (h = C)),
            (O = h),
            S && w)
          )
            n: {
              for (C = S, c = w, a = 0, d = C; d; d = In(d)) a++;
              for (d = 0, h = c; h; h = In(h)) d++;
              for (; 0 < a - d; ) (C = In(C)), a--;
              for (; 0 < d - a; ) (c = In(c)), d--;
              for (; a--; ) {
                if (C === c || (c !== null && C === c.alternate)) break n;
                (C = In(C)), (c = In(c));
              }
              C = null;
            }
          else C = null;
          S !== null && mu(m, p, S, C, !1),
            w !== null && O !== null && mu(m, O, w, C, !0);
        }
      }
      e: {
        if (
          ((p = f ? Un(f) : window),
          (S = p.nodeName && p.nodeName.toLowerCase()),
          S === "select" || (S === "input" && p.type === "file"))
        )
          var A = Kf;
        else if (iu(p))
          if (Zs) A = Xf;
          else {
            A = Yf;
            var g = Wf;
          }
        else
          (S = p.nodeName) &&
            S.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (A = Gf);
        if (A && (A = A(e, f))) {
          Js(m, A, t, v);
          break e;
        }
        g && g(e, p, f),
          e === "focusout" &&
            (g = p._wrapperState) &&
            g.controlled &&
            p.type === "number" &&
            lo(p, "number", p.value);
      }
      switch (((g = f ? Un(f) : window), e)) {
        case "focusin":
          (iu(g) || g.contentEditable === "true") &&
            ((Fn = g), (yo = f), (_t = null));
          break;
        case "focusout":
          _t = yo = Fn = null;
          break;
        case "mousedown":
          go = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (go = !1), fu(m, t, v);
          break;
        case "selectionchange":
          if ($f) break;
        case "keydown":
        case "keyup":
          fu(m, t, v);
      }
      var k;
      if (si)
        e: {
          switch (e) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
      else
        Dn
          ? Gs(e, t) && (E = "onCompositionEnd")
          : e === "keydown" && t.keyCode === 229 && (E = "onCompositionStart");
      E &&
        (Ys &&
          t.locale !== "ko" &&
          (Dn || E !== "onCompositionStart"
            ? E === "onCompositionEnd" && Dn && (k = Ws())
            : ((tn = v),
              (oi = "value" in tn ? tn.value : tn.textContent),
              (Dn = !0))),
        (g = Ur(f, E)),
        0 < g.length &&
          ((E = new tu(E, e, null, t, v)),
          m.push({ event: E, listeners: g }),
          k ? (E.data = k) : ((k = Xs(t)), k !== null && (E.data = k)))),
        (k = Bf ? Uf(e, t) : Hf(e, t)) &&
          ((f = Ur(f, "onBeforeInput")),
          0 < f.length &&
            ((v = new tu("onBeforeInput", "beforeinput", null, t, v)),
            m.push({ event: v, listeners: f }),
            (v.data = k)));
    }
    ia(m, n);
  });
}
function Vt(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function Ur(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = jt(e, t)),
      o != null && r.unshift(Vt(e, o, l)),
      (o = jt(e, n)),
      o != null && r.push(Vt(e, o, l))),
      (e = e.return);
  }
  return r;
}
function In(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function mu(e, n, t, r, l) {
  for (var o = n._reactName, i = []; t !== null && t !== r; ) {
    var u = t,
      s = u.alternate,
      f = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      f !== null &&
      ((u = f),
      l
        ? ((s = jt(t, o)), s != null && i.unshift(Vt(t, s, u)))
        : l || ((s = jt(t, o)), s != null && i.push(Vt(t, s, u)))),
      (t = t.return);
  }
  i.length !== 0 && e.push({ event: n, listeners: i });
}
var nd = /\r\n?/g,
  td = /\u0000|\uFFFD/g;
function vu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      nd,
      `
`
    )
    .replace(td, "");
}
function mr(e, n, t) {
  if (((n = vu(n)), vu(e) !== n && t)) throw Error(y(425));
}
function Hr() {}
var wo = null,
  ko = null;
function So(e, n) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof n.children == "string" ||
    typeof n.children == "number" ||
    (typeof n.dangerouslySetInnerHTML == "object" &&
      n.dangerouslySetInnerHTML !== null &&
      n.dangerouslySetInnerHTML.__html != null)
  );
}
var Eo = typeof setTimeout == "function" ? setTimeout : void 0,
  rd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  hu = typeof Promise == "function" ? Promise : void 0,
  ld =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof hu < "u"
      ? function (e) {
          return hu.resolve(null).then(e).catch(od);
        }
      : Eo;
function od(e) {
  setTimeout(function () {
    throw e;
  });
}
function Fl(e, n) {
  var t = n,
    r = 0;
  do {
    var l = t.nextSibling;
    if ((e.removeChild(t), l && l.nodeType === 8))
      if (((t = l.data), t === "/$")) {
        if (r === 0) {
          e.removeChild(l), Bt(n);
          return;
        }
        r--;
      } else (t !== "$" && t !== "$?" && t !== "$!") || r++;
    t = l;
  } while (t);
  Bt(n);
}
function sn(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3) break;
    if (n === 8) {
      if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
      if (n === "/$") return null;
    }
  }
  return e;
}
function yu(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (e.nodeType === 8) {
      var t = e.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (n === 0) return e;
        n--;
      } else t === "/$" && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var at = Math.random().toString(36).slice(2),
  De = "__reactFiber$" + at,
  Kt = "__reactProps$" + at,
  Ye = "__reactContainer$" + at,
  Co = "__reactEvents$" + at,
  id = "__reactListeners$" + at,
  ud = "__reactHandles$" + at;
function En(e) {
  var n = e[De];
  if (n) return n;
  for (var t = e.parentNode; t; ) {
    if ((n = t[Ye] || t[De])) {
      if (
        ((t = n.alternate),
        n.child !== null || (t !== null && t.child !== null))
      )
        for (e = yu(e); e !== null; ) {
          if ((t = e[De])) return t;
          e = yu(e);
        }
      return n;
    }
    (e = t), (t = e.parentNode);
  }
  return null;
}
function er(e) {
  return (
    (e = e[De] || e[Ye]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Un(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function sl(e) {
  return e[Kt] || null;
}
var xo = [],
  Hn = -1;
function hn(e) {
  return { current: e };
}
function B(e) {
  0 > Hn || ((e.current = xo[Hn]), (xo[Hn] = null), Hn--);
}
function j(e, n) {
  Hn++, (xo[Hn] = e.current), (e.current = n);
}
var mn = {},
  oe = hn(mn),
  de = hn(!1),
  Pn = mn;
function nt(e, n) {
  var t = e.type.contextTypes;
  if (!t) return mn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in t) l[o] = n[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = n),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function pe(e) {
  return (e = e.childContextTypes), e != null;
}
function Qr() {
  B(de), B(oe);
}
function gu(e, n, t) {
  if (oe.current !== mn) throw Error(y(168));
  j(oe, n), j(de, t);
}
function sa(e, n, t) {
  var r = e.stateNode;
  if (((n = n.childContextTypes), typeof r.getChildContext != "function"))
    return t;
  r = r.getChildContext();
  for (var l in r) if (!(l in n)) throw Error(y(108, Kc(e) || "Unknown", l));
  return V({}, t, r);
}
function Vr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mn),
    (Pn = oe.current),
    j(oe, e),
    j(de, de.current),
    !0
  );
}
function wu(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  t
    ? ((e = sa(e, n, Pn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      B(de),
      B(oe),
      j(oe, e))
    : B(de),
    j(de, t);
}
var He = null,
  al = !1,
  Bl = !1;
function aa(e) {
  He === null ? (He = [e]) : He.push(e);
}
function sd(e) {
  (al = !0), aa(e);
}
function yn() {
  if (!Bl && He !== null) {
    Bl = !0;
    var e = 0,
      n = I;
    try {
      var t = He;
      for (I = 1; e < t.length; e++) {
        var r = t[e];
        do r = r(!0);
        while (r !== null);
      }
      (He = null), (al = !1);
    } catch (l) {
      throw (He !== null && (He = He.slice(e + 1)), Is(ni, yn), l);
    } finally {
      (I = n), (Bl = !1);
    }
  }
  return null;
}
var Qn = [],
  Vn = 0,
  Kr = null,
  Wr = 0,
  Se = [],
  Ee = 0,
  zn = null,
  Qe = 1,
  Ve = "";
function kn(e, n) {
  (Qn[Vn++] = Wr), (Qn[Vn++] = Kr), (Kr = e), (Wr = n);
}
function ca(e, n, t) {
  (Se[Ee++] = Qe), (Se[Ee++] = Ve), (Se[Ee++] = zn), (zn = e);
  var r = Qe;
  e = Ve;
  var l = 32 - Te(r) - 1;
  (r &= ~(1 << l)), (t += 1);
  var o = 32 - Te(n) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Qe = (1 << (32 - Te(n) + l)) | (t << l) | r),
      (Ve = o + e);
  } else (Qe = (1 << o) | (t << l) | r), (Ve = e);
}
function ci(e) {
  e.return !== null && (kn(e, 1), ca(e, 1, 0));
}
function fi(e) {
  for (; e === Kr; )
    (Kr = Qn[--Vn]), (Qn[Vn] = null), (Wr = Qn[--Vn]), (Qn[Vn] = null);
  for (; e === zn; )
    (zn = Se[--Ee]),
      (Se[Ee] = null),
      (Ve = Se[--Ee]),
      (Se[Ee] = null),
      (Qe = Se[--Ee]),
      (Se[Ee] = null);
}
var ye = null,
  he = null,
  U = !1,
  Re = null;
function fa(e, n) {
  var t = Ce(5, null, null, 0);
  (t.elementType = "DELETED"),
    (t.stateNode = n),
    (t.return = e),
    (n = e.deletions),
    n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
}
function ku(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return (
        (n =
          n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase()
            ? null
            : n),
        n !== null
          ? ((e.stateNode = n), (ye = e), (he = sn(n.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
        n !== null ? ((e.stateNode = n), (ye = e), (he = null), !0) : !1
      );
    case 13:
      return (
        (n = n.nodeType !== 8 ? null : n),
        n !== null
          ? ((t = zn !== null ? { id: Qe, overflow: Ve } : null),
            (e.memoizedState = {
              dehydrated: n,
              treeContext: t,
              retryLane: 1073741824,
            }),
            (t = Ce(18, null, null, 0)),
            (t.stateNode = n),
            (t.return = e),
            (e.child = t),
            (ye = e),
            (he = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ao(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function No(e) {
  if (U) {
    var n = he;
    if (n) {
      var t = n;
      if (!ku(e, n)) {
        if (Ao(e)) throw Error(y(418));
        n = sn(t.nextSibling);
        var r = ye;
        n && ku(e, n)
          ? fa(r, t)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (ye = e));
      }
    } else {
      if (Ao(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (ye = e);
    }
  }
}
function Su(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ye = e;
}
function vr(e) {
  if (e !== ye) return !1;
  if (!U) return Su(e), (U = !0), !1;
  var n;
  if (
    ((n = e.tag !== 3) &&
      !(n = e.tag !== 5) &&
      ((n = e.type),
      (n = n !== "head" && n !== "body" && !So(e.type, e.memoizedProps))),
    n && (n = he))
  ) {
    if (Ao(e)) throw (da(), Error(y(418)));
    for (; n; ) fa(e, n), (n = sn(n.nextSibling));
  }
  if ((Su(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              he = sn(e.nextSibling);
              break e;
            }
            n--;
          } else (t !== "$" && t !== "$!" && t !== "$?") || n++;
        }
        e = e.nextSibling;
      }
      he = null;
    }
  } else he = ye ? sn(e.stateNode.nextSibling) : null;
  return !0;
}
function da() {
  for (var e = he; e; ) e = sn(e.nextSibling);
}
function tt() {
  (he = ye = null), (U = !1);
}
function di(e) {
  Re === null ? (Re = [e]) : Re.push(e);
}
var ad = Je.ReactCurrentBatchConfig;
function yt(e, n, t) {
  if (
    ((e = t.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (t._owner) {
      if (((t = t._owner), t)) {
        if (t.tag !== 1) throw Error(y(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        o = "" + e;
      return n !== null &&
        n.ref !== null &&
        typeof n.ref == "function" &&
        n.ref._stringRef === o
        ? n.ref
        : ((n = function (i) {
            var u = l.refs;
            i === null ? delete u[o] : (u[o] = i);
          }),
          (n._stringRef = o),
          n);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!t._owner) throw Error(y(290, e));
  }
  return e;
}
function hr(e, n) {
  throw (
    ((e = Object.prototype.toString.call(n)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(n).join(", ") + "}"
          : e
      )
    ))
  );
}
function Eu(e) {
  var n = e._init;
  return n(e._payload);
}
function pa(e) {
  function n(c, a) {
    if (e) {
      var d = c.deletions;
      d === null ? ((c.deletions = [a]), (c.flags |= 16)) : d.push(a);
    }
  }
  function t(c, a) {
    if (!e) return null;
    for (; a !== null; ) n(c, a), (a = a.sibling);
    return null;
  }
  function r(c, a) {
    for (c = new Map(); a !== null; )
      a.key !== null ? c.set(a.key, a) : c.set(a.index, a), (a = a.sibling);
    return c;
  }
  function l(c, a) {
    return (c = dn(c, a)), (c.index = 0), (c.sibling = null), c;
  }
  function o(c, a, d) {
    return (
      (c.index = d),
      e
        ? ((d = c.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((c.flags |= 2), a) : d)
            : ((c.flags |= 2), a))
        : ((c.flags |= 1048576), a)
    );
  }
  function i(c) {
    return e && c.alternate === null && (c.flags |= 2), c;
  }
  function u(c, a, d, h) {
    return a === null || a.tag !== 6
      ? ((a = Yl(d, c.mode, h)), (a.return = c), a)
      : ((a = l(a, d)), (a.return = c), a);
  }
  function s(c, a, d, h) {
    var A = d.type;
    return A === jn
      ? v(c, a, d.props.children, h, d.key)
      : a !== null &&
        (a.elementType === A ||
          (typeof A == "object" &&
            A !== null &&
            A.$$typeof === qe &&
            Eu(A) === a.type))
      ? ((h = l(a, d.props)), (h.ref = yt(c, a, d)), (h.return = c), h)
      : ((h = Tr(d.type, d.key, d.props, null, c.mode, h)),
        (h.ref = yt(c, a, d)),
        (h.return = c),
        h);
  }
  function f(c, a, d, h) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = Gl(d, c.mode, h)), (a.return = c), a)
      : ((a = l(a, d.children || [])), (a.return = c), a);
  }
  function v(c, a, d, h, A) {
    return a === null || a.tag !== 7
      ? ((a = Nn(d, c.mode, h, A)), (a.return = c), a)
      : ((a = l(a, d)), (a.return = c), a);
  }
  function m(c, a, d) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = Yl("" + a, c.mode, d)), (a.return = c), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case or:
          return (
            (d = Tr(a.type, a.key, a.props, null, c.mode, d)),
            (d.ref = yt(c, null, a)),
            (d.return = c),
            d
          );
        case On:
          return (a = Gl(a, c.mode, d)), (a.return = c), a;
        case qe:
          var h = a._init;
          return m(c, h(a._payload), d);
      }
      if (Et(a) || dt(a))
        return (a = Nn(a, c.mode, d, null)), (a.return = c), a;
      hr(c, a);
    }
    return null;
  }
  function p(c, a, d, h) {
    var A = a !== null ? a.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return A !== null ? null : u(c, a, "" + d, h);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case or:
          return d.key === A ? s(c, a, d, h) : null;
        case On:
          return d.key === A ? f(c, a, d, h) : null;
        case qe:
          return (A = d._init), p(c, a, A(d._payload), h);
      }
      if (Et(d) || dt(d)) return A !== null ? null : v(c, a, d, h, null);
      hr(c, d);
    }
    return null;
  }
  function S(c, a, d, h, A) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (c = c.get(d) || null), u(a, c, "" + h, A);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case or:
          return (c = c.get(h.key === null ? d : h.key) || null), s(a, c, h, A);
        case On:
          return (c = c.get(h.key === null ? d : h.key) || null), f(a, c, h, A);
        case qe:
          var g = h._init;
          return S(c, a, d, g(h._payload), A);
      }
      if (Et(h) || dt(h)) return (c = c.get(d) || null), v(a, c, h, A, null);
      hr(a, h);
    }
    return null;
  }
  function w(c, a, d, h) {
    for (
      var A = null, g = null, k = a, E = (a = 0), T = null;
      k !== null && E < d.length;
      E++
    ) {
      k.index > E ? ((T = k), (k = null)) : (T = k.sibling);
      var z = p(c, k, d[E], h);
      if (z === null) {
        k === null && (k = T);
        break;
      }
      e && k && z.alternate === null && n(c, k),
        (a = o(z, a, E)),
        g === null ? (A = z) : (g.sibling = z),
        (g = z),
        (k = T);
    }
    if (E === d.length) return t(c, k), U && kn(c, E), A;
    if (k === null) {
      for (; E < d.length; E++)
        (k = m(c, d[E], h)),
          k !== null &&
            ((a = o(k, a, E)), g === null ? (A = k) : (g.sibling = k), (g = k));
      return U && kn(c, E), A;
    }
    for (k = r(c, k); E < d.length; E++)
      (T = S(k, c, E, d[E], h)),
        T !== null &&
          (e && T.alternate !== null && k.delete(T.key === null ? E : T.key),
          (a = o(T, a, E)),
          g === null ? (A = T) : (g.sibling = T),
          (g = T));
    return (
      e &&
        k.forEach(function (Pe) {
          return n(c, Pe);
        }),
      U && kn(c, E),
      A
    );
  }
  function C(c, a, d, h) {
    var A = dt(d);
    if (typeof A != "function") throw Error(y(150));
    if (((d = A.call(d)), d == null)) throw Error(y(151));
    for (
      var g = (A = null), k = a, E = (a = 0), T = null, z = d.next();
      k !== null && !z.done;
      E++, z = d.next()
    ) {
      k.index > E ? ((T = k), (k = null)) : (T = k.sibling);
      var Pe = p(c, k, z.value, h);
      if (Pe === null) {
        k === null && (k = T);
        break;
      }
      e && k && Pe.alternate === null && n(c, k),
        (a = o(Pe, a, E)),
        g === null ? (A = Pe) : (g.sibling = Pe),
        (g = Pe),
        (k = T);
    }
    if (z.done) return t(c, k), U && kn(c, E), A;
    if (k === null) {
      for (; !z.done; E++, z = d.next())
        (z = m(c, z.value, h)),
          z !== null &&
            ((a = o(z, a, E)), g === null ? (A = z) : (g.sibling = z), (g = z));
      return U && kn(c, E), A;
    }
    for (k = r(c, k); !z.done; E++, z = d.next())
      (z = S(k, c, E, z.value, h)),
        z !== null &&
          (e && z.alternate !== null && k.delete(z.key === null ? E : z.key),
          (a = o(z, a, E)),
          g === null ? (A = z) : (g.sibling = z),
          (g = z));
    return (
      e &&
        k.forEach(function (ct) {
          return n(c, ct);
        }),
      U && kn(c, E),
      A
    );
  }
  function O(c, a, d, h) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === jn &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case or:
          e: {
            for (var A = d.key, g = a; g !== null; ) {
              if (g.key === A) {
                if (((A = d.type), A === jn)) {
                  if (g.tag === 7) {
                    t(c, g.sibling),
                      (a = l(g, d.props.children)),
                      (a.return = c),
                      (c = a);
                    break e;
                  }
                } else if (
                  g.elementType === A ||
                  (typeof A == "object" &&
                    A !== null &&
                    A.$$typeof === qe &&
                    Eu(A) === g.type)
                ) {
                  t(c, g.sibling),
                    (a = l(g, d.props)),
                    (a.ref = yt(c, g, d)),
                    (a.return = c),
                    (c = a);
                  break e;
                }
                t(c, g);
                break;
              } else n(c, g);
              g = g.sibling;
            }
            d.type === jn
              ? ((a = Nn(d.props.children, c.mode, h, d.key)),
                (a.return = c),
                (c = a))
              : ((h = Tr(d.type, d.key, d.props, null, c.mode, h)),
                (h.ref = yt(c, a, d)),
                (h.return = c),
                (c = h));
          }
          return i(c);
        case On:
          e: {
            for (g = d.key; a !== null; ) {
              if (a.key === g)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  t(c, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = c),
                    (c = a);
                  break e;
                } else {
                  t(c, a);
                  break;
                }
              else n(c, a);
              a = a.sibling;
            }
            (a = Gl(d, c.mode, h)), (a.return = c), (c = a);
          }
          return i(c);
        case qe:
          return (g = d._init), O(c, a, g(d._payload), h);
      }
      if (Et(d)) return w(c, a, d, h);
      if (dt(d)) return C(c, a, d, h);
      hr(c, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        a !== null && a.tag === 6
          ? (t(c, a.sibling), (a = l(a, d)), (a.return = c), (c = a))
          : (t(c, a), (a = Yl(d, c.mode, h)), (a.return = c), (c = a)),
        i(c))
      : t(c, a);
  }
  return O;
}
var rt = pa(!0),
  ma = pa(!1),
  Yr = hn(null),
  Gr = null,
  Kn = null,
  pi = null;
function mi() {
  pi = Kn = Gr = null;
}
function vi(e) {
  var n = Yr.current;
  B(Yr), (e._currentValue = n);
}
function Po(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & n) !== n
        ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
        : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
      e === t)
    )
      break;
    e = e.return;
  }
}
function $n(e, n) {
  (Gr = e),
    (pi = Kn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & n && (fe = !0), (e.firstContext = null));
}
function Ae(e) {
  var n = e._currentValue;
  if (pi !== e)
    if (((e = { context: e, memoizedValue: n, next: null }), Kn === null)) {
      if (Gr === null) throw Error(y(308));
      (Kn = e), (Gr.dependencies = { lanes: 0, firstContext: e });
    } else Kn = Kn.next = e;
  return n;
}
var Cn = null;
function hi(e) {
  Cn === null ? (Cn = [e]) : Cn.push(e);
}
function va(e, n, t, r) {
  var l = n.interleaved;
  return (
    l === null ? ((t.next = t), hi(n)) : ((t.next = l.next), (l.next = t)),
    (n.interleaved = t),
    Ge(e, r)
  );
}
function Ge(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
    (e.childLanes |= n),
      (t = e.alternate),
      t !== null && (t.childLanes |= n),
      (t = e),
      (e = e.return);
  return t.tag === 3 ? t.stateNode : null;
}
var be = !1;
function yi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ha(e, n) {
  (e = e.updateQueue),
    n.updateQueue === e &&
      (n.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ke(e, n) {
  return {
    eventTime: e,
    lane: n,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function an(e, n, t) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var l = r.pending;
    return (
      l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
      (r.pending = n),
      Ge(e, t)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((n.next = n), hi(r)) : ((n.next = l.next), (l.next = n)),
    (r.interleaved = n),
    Ge(e, t)
  );
}
function Nr(e, n, t) {
  if (
    ((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194240) !== 0))
  ) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), ti(e, t);
  }
}
function Cu(e, n) {
  var t = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), t === r)) {
    var l = null,
      o = null;
    if (((t = t.firstBaseUpdate), t !== null)) {
      do {
        var i = {
          eventTime: t.eventTime,
          lane: t.lane,
          tag: t.tag,
          payload: t.payload,
          callback: t.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (t = t.next);
      } while (t !== null);
      o === null ? (l = o = n) : (o = o.next = n);
    } else l = o = n;
    (t = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = t);
    return;
  }
  (e = t.lastBaseUpdate),
    e === null ? (t.firstBaseUpdate = n) : (e.next = n),
    (t.lastBaseUpdate = n);
}
function Xr(e, n, t, r) {
  var l = e.updateQueue;
  be = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      f = s.next;
    (s.next = null), i === null ? (o = f) : (i.next = f), (i = s);
    var v = e.alternate;
    v !== null &&
      ((v = v.updateQueue),
      (u = v.lastBaseUpdate),
      u !== i &&
        (u === null ? (v.firstBaseUpdate = f) : (u.next = f),
        (v.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var m = l.baseState;
    (i = 0), (v = f = s = null), (u = o);
    do {
      var p = u.lane,
        S = u.eventTime;
      if ((r & p) === p) {
        v !== null &&
          (v = v.next =
            {
              eventTime: S,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var w = e,
            C = u;
          switch (((p = n), (S = t), C.tag)) {
            case 1:
              if (((w = C.payload), typeof w == "function")) {
                m = w.call(S, m, p);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = C.payload),
                (p = typeof w == "function" ? w.call(S, m, p) : w),
                p == null)
              )
                break e;
              m = V({}, m, p);
              break e;
            case 2:
              be = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u));
      } else
        (S = {
          eventTime: S,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          v === null ? ((f = v = S), (s = m)) : (v = v.next = S),
          (i |= p);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (v === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = f),
      (l.lastBaseUpdate = v),
      (n = l.shared.interleaved),
      n !== null)
    ) {
      l = n;
      do (i |= l.lane), (l = l.next);
      while (l !== n);
    } else o === null && (l.shared.lanes = 0);
    (Ln |= i), (e.lanes = i), (e.memoizedState = m);
  }
}
function xu(e, n, t) {
  if (((e = n.effects), (n.effects = null), e !== null))
    for (n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = t), typeof l != "function"))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var nr = {},
  Be = hn(nr),
  Wt = hn(nr),
  Yt = hn(nr);
function xn(e) {
  if (e === nr) throw Error(y(174));
  return e;
}
function gi(e, n) {
  switch ((j(Yt, n), j(Wt, e), j(Be, nr), (e = n.nodeType), e)) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : io(null, "");
      break;
    default:
      (e = e === 8 ? n.parentNode : n),
        (n = e.namespaceURI || null),
        (e = e.tagName),
        (n = io(n, e));
  }
  B(Be), j(Be, n);
}
function lt() {
  B(Be), B(Wt), B(Yt);
}
function ya(e) {
  xn(Yt.current);
  var n = xn(Be.current),
    t = io(n, e.type);
  n !== t && (j(Wt, e), j(Be, t));
}
function wi(e) {
  Wt.current === e && (B(Be), B(Wt));
}
var H = hn(0);
function Jr(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var t = n.memoizedState;
      if (
        t !== null &&
        ((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")
      )
        return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128) return n;
    } else if (n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return null;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
  return null;
}
var Ul = [];
function ki() {
  for (var e = 0; e < Ul.length; e++)
    Ul[e]._workInProgressVersionPrimary = null;
  Ul.length = 0;
}
var Pr = Je.ReactCurrentDispatcher,
  Hl = Je.ReactCurrentBatchConfig,
  _n = 0,
  Q = null,
  X = null,
  $ = null,
  Zr = !1,
  Lt = !1,
  Gt = 0,
  cd = 0;
function te() {
  throw Error(y(321));
}
function Si(e, n) {
  if (n === null) return !1;
  for (var t = 0; t < n.length && t < e.length; t++)
    if (!Ie(e[t], n[t])) return !1;
  return !0;
}
function Ei(e, n, t, r, l, o) {
  if (
    ((_n = o),
    (Q = n),
    (n.memoizedState = null),
    (n.updateQueue = null),
    (n.lanes = 0),
    (Pr.current = e === null || e.memoizedState === null ? md : vd),
    (e = t(r, l)),
    Lt)
  ) {
    o = 0;
    do {
      if (((Lt = !1), (Gt = 0), 25 <= o)) throw Error(y(301));
      (o += 1),
        ($ = X = null),
        (n.updateQueue = null),
        (Pr.current = hd),
        (e = t(r, l));
    } while (Lt);
  }
  if (
    ((Pr.current = $r),
    (n = X !== null && X.next !== null),
    (_n = 0),
    ($ = X = Q = null),
    (Zr = !1),
    n)
  )
    throw Error(y(300));
  return e;
}
function Ci() {
  var e = Gt !== 0;
  return (Gt = 0), e;
}
function je() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return $ === null ? (Q.memoizedState = $ = e) : ($ = $.next = e), $;
}
function Ne() {
  if (X === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var n = $ === null ? Q.memoizedState : $.next;
  if (n !== null) ($ = n), (X = e);
  else {
    if (e === null) throw Error(y(310));
    (X = e),
      (e = {
        memoizedState: X.memoizedState,
        baseState: X.baseState,
        baseQueue: X.baseQueue,
        queue: X.queue,
        next: null,
      }),
      $ === null ? (Q.memoizedState = $ = e) : ($ = $.next = e);
  }
  return $;
}
function Xt(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function Ql(e) {
  var n = Ne(),
    t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = X,
    l = r.baseQueue,
    o = t.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (t.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      f = o;
    do {
      var v = f.lane;
      if ((_n & v) === v)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: f.action,
              hasEagerState: f.hasEagerState,
              eagerState: f.eagerState,
              next: null,
            }),
          (r = f.hasEagerState ? f.eagerState : e(r, f.action));
      else {
        var m = {
          lane: v,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null,
        };
        s === null ? ((u = s = m), (i = r)) : (s = s.next = m),
          (Q.lanes |= v),
          (Ln |= v);
      }
      f = f.next;
    } while (f !== null && f !== o);
    s === null ? (i = r) : (s.next = u),
      Ie(r, n.memoizedState) || (fe = !0),
      (n.memoizedState = r),
      (n.baseState = i),
      (n.baseQueue = s),
      (t.lastRenderedState = r);
  }
  if (((e = t.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (Q.lanes |= o), (Ln |= o), (l = l.next);
    while (l !== e);
  } else l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function Vl(e) {
  var n = Ne(),
    t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch,
    l = t.pending,
    o = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Ie(o, n.memoizedState) || (fe = !0),
      (n.memoizedState = o),
      n.baseQueue === null && (n.baseState = o),
      (t.lastRenderedState = o);
  }
  return [o, r];
}
function ga() {}
function wa(e, n) {
  var t = Q,
    r = Ne(),
    l = n(),
    o = !Ie(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (fe = !0)),
    (r = r.queue),
    xi(Ea.bind(null, t, r, e), [e]),
    r.getSnapshot !== n || o || ($ !== null && $.memoizedState.tag & 1))
  ) {
    if (
      ((t.flags |= 2048),
      Jt(9, Sa.bind(null, t, r, l, n), void 0, null),
      q === null)
    )
      throw Error(y(349));
    _n & 30 || ka(t, n, l);
  }
  return l;
}
function ka(e, n, t) {
  (e.flags |= 16384),
    (e = { getSnapshot: n, value: t }),
    (n = Q.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (Q.updateQueue = n),
        (n.stores = [e]))
      : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e));
}
function Sa(e, n, t, r) {
  (n.value = t), (n.getSnapshot = r), Ca(n) && xa(e);
}
function Ea(e, n, t) {
  return t(function () {
    Ca(n) && xa(e);
  });
}
function Ca(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !Ie(e, t);
  } catch {
    return !0;
  }
}
function xa(e) {
  var n = Ge(e, 1);
  n !== null && Me(n, e, 1, -1);
}
function Au(e) {
  var n = je();
  return (
    typeof e == "function" && (e = e()),
    (n.memoizedState = n.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Xt,
      lastRenderedState: e,
    }),
    (n.queue = e),
    (e = e.dispatch = pd.bind(null, Q, e)),
    [n.memoizedState, e]
  );
}
function Jt(e, n, t, r) {
  return (
    (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
    (n = Q.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (Q.updateQueue = n),
        (n.lastEffect = e.next = e))
      : ((t = n.lastEffect),
        t === null
          ? (n.lastEffect = e.next = e)
          : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
    e
  );
}
function Aa() {
  return Ne().memoizedState;
}
function zr(e, n, t, r) {
  var l = je();
  (Q.flags |= e),
    (l.memoizedState = Jt(1 | n, t, void 0, r === void 0 ? null : r));
}
function cl(e, n, t, r) {
  var l = Ne();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (X !== null) {
    var i = X.memoizedState;
    if (((o = i.destroy), r !== null && Si(r, i.deps))) {
      l.memoizedState = Jt(n, t, o, r);
      return;
    }
  }
  (Q.flags |= e), (l.memoizedState = Jt(1 | n, t, o, r));
}
function Nu(e, n) {
  return zr(8390656, 8, e, n);
}
function xi(e, n) {
  return cl(2048, 8, e, n);
}
function Na(e, n) {
  return cl(4, 2, e, n);
}
function Pa(e, n) {
  return cl(4, 4, e, n);
}
function za(e, n) {
  if (typeof n == "function")
    return (
      (e = e()),
      n(e),
      function () {
        n(null);
      }
    );
  if (n != null)
    return (
      (e = e()),
      (n.current = e),
      function () {
        n.current = null;
      }
    );
}
function _a(e, n, t) {
  return (
    (t = t != null ? t.concat([e]) : null), cl(4, 4, za.bind(null, n, e), t)
  );
}
function Ai() {}
function La(e, n) {
  var t = Ne();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && Si(n, r[1])
    ? r[0]
    : ((t.memoizedState = [e, n]), e);
}
function Ra(e, n) {
  var t = Ne();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && Si(n, r[1])
    ? r[0]
    : ((e = e()), (t.memoizedState = [e, n]), e);
}
function Ta(e, n, t) {
  return _n & 21
    ? (Ie(t, n) || ((t = Ds()), (Q.lanes |= t), (Ln |= t), (e.baseState = !0)),
      n)
    : (e.baseState && ((e.baseState = !1), (fe = !0)), (e.memoizedState = t));
}
function fd(e, n) {
  var t = I;
  (I = t !== 0 && 4 > t ? t : 4), e(!0);
  var r = Hl.transition;
  Hl.transition = {};
  try {
    e(!1), n();
  } finally {
    (I = t), (Hl.transition = r);
  }
}
function Ma() {
  return Ne().memoizedState;
}
function dd(e, n, t) {
  var r = fn(e);
  if (
    ((t = {
      lane: r,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ia(e))
  )
    Oa(n, t);
  else if (((t = va(e, n, t, r)), t !== null)) {
    var l = ue();
    Me(t, e, r, l), ja(t, n, r);
  }
}
function pd(e, n, t) {
  var r = fn(e),
    l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Ia(e)) Oa(n, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = n.lastRenderedReducer), o !== null)
    )
      try {
        var i = n.lastRenderedState,
          u = o(i, t);
        if (((l.hasEagerState = !0), (l.eagerState = u), Ie(u, i))) {
          var s = n.interleaved;
          s === null
            ? ((l.next = l), hi(n))
            : ((l.next = s.next), (s.next = l)),
            (n.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (t = va(e, n, l, r)),
      t !== null && ((l = ue()), Me(t, e, r, l), ja(t, n, r));
  }
}
function Ia(e) {
  var n = e.alternate;
  return e === Q || (n !== null && n === Q);
}
function Oa(e, n) {
  Lt = Zr = !0;
  var t = e.pending;
  t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
    (e.pending = n);
}
function ja(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), ti(e, t);
  }
}
var $r = {
    readContext: Ae,
    useCallback: te,
    useContext: te,
    useEffect: te,
    useImperativeHandle: te,
    useInsertionEffect: te,
    useLayoutEffect: te,
    useMemo: te,
    useReducer: te,
    useRef: te,
    useState: te,
    useDebugValue: te,
    useDeferredValue: te,
    useTransition: te,
    useMutableSource: te,
    useSyncExternalStore: te,
    useId: te,
    unstable_isNewReconciler: !1,
  },
  md = {
    readContext: Ae,
    useCallback: function (e, n) {
      return (je().memoizedState = [e, n === void 0 ? null : n]), e;
    },
    useContext: Ae,
    useEffect: Nu,
    useImperativeHandle: function (e, n, t) {
      return (
        (t = t != null ? t.concat([e]) : null),
        zr(4194308, 4, za.bind(null, n, e), t)
      );
    },
    useLayoutEffect: function (e, n) {
      return zr(4194308, 4, e, n);
    },
    useInsertionEffect: function (e, n) {
      return zr(4, 2, e, n);
    },
    useMemo: function (e, n) {
      var t = je();
      return (
        (n = n === void 0 ? null : n), (e = e()), (t.memoizedState = [e, n]), e
      );
    },
    useReducer: function (e, n, t) {
      var r = je();
      return (
        (n = t !== void 0 ? t(n) : n),
        (r.memoizedState = r.baseState = n),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: n,
        }),
        (r.queue = e),
        (e = e.dispatch = dd.bind(null, Q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var n = je();
      return (e = { current: e }), (n.memoizedState = e);
    },
    useState: Au,
    useDebugValue: Ai,
    useDeferredValue: function (e) {
      return (je().memoizedState = e);
    },
    useTransition: function () {
      var e = Au(!1),
        n = e[0];
      return (e = fd.bind(null, e[1])), (je().memoizedState = e), [n, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, n, t) {
      var r = Q,
        l = je();
      if (U) {
        if (t === void 0) throw Error(y(407));
        t = t();
      } else {
        if (((t = n()), q === null)) throw Error(y(349));
        _n & 30 || ka(r, n, t);
      }
      l.memoizedState = t;
      var o = { value: t, getSnapshot: n };
      return (
        (l.queue = o),
        Nu(Ea.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Jt(9, Sa.bind(null, r, o, t, n), void 0, null),
        t
      );
    },
    useId: function () {
      var e = je(),
        n = q.identifierPrefix;
      if (U) {
        var t = Ve,
          r = Qe;
        (t = (r & ~(1 << (32 - Te(r) - 1))).toString(32) + t),
          (n = ":" + n + "R" + t),
          (t = Gt++),
          0 < t && (n += "H" + t.toString(32)),
          (n += ":");
      } else (t = cd++), (n = ":" + n + "r" + t.toString(32) + ":");
      return (e.memoizedState = n);
    },
    unstable_isNewReconciler: !1,
  },
  vd = {
    readContext: Ae,
    useCallback: La,
    useContext: Ae,
    useEffect: xi,
    useImperativeHandle: _a,
    useInsertionEffect: Na,
    useLayoutEffect: Pa,
    useMemo: Ra,
    useReducer: Ql,
    useRef: Aa,
    useState: function () {
      return Ql(Xt);
    },
    useDebugValue: Ai,
    useDeferredValue: function (e) {
      var n = Ne();
      return Ta(n, X.memoizedState, e);
    },
    useTransition: function () {
      var e = Ql(Xt)[0],
        n = Ne().memoizedState;
      return [e, n];
    },
    useMutableSource: ga,
    useSyncExternalStore: wa,
    useId: Ma,
    unstable_isNewReconciler: !1,
  },
  hd = {
    readContext: Ae,
    useCallback: La,
    useContext: Ae,
    useEffect: xi,
    useImperativeHandle: _a,
    useInsertionEffect: Na,
    useLayoutEffect: Pa,
    useMemo: Ra,
    useReducer: Vl,
    useRef: Aa,
    useState: function () {
      return Vl(Xt);
    },
    useDebugValue: Ai,
    useDeferredValue: function (e) {
      var n = Ne();
      return X === null ? (n.memoizedState = e) : Ta(n, X.memoizedState, e);
    },
    useTransition: function () {
      var e = Vl(Xt)[0],
        n = Ne().memoizedState;
      return [e, n];
    },
    useMutableSource: ga,
    useSyncExternalStore: wa,
    useId: Ma,
    unstable_isNewReconciler: !1,
  };
function _e(e, n) {
  if (e && e.defaultProps) {
    (n = V({}, n)), (e = e.defaultProps);
    for (var t in e) n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
function zo(e, n, t, r) {
  (n = e.memoizedState),
    (t = t(r, n)),
    (t = t == null ? n : V({}, n, t)),
    (e.memoizedState = t),
    e.lanes === 0 && (e.updateQueue.baseState = t);
}
var fl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Mn(e) === e : !1;
  },
  enqueueSetState: function (e, n, t) {
    e = e._reactInternals;
    var r = ue(),
      l = fn(e),
      o = Ke(r, l);
    (o.payload = n),
      t != null && (o.callback = t),
      (n = an(e, o, l)),
      n !== null && (Me(n, e, l, r), Nr(n, e, l));
  },
  enqueueReplaceState: function (e, n, t) {
    e = e._reactInternals;
    var r = ue(),
      l = fn(e),
      o = Ke(r, l);
    (o.tag = 1),
      (o.payload = n),
      t != null && (o.callback = t),
      (n = an(e, o, l)),
      n !== null && (Me(n, e, l, r), Nr(n, e, l));
  },
  enqueueForceUpdate: function (e, n) {
    e = e._reactInternals;
    var t = ue(),
      r = fn(e),
      l = Ke(t, r);
    (l.tag = 2),
      n != null && (l.callback = n),
      (n = an(e, l, r)),
      n !== null && (Me(n, e, r, t), Nr(n, e, r));
  },
};
function Pu(e, n, t, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : n.prototype && n.prototype.isPureReactComponent
      ? !Ht(t, r) || !Ht(l, o)
      : !0
  );
}
function Da(e, n, t) {
  var r = !1,
    l = mn,
    o = n.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ae(o))
      : ((l = pe(n) ? Pn : oe.current),
        (r = n.contextTypes),
        (o = (r = r != null) ? nt(e, l) : mn)),
    (n = new n(t, o)),
    (e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
    (n.updater = fl),
    (e.stateNode = n),
    (n._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    n
  );
}
function zu(e, n, t, r) {
  (e = n.state),
    typeof n.componentWillReceiveProps == "function" &&
      n.componentWillReceiveProps(t, r),
    typeof n.UNSAFE_componentWillReceiveProps == "function" &&
      n.UNSAFE_componentWillReceiveProps(t, r),
    n.state !== e && fl.enqueueReplaceState(n, n.state, null);
}
function _o(e, n, t, r) {
  var l = e.stateNode;
  (l.props = t), (l.state = e.memoizedState), (l.refs = {}), yi(e);
  var o = n.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Ae(o))
    : ((o = pe(n) ? Pn : oe.current), (l.context = nt(e, o))),
    (l.state = e.memoizedState),
    (o = n.getDerivedStateFromProps),
    typeof o == "function" && (zo(e, n, o, t), (l.state = e.memoizedState)),
    typeof n.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((n = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      n !== l.state && fl.enqueueReplaceState(l, l.state, null),
      Xr(e, t, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function ot(e, n) {
  try {
    var t = "",
      r = n;
    do (t += Vc(r)), (r = r.return);
    while (r);
    var l = t;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function Kl(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function Lo(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function () {
      throw t;
    });
  }
}
var yd = typeof WeakMap == "function" ? WeakMap : Map;
function Fa(e, n, t) {
  (t = Ke(-1, t)), (t.tag = 3), (t.payload = { element: null });
  var r = n.value;
  return (
    (t.callback = function () {
      br || ((br = !0), (Uo = r)), Lo(e, n);
    }),
    t
  );
}
function Ba(e, n, t) {
  (t = Ke(-1, t)), (t.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = n.value;
    (t.payload = function () {
      return r(l);
    }),
      (t.callback = function () {
        Lo(e, n);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (t.callback = function () {
        Lo(e, n),
          typeof r != "function" &&
            (cn === null ? (cn = new Set([this])) : cn.add(this));
        var i = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    t
  );
}
function _u(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new yd();
    var l = new Set();
    r.set(n, l);
  } else (l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l));
  l.has(t) || (l.add(t), (e = Rd.bind(null, e, n, t)), n.then(e, e));
}
function Lu(e) {
  do {
    var n;
    if (
      ((n = e.tag === 13) &&
        ((n = e.memoizedState), (n = n !== null ? n.dehydrated !== null : !0)),
      n)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ru(e, n, t, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === n
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (t.flags |= 131072),
          (t.flags &= -52805),
          t.tag === 1 &&
            (t.alternate === null
              ? (t.tag = 17)
              : ((n = Ke(-1, 1)), (n.tag = 2), an(t, n, 1))),
          (t.lanes |= 1)),
      e);
}
var gd = Je.ReactCurrentOwner,
  fe = !1;
function ie(e, n, t, r) {
  n.child = e === null ? ma(n, null, t, r) : rt(n, e.child, t, r);
}
function Tu(e, n, t, r, l) {
  t = t.render;
  var o = n.ref;
  return (
    $n(n, l),
    (r = Ei(e, n, t, r, o, l)),
    (t = Ci()),
    e !== null && !fe
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, n, l))
      : (U && t && ci(n), (n.flags |= 1), ie(e, n, r, l), n.child)
  );
}
function Mu(e, n, t, r, l) {
  if (e === null) {
    var o = t.type;
    return typeof o == "function" &&
      !Mi(o) &&
      o.defaultProps === void 0 &&
      t.compare === null &&
      t.defaultProps === void 0
      ? ((n.tag = 15), (n.type = o), Ua(e, n, o, r, l))
      : ((e = Tr(t.type, null, r, n, n.mode, l)),
        (e.ref = n.ref),
        (e.return = n),
        (n.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((t = t.compare), (t = t !== null ? t : Ht), t(i, r) && e.ref === n.ref)
    )
      return Xe(e, n, l);
  }
  return (
    (n.flags |= 1),
    (e = dn(o, r)),
    (e.ref = n.ref),
    (e.return = n),
    (n.child = e)
  );
}
function Ua(e, n, t, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Ht(o, r) && e.ref === n.ref)
      if (((fe = !1), (n.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (fe = !0);
      else return (n.lanes = e.lanes), Xe(e, n, l);
  }
  return Ro(e, n, t, r, l);
}
function Ha(e, n, t) {
  var r = n.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(n.mode & 1))
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        j(Yn, ve),
        (ve |= t);
    else {
      if (!(t & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | t : t),
          (n.lanes = n.childLanes = 1073741824),
          (n.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (n.updateQueue = null),
          j(Yn, ve),
          (ve |= e),
          null
        );
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : t),
        j(Yn, ve),
        (ve |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | t), (n.memoizedState = null)) : (r = t),
      j(Yn, ve),
      (ve |= r);
  return ie(e, n, l, t), n.child;
}
function Qa(e, n) {
  var t = n.ref;
  ((e === null && t !== null) || (e !== null && e.ref !== t)) &&
    ((n.flags |= 512), (n.flags |= 2097152));
}
function Ro(e, n, t, r, l) {
  var o = pe(t) ? Pn : oe.current;
  return (
    (o = nt(n, o)),
    $n(n, l),
    (t = Ei(e, n, t, r, o, l)),
    (r = Ci()),
    e !== null && !fe
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, n, l))
      : (U && r && ci(n), (n.flags |= 1), ie(e, n, t, l), n.child)
  );
}
function Iu(e, n, t, r, l) {
  if (pe(t)) {
    var o = !0;
    Vr(n);
  } else o = !1;
  if (($n(n, l), n.stateNode === null))
    _r(e, n), Da(n, t, r), _o(n, t, r, l), (r = !0);
  else if (e === null) {
    var i = n.stateNode,
      u = n.memoizedProps;
    i.props = u;
    var s = i.context,
      f = t.contextType;
    typeof f == "object" && f !== null
      ? (f = Ae(f))
      : ((f = pe(t) ? Pn : oe.current), (f = nt(n, f)));
    var v = t.getDerivedStateFromProps,
      m =
        typeof v == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== f) && zu(n, i, r, f)),
      (be = !1);
    var p = n.memoizedState;
    (i.state = p),
      Xr(n, r, i, l),
      (s = n.memoizedState),
      u !== r || p !== s || de.current || be
        ? (typeof v == "function" && (zo(n, t, v, r), (s = n.memoizedState)),
          (u = be || Pu(n, t, u, r, p, s, f))
            ? (m ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (n.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (n.flags |= 4194308),
              (n.memoizedProps = r),
              (n.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = f),
          (r = u))
        : (typeof i.componentDidMount == "function" && (n.flags |= 4194308),
          (r = !1));
  } else {
    (i = n.stateNode),
      ha(e, n),
      (u = n.memoizedProps),
      (f = n.type === n.elementType ? u : _e(n.type, u)),
      (i.props = f),
      (m = n.pendingProps),
      (p = i.context),
      (s = t.contextType),
      typeof s == "object" && s !== null
        ? (s = Ae(s))
        : ((s = pe(t) ? Pn : oe.current), (s = nt(n, s)));
    var S = t.getDerivedStateFromProps;
    (v =
      typeof S == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== m || p !== s) && zu(n, i, r, s)),
      (be = !1),
      (p = n.memoizedState),
      (i.state = p),
      Xr(n, r, i, l);
    var w = n.memoizedState;
    u !== m || p !== w || de.current || be
      ? (typeof S == "function" && (zo(n, t, S, r), (w = n.memoizedState)),
        (f = be || Pu(n, t, f, r, p, w, s) || !1)
          ? (v ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, s)),
            typeof i.componentDidUpdate == "function" && (n.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (n.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (n.flags |= 1024),
            (n.memoizedProps = r),
            (n.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = s),
        (r = f))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (n.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (n.flags |= 1024),
        (r = !1));
  }
  return To(e, n, t, r, o, l);
}
function To(e, n, t, r, l, o) {
  Qa(e, n);
  var i = (n.flags & 128) !== 0;
  if (!r && !i) return l && wu(n, t, !1), Xe(e, n, o);
  (r = n.stateNode), (gd.current = n);
  var u =
    i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (n.flags |= 1),
    e !== null && i
      ? ((n.child = rt(n, e.child, null, o)), (n.child = rt(n, null, u, o)))
      : ie(e, n, u, o),
    (n.memoizedState = r.state),
    l && wu(n, t, !0),
    n.child
  );
}
function Va(e) {
  var n = e.stateNode;
  n.pendingContext
    ? gu(e, n.pendingContext, n.pendingContext !== n.context)
    : n.context && gu(e, n.context, !1),
    gi(e, n.containerInfo);
}
function Ou(e, n, t, r, l) {
  return tt(), di(l), (n.flags |= 256), ie(e, n, t, r), n.child;
}
var Mo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Io(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ka(e, n, t) {
  var r = n.pendingProps,
    l = H.current,
    o = !1,
    i = (n.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (n.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    j(H, l & 1),
    e === null)
  )
    return (
      No(n),
      (e = n.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (n.mode & 1
            ? e.data === "$!"
              ? (n.lanes = 8)
              : (n.lanes = 1073741824)
            : (n.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = n.mode),
              (o = n.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = ml(i, r, 0, null)),
              (e = Nn(e, r, t, null)),
              (o.return = n),
              (e.return = n),
              (o.sibling = e),
              (n.child = o),
              (n.child.memoizedState = Io(t)),
              (n.memoizedState = Mo),
              e)
            : Ni(n, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return wd(e, n, i, r, u, l, t);
  if (o) {
    (o = r.fallback), (i = n.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && n.child !== l
        ? ((r = n.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (n.deletions = null))
        : ((r = dn(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = dn(u, o)) : ((o = Nn(o, i, t, null)), (o.flags |= 2)),
      (o.return = n),
      (r.return = n),
      (r.sibling = o),
      (n.child = r),
      (r = o),
      (o = n.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Io(t)
          : {
              baseLanes: i.baseLanes | t,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~t),
      (n.memoizedState = Mo),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = dn(o, { mode: "visible", children: r.children })),
    !(n.mode & 1) && (r.lanes = t),
    (r.return = n),
    (r.sibling = null),
    e !== null &&
      ((t = n.deletions),
      t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
    (n.child = r),
    (n.memoizedState = null),
    r
  );
}
function Ni(e, n) {
  return (
    (n = ml({ mode: "visible", children: n }, e.mode, 0, null)),
    (n.return = e),
    (e.child = n)
  );
}
function yr(e, n, t, r) {
  return (
    r !== null && di(r),
    rt(n, e.child, null, t),
    (e = Ni(n, n.pendingProps.children)),
    (e.flags |= 2),
    (n.memoizedState = null),
    e
  );
}
function wd(e, n, t, r, l, o, i) {
  if (t)
    return n.flags & 256
      ? ((n.flags &= -257), (r = Kl(Error(y(422)))), yr(e, n, i, r))
      : n.memoizedState !== null
      ? ((n.child = e.child), (n.flags |= 128), null)
      : ((o = r.fallback),
        (l = n.mode),
        (r = ml({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Nn(o, l, i, null)),
        (o.flags |= 2),
        (r.return = n),
        (o.return = n),
        (r.sibling = o),
        (n.child = r),
        n.mode & 1 && rt(n, e.child, null, i),
        (n.child.memoizedState = Io(i)),
        (n.memoizedState = Mo),
        o);
  if (!(n.mode & 1)) return yr(e, n, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(y(419))), (r = Kl(o, r, void 0)), yr(e, n, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), fe || u)) {
    if (((r = q), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Ge(e, l), Me(r, e, l, -1));
    }
    return Ti(), (r = Kl(Error(y(421)))), yr(e, n, i, r);
  }
  return l.data === "$?"
    ? ((n.flags |= 128),
      (n.child = e.child),
      (n = Td.bind(null, e)),
      (l._reactRetry = n),
      null)
    : ((e = o.treeContext),
      (he = sn(l.nextSibling)),
      (ye = n),
      (U = !0),
      (Re = null),
      e !== null &&
        ((Se[Ee++] = Qe),
        (Se[Ee++] = Ve),
        (Se[Ee++] = zn),
        (Qe = e.id),
        (Ve = e.overflow),
        (zn = n)),
      (n = Ni(n, r.children)),
      (n.flags |= 4096),
      n);
}
function ju(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), Po(e.return, n, t);
}
function Wl(e, n, t, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: t,
        tailMode: l,
      })
    : ((o.isBackwards = n),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = t),
      (o.tailMode = l));
}
function Wa(e, n, t) {
  var r = n.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ie(e, n, r.children, t), (r = H.current), r & 2))
    (r = (r & 1) | 2), (n.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ju(e, t, n);
        else if (e.tag === 19) ju(e, t, n);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((j(H, r), !(n.mode & 1))) n.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (t = n.child, l = null; t !== null; )
          (e = t.alternate),
            e !== null && Jr(e) === null && (l = t),
            (t = t.sibling);
        (t = l),
          t === null
            ? ((l = n.child), (n.child = null))
            : ((l = t.sibling), (t.sibling = null)),
          Wl(n, !1, l, t, o);
        break;
      case "backwards":
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Jr(e) === null)) {
            n.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = t), (t = l), (l = e);
        }
        Wl(n, !0, t, null, o);
        break;
      case "together":
        Wl(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
  return n.child;
}
function _r(e, n) {
  !(n.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
}
function Xe(e, n, t) {
  if (
    (e !== null && (n.dependencies = e.dependencies),
    (Ln |= n.lanes),
    !(t & n.childLanes))
  )
    return null;
  if (e !== null && n.child !== e.child) throw Error(y(153));
  if (n.child !== null) {
    for (
      e = n.child, t = dn(e, e.pendingProps), n.child = t, t.return = n;
      e.sibling !== null;

    )
      (e = e.sibling), (t = t.sibling = dn(e, e.pendingProps)), (t.return = n);
    t.sibling = null;
  }
  return n.child;
}
function kd(e, n, t) {
  switch (n.tag) {
    case 3:
      Va(n), tt();
      break;
    case 5:
      ya(n);
      break;
    case 1:
      pe(n.type) && Vr(n);
      break;
    case 4:
      gi(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context,
        l = n.memoizedProps.value;
      j(Yr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = n.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (j(H, H.current & 1), (n.flags |= 128), null)
          : t & n.child.childLanes
          ? Ka(e, n, t)
          : (j(H, H.current & 1),
            (e = Xe(e, n, t)),
            e !== null ? e.sibling : null);
      j(H, H.current & 1);
      break;
    case 19:
      if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
        if (r) return Wa(e, n, t);
        n.flags |= 128;
      }
      if (
        ((l = n.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        j(H, H.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (n.lanes = 0), Ha(e, n, t);
  }
  return Xe(e, n, t);
}
var Ya, Oo, Ga, Xa;
Ya = function (e, n) {
  for (var t = n.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === n) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === n) return;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
};
Oo = function () {};
Ga = function (e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = n.stateNode), xn(Be.current);
    var o = null;
    switch (t) {
      case "input":
        (l = to(e, l)), (r = to(e, r)), (o = []);
        break;
      case "select":
        (l = V({}, l, { value: void 0 })),
          (r = V({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = oo(e, l)), (r = oo(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Hr);
    }
    uo(t, r);
    var i;
    t = null;
    for (f in l)
      if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null)
        if (f === "style") {
          var u = l[f];
          for (i in u) u.hasOwnProperty(i) && (t || (t = {}), (t[i] = ""));
        } else
          f !== "dangerouslySetInnerHTML" &&
            f !== "children" &&
            f !== "suppressContentEditableWarning" &&
            f !== "suppressHydrationWarning" &&
            f !== "autoFocus" &&
            (It.hasOwnProperty(f)
              ? o || (o = [])
              : (o = o || []).push(f, null));
    for (f in r) {
      var s = r[f];
      if (
        ((u = l != null ? l[f] : void 0),
        r.hasOwnProperty(f) && s !== u && (s != null || u != null))
      )
        if (f === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (t || (t = {}), (t[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (t || (t = {}), (t[i] = s[i]));
          } else t || (o || (o = []), o.push(f, t)), (t = s);
        else
          f === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(f, s))
            : f === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(f, "" + s)
            : f !== "suppressContentEditableWarning" &&
              f !== "suppressHydrationWarning" &&
              (It.hasOwnProperty(f)
                ? (s != null && f === "onScroll" && D("scroll", e),
                  o || u === s || (o = []))
                : (o = o || []).push(f, s));
    }
    t && (o = o || []).push("style", t);
    var f = o;
    (n.updateQueue = f) && (n.flags |= 4);
  }
};
Xa = function (e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function gt(e, n) {
  if (!U)
    switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; n !== null; )
          n.alternate !== null && (t = n), (n = n.sibling);
        t === null ? (e.tail = null) : (t.sibling = null);
        break;
      case "collapsed":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null
          ? n || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function re(e) {
  var n = e.alternate !== null && e.alternate.child === e.child,
    t = 0,
    r = 0;
  if (n)
    for (var l = e.child; l !== null; )
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = t), n;
}
function Sd(e, n, t) {
  var r = n.pendingProps;
  switch ((fi(n), n.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return re(n), null;
    case 1:
      return pe(n.type) && Qr(), re(n), null;
    case 3:
      return (
        (r = n.stateNode),
        lt(),
        B(de),
        B(oe),
        ki(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (vr(n)
            ? (n.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
              ((n.flags |= 1024), Re !== null && (Vo(Re), (Re = null)))),
        Oo(e, n),
        re(n),
        null
      );
    case 5:
      wi(n);
      var l = xn(Yt.current);
      if (((t = n.type), e !== null && n.stateNode != null))
        Ga(e, n, t, r, l),
          e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
      else {
        if (!r) {
          if (n.stateNode === null) throw Error(y(166));
          return re(n), null;
        }
        if (((e = xn(Be.current)), vr(n))) {
          (r = n.stateNode), (t = n.type);
          var o = n.memoizedProps;
          switch (((r[De] = n), (r[Kt] = o), (e = (n.mode & 1) !== 0), t)) {
            case "dialog":
              D("cancel", r), D("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < xt.length; l++) D(xt[l], r);
              break;
            case "source":
              D("error", r);
              break;
            case "img":
            case "image":
            case "link":
              D("error", r), D("load", r);
              break;
            case "details":
              D("toggle", r);
              break;
            case "input":
              Wi(r, o), D("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                D("invalid", r);
              break;
            case "textarea":
              Gi(r, o), D("invalid", r);
          }
          uo(t, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      mr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      mr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : It.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  D("scroll", r);
            }
          switch (t) {
            case "input":
              ir(r), Yi(r, o, !0);
              break;
            case "textarea":
              ir(r), Xi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Hr);
          }
          (r = l), (n.updateQueue = r), r !== null && (n.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Es(t)),
            e === "http://www.w3.org/1999/xhtml"
              ? t === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(t, { is: r.is }))
                : ((e = i.createElement(t)),
                  t === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, t)),
            (e[De] = n),
            (e[Kt] = r),
            Ya(e, n, !1, !1),
            (n.stateNode = e);
          e: {
            switch (((i = so(t, r)), t)) {
              case "dialog":
                D("cancel", e), D("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < xt.length; l++) D(xt[l], e);
                l = r;
                break;
              case "source":
                D("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                D("error", e), D("load", e), (l = r);
                break;
              case "details":
                D("toggle", e), (l = r);
                break;
              case "input":
                Wi(e, r), (l = to(e, r)), D("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = V({}, r, { value: void 0 })),
                  D("invalid", e);
                break;
              case "textarea":
                Gi(e, r), (l = oo(e, r)), D("invalid", e);
                break;
              default:
                l = r;
            }
            uo(t, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? As(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Cs(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (t !== "textarea" || s !== "") && Ot(e, s)
                    : typeof s == "number" && Ot(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (It.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && D("scroll", e)
                      : s != null && Zo(e, o, s, i));
              }
            switch (t) {
              case "input":
                ir(e), Yi(e, r, !1);
                break;
              case "textarea":
                ir(e), Xi(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + pn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Gn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Gn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Hr);
            }
            switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (n.flags |= 4);
        }
        n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
      }
      return re(n), null;
    case 6:
      if (e && n.stateNode != null) Xa(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null) throw Error(y(166));
        if (((t = xn(Yt.current)), xn(Be.current), vr(n))) {
          if (
            ((r = n.stateNode),
            (t = n.memoizedProps),
            (r[De] = n),
            (o = r.nodeValue !== t) && ((e = ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                mr(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  mr(r.nodeValue, t, (e.mode & 1) !== 0);
            }
          o && (n.flags |= 4);
        } else
          (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
            (r[De] = n),
            (n.stateNode = r);
      }
      return re(n), null;
    case 13:
      if (
        (B(H),
        (r = n.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && he !== null && n.mode & 1 && !(n.flags & 128))
          da(), tt(), (n.flags |= 98560), (o = !1);
        else if (((o = vr(n)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(y(318));
            if (
              ((o = n.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(y(317));
            o[De] = n;
          } else
            tt(), !(n.flags & 128) && (n.memoizedState = null), (n.flags |= 4);
          re(n), (o = !1);
        } else Re !== null && (Vo(Re), (Re = null)), (o = !0);
        if (!o) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128
        ? ((n.lanes = t), n)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((n.child.flags |= 8192),
            n.mode & 1 &&
              (e === null || H.current & 1 ? J === 0 && (J = 3) : Ti())),
          n.updateQueue !== null && (n.flags |= 4),
          re(n),
          null);
    case 4:
      return (
        lt(), Oo(e, n), e === null && Qt(n.stateNode.containerInfo), re(n), null
      );
    case 10:
      return vi(n.type._context), re(n), null;
    case 17:
      return pe(n.type) && Qr(), re(n), null;
    case 19:
      if ((B(H), (o = n.memoizedState), o === null)) return re(n), null;
      if (((r = (n.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) gt(o, !1);
        else {
          if (J !== 0 || (e !== null && e.flags & 128))
            for (e = n.child; e !== null; ) {
              if (((i = Jr(e)), i !== null)) {
                for (
                  n.flags |= 128,
                    gt(o, !1),
                    r = i.updateQueue,
                    r !== null && ((n.updateQueue = r), (n.flags |= 4)),
                    n.subtreeFlags = 0,
                    r = t,
                    t = n.child;
                  t !== null;

                )
                  (o = t),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (t = t.sibling);
                return j(H, (H.current & 1) | 2), n.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Y() > it &&
            ((n.flags |= 128), (r = !0), gt(o, !1), (n.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Jr(i)), e !== null)) {
            if (
              ((n.flags |= 128),
              (r = !0),
              (t = e.updateQueue),
              t !== null && ((n.updateQueue = t), (n.flags |= 4)),
              gt(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !U)
            )
              return re(n), null;
          } else
            2 * Y() - o.renderingStartTime > it &&
              t !== 1073741824 &&
              ((n.flags |= 128), (r = !0), gt(o, !1), (n.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = n.child), (n.child = i))
          : ((t = o.last),
            t !== null ? (t.sibling = i) : (n.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((n = o.tail),
          (o.rendering = n),
          (o.tail = n.sibling),
          (o.renderingStartTime = Y()),
          (n.sibling = null),
          (t = H.current),
          j(H, r ? (t & 1) | 2 : t & 1),
          n)
        : (re(n), null);
    case 22:
    case 23:
      return (
        Ri(),
        (r = n.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192),
        r && n.mode & 1
          ? ve & 1073741824 && (re(n), n.subtreeFlags & 6 && (n.flags |= 8192))
          : re(n),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, n.tag));
}
function Ed(e, n) {
  switch ((fi(n), n.tag)) {
    case 1:
      return (
        pe(n.type) && Qr(),
        (e = n.flags),
        e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 3:
      return (
        lt(),
        B(de),
        B(oe),
        ki(),
        (e = n.flags),
        e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 5:
      return wi(n), null;
    case 13:
      if ((B(H), (e = n.memoizedState), e !== null && e.dehydrated !== null)) {
        if (n.alternate === null) throw Error(y(340));
        tt();
      }
      return (
        (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 19:
      return B(H), null;
    case 4:
      return lt(), null;
    case 10:
      return vi(n.type._context), null;
    case 22:
    case 23:
      return Ri(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var gr = !1,
  le = !1,
  Cd = typeof WeakSet == "function" ? WeakSet : Set,
  N = null;
function Wn(e, n) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (r) {
        K(e, n, r);
      }
    else t.current = null;
}
function jo(e, n, t) {
  try {
    t();
  } catch (r) {
    K(e, n, r);
  }
}
var Du = !1;
function xd(e, n) {
  if (((wo = Fr), (e = bs()), ai(e))) {
    if ("selectionStart" in e)
      var t = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        t = ((t = e.ownerDocument) && t.defaultView) || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, o.nodeType;
          } catch {
            t = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            f = 0,
            v = 0,
            m = e,
            p = null;
          n: for (;;) {
            for (
              var S;
              m !== t || (l !== 0 && m.nodeType !== 3) || (u = i + l),
                m !== o || (r !== 0 && m.nodeType !== 3) || (s = i + r),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (S = m.firstChild) !== null;

            )
              (p = m), (m = S);
            for (;;) {
              if (m === e) break n;
              if (
                (p === t && ++f === l && (u = i),
                p === o && ++v === r && (s = i),
                (S = m.nextSibling) !== null)
              )
                break;
              (m = p), (p = m.parentNode);
            }
            m = S;
          }
          t = u === -1 || s === -1 ? null : { start: u, end: s };
        } else t = null;
      }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (ko = { focusedElem: e, selectionRange: t }, Fr = !1, N = n; N !== null; )
    if (((n = N), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = n), (N = e);
    else
      for (; N !== null; ) {
        n = N;
        try {
          var w = n.alternate;
          if (n.flags & 1024)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var C = w.memoizedProps,
                    O = w.memoizedState,
                    c = n.stateNode,
                    a = c.getSnapshotBeforeUpdate(
                      n.elementType === n.type ? C : _e(n.type, C),
                      O
                    );
                  c.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = n.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (h) {
          K(n, n.return, h);
        }
        if (((e = n.sibling), e !== null)) {
          (e.return = n.return), (N = e);
          break;
        }
        N = n.return;
      }
  return (w = Du), (Du = !1), w;
}
function Rt(e, n, t) {
  var r = n.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && jo(n, t, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function dl(e, n) {
  if (
    ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
  ) {
    var t = (n = n.next);
    do {
      if ((t.tag & e) === e) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== n);
  }
}
function Do(e) {
  var n = e.ref;
  if (n !== null) {
    var t = e.stateNode;
    switch (e.tag) {
      case 5:
        e = t;
        break;
      default:
        e = t;
    }
    typeof n == "function" ? n(e) : (n.current = e);
  }
}
function Ja(e) {
  var n = e.alternate;
  n !== null && ((e.alternate = null), Ja(n)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((n = e.stateNode),
      n !== null &&
        (delete n[De], delete n[Kt], delete n[Co], delete n[id], delete n[ud])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Za(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Fu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Za(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Fo(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      n
        ? t.nodeType === 8
          ? t.parentNode.insertBefore(e, n)
          : t.insertBefore(e, n)
        : (t.nodeType === 8
            ? ((n = t.parentNode), n.insertBefore(e, t))
            : ((n = t), n.appendChild(e)),
          (t = t._reactRootContainer),
          t != null || n.onclick !== null || (n.onclick = Hr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Fo(e, n, t), e = e.sibling; e !== null; ) Fo(e, n, t), (e = e.sibling);
}
function Bo(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Bo(e, n, t), e = e.sibling; e !== null; ) Bo(e, n, t), (e = e.sibling);
}
var b = null,
  Le = !1;
function Ze(e, n, t) {
  for (t = t.child; t !== null; ) $a(e, n, t), (t = t.sibling);
}
function $a(e, n, t) {
  if (Fe && typeof Fe.onCommitFiberUnmount == "function")
    try {
      Fe.onCommitFiberUnmount(ll, t);
    } catch {}
  switch (t.tag) {
    case 5:
      le || Wn(t, n);
    case 6:
      var r = b,
        l = Le;
      (b = null),
        Ze(e, n, t),
        (b = r),
        (Le = l),
        b !== null &&
          (Le
            ? ((e = b),
              (t = t.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t))
            : b.removeChild(t.stateNode));
      break;
    case 18:
      b !== null &&
        (Le
          ? ((e = b),
            (t = t.stateNode),
            e.nodeType === 8
              ? Fl(e.parentNode, t)
              : e.nodeType === 1 && Fl(e, t),
            Bt(e))
          : Fl(b, t.stateNode));
      break;
    case 4:
      (r = b),
        (l = Le),
        (b = t.stateNode.containerInfo),
        (Le = !0),
        Ze(e, n, t),
        (b = r),
        (Le = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !le &&
        ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && jo(t, n, i),
            (l = l.next);
        } while (l !== r);
      }
      Ze(e, n, t);
      break;
    case 1:
      if (
        !le &&
        (Wn(t, n),
        (r = t.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = t.memoizedProps),
            (r.state = t.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          K(t, n, u);
        }
      Ze(e, n, t);
      break;
    case 21:
      Ze(e, n, t);
      break;
    case 22:
      t.mode & 1
        ? ((le = (r = le) || t.memoizedState !== null), Ze(e, n, t), (le = r))
        : Ze(e, n, t);
      break;
    default:
      Ze(e, n, t);
  }
}
function Bu(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new Cd()),
      n.forEach(function (r) {
        var l = Md.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      });
  }
}
function ze(e, n) {
  var t = n.deletions;
  if (t !== null)
    for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var o = e,
          i = n,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (b = u.stateNode), (Le = !1);
              break e;
            case 3:
              (b = u.stateNode.containerInfo), (Le = !0);
              break e;
            case 4:
              (b = u.stateNode.containerInfo), (Le = !0);
              break e;
          }
          u = u.return;
        }
        if (b === null) throw Error(y(160));
        $a(o, i, l), (b = null), (Le = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (f) {
        K(l, n, f);
      }
    }
  if (n.subtreeFlags & 12854)
    for (n = n.child; n !== null; ) qa(n, e), (n = n.sibling);
}
function qa(e, n) {
  var t = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ze(n, e), Oe(e), r & 4)) {
        try {
          Rt(3, e, e.return), dl(3, e);
        } catch (C) {
          K(e, e.return, C);
        }
        try {
          Rt(5, e, e.return);
        } catch (C) {
          K(e, e.return, C);
        }
      }
      break;
    case 1:
      ze(n, e), Oe(e), r & 512 && t !== null && Wn(t, t.return);
      break;
    case 5:
      if (
        (ze(n, e),
        Oe(e),
        r & 512 && t !== null && Wn(t, t.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Ot(l, "");
        } catch (C) {
          K(e, e.return, C);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = t !== null ? t.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && ks(l, o),
              so(u, i);
            var f = so(u, o);
            for (i = 0; i < s.length; i += 2) {
              var v = s[i],
                m = s[i + 1];
              v === "style"
                ? As(l, m)
                : v === "dangerouslySetInnerHTML"
                ? Cs(l, m)
                : v === "children"
                ? Ot(l, m)
                : Zo(l, v, m, f);
            }
            switch (u) {
              case "input":
                ro(l, o);
                break;
              case "textarea":
                Ss(l, o);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var S = o.value;
                S != null
                  ? Gn(l, !!o.multiple, S, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Gn(l, !!o.multiple, o.defaultValue, !0)
                      : Gn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Kt] = o;
          } catch (C) {
            K(e, e.return, C);
          }
      }
      break;
    case 6:
      if ((ze(n, e), Oe(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (C) {
          K(e, e.return, C);
        }
      }
      break;
    case 3:
      if (
        (ze(n, e), Oe(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
      )
        try {
          Bt(n.containerInfo);
        } catch (C) {
          K(e, e.return, C);
        }
      break;
    case 4:
      ze(n, e), Oe(e);
      break;
    case 13:
      ze(n, e),
        Oe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (_i = Y())),
        r & 4 && Bu(e);
      break;
    case 22:
      if (
        ((v = t !== null && t.memoizedState !== null),
        e.mode & 1 ? ((le = (f = le) || v), ze(n, e), (le = f)) : ze(n, e),
        Oe(e),
        r & 8192)
      ) {
        if (
          ((f = e.memoizedState !== null),
          (e.stateNode.isHidden = f) && !v && e.mode & 1)
        )
          for (N = e, v = e.child; v !== null; ) {
            for (m = N = v; N !== null; ) {
              switch (((p = N), (S = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Rt(4, p, p.return);
                  break;
                case 1:
                  Wn(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = p), (t = p.return);
                    try {
                      (n = r),
                        (w.props = n.memoizedProps),
                        (w.state = n.memoizedState),
                        w.componentWillUnmount();
                    } catch (C) {
                      K(r, t, C);
                    }
                  }
                  break;
                case 5:
                  Wn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Hu(m);
                    continue;
                  }
              }
              S !== null ? ((S.return = p), (N = S)) : Hu(m);
            }
            v = v.sibling;
          }
        e: for (v = null, m = e; ; ) {
          if (m.tag === 5) {
            if (v === null) {
              v = m;
              try {
                (l = m.stateNode),
                  f
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = m.stateNode),
                      (s = m.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = xs("display", i)));
              } catch (C) {
                K(e, e.return, C);
              }
            }
          } else if (m.tag === 6) {
            if (v === null)
              try {
                m.stateNode.nodeValue = f ? "" : m.memoizedProps;
              } catch (C) {
                K(e, e.return, C);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            v === m && (v = null), (m = m.return);
          }
          v === m && (v = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      ze(n, e), Oe(e), r & 4 && Bu(e);
      break;
    case 21:
      break;
    default:
      ze(n, e), Oe(e);
  }
}
function Oe(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (Za(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Ot(l, ""), (r.flags &= -33));
          var o = Fu(e);
          Bo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = Fu(e);
          Fo(e, u, i);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      K(e, e.return, s);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function Ad(e, n, t) {
  (N = e), ba(e);
}
function ba(e, n, t) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var l = N,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || gr;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || le;
        u = gr;
        var f = le;
        if (((gr = i), (le = s) && !f))
          for (N = l; N !== null; )
            (i = N),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Qu(l)
                : s !== null
                ? ((s.return = i), (N = s))
                : Qu(l);
        for (; o !== null; ) (N = o), ba(o), (o = o.sibling);
        (N = l), (gr = u), (le = f);
      }
      Uu(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (N = o)) : Uu(e);
  }
}
function Uu(e) {
  for (; N !== null; ) {
    var n = N;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772)
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              le || dl(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !le)
                if (t === null) r.componentDidMount();
                else {
                  var l =
                    n.elementType === n.type
                      ? t.memoizedProps
                      : _e(n.type, t.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    t.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = n.updateQueue;
              o !== null && xu(n, o, r);
              break;
            case 3:
              var i = n.updateQueue;
              if (i !== null) {
                if (((t = null), n.child !== null))
                  switch (n.child.tag) {
                    case 5:
                      t = n.child.stateNode;
                      break;
                    case 1:
                      t = n.child.stateNode;
                  }
                xu(n, i, t);
              }
              break;
            case 5:
              var u = n.stateNode;
              if (t === null && n.flags & 4) {
                t = u;
                var s = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && t.focus();
                    break;
                  case "img":
                    s.src && (t.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (n.memoizedState === null) {
                var f = n.alternate;
                if (f !== null) {
                  var v = f.memoizedState;
                  if (v !== null) {
                    var m = v.dehydrated;
                    m !== null && Bt(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        le || (n.flags & 512 && Do(n));
      } catch (p) {
        K(n, n.return, p);
      }
    }
    if (n === e) {
      N = null;
      break;
    }
    if (((t = n.sibling), t !== null)) {
      (t.return = n.return), (N = t);
      break;
    }
    N = n.return;
  }
}
function Hu(e) {
  for (; N !== null; ) {
    var n = N;
    if (n === e) {
      N = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      (t.return = n.return), (N = t);
      break;
    }
    N = n.return;
  }
}
function Qu(e) {
  for (; N !== null; ) {
    var n = N;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            dl(4, n);
          } catch (s) {
            K(n, t, s);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = n.return;
            try {
              r.componentDidMount();
            } catch (s) {
              K(n, l, s);
            }
          }
          var o = n.return;
          try {
            Do(n);
          } catch (s) {
            K(n, o, s);
          }
          break;
        case 5:
          var i = n.return;
          try {
            Do(n);
          } catch (s) {
            K(n, i, s);
          }
      }
    } catch (s) {
      K(n, n.return, s);
    }
    if (n === e) {
      N = null;
      break;
    }
    var u = n.sibling;
    if (u !== null) {
      (u.return = n.return), (N = u);
      break;
    }
    N = n.return;
  }
}
var Nd = Math.ceil,
  qr = Je.ReactCurrentDispatcher,
  Pi = Je.ReactCurrentOwner,
  xe = Je.ReactCurrentBatchConfig,
  M = 0,
  q = null,
  G = null,
  ee = 0,
  ve = 0,
  Yn = hn(0),
  J = 0,
  Zt = null,
  Ln = 0,
  pl = 0,
  zi = 0,
  Tt = null,
  ce = null,
  _i = 0,
  it = 1 / 0,
  Ue = null,
  br = !1,
  Uo = null,
  cn = null,
  wr = !1,
  rn = null,
  el = 0,
  Mt = 0,
  Ho = null,
  Lr = -1,
  Rr = 0;
function ue() {
  return M & 6 ? Y() : Lr !== -1 ? Lr : (Lr = Y());
}
function fn(e) {
  return e.mode & 1
    ? M & 2 && ee !== 0
      ? ee & -ee
      : ad.transition !== null
      ? (Rr === 0 && (Rr = Ds()), Rr)
      : ((e = I),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ks(e.type))),
        e)
    : 1;
}
function Me(e, n, t, r) {
  if (50 < Mt) throw ((Mt = 0), (Ho = null), Error(y(185)));
  qt(e, t, r),
    (!(M & 2) || e !== q) &&
      (e === q && (!(M & 2) && (pl |= t), J === 4 && nn(e, ee)),
      me(e, r),
      t === 1 && M === 0 && !(n.mode & 1) && ((it = Y() + 500), al && yn()));
}
function me(e, n) {
  var t = e.callbackNode;
  af(e, n);
  var r = Dr(e, e === q ? ee : 0);
  if (r === 0)
    t !== null && $i(t), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((n = r & -r), e.callbackPriority !== n)) {
    if ((t != null && $i(t), n === 1))
      e.tag === 0 ? sd(Vu.bind(null, e)) : aa(Vu.bind(null, e)),
        ld(function () {
          !(M & 6) && yn();
        }),
        (t = null);
    else {
      switch (Fs(r)) {
        case 1:
          t = ni;
          break;
        case 4:
          t = Os;
          break;
        case 16:
          t = jr;
          break;
        case 536870912:
          t = js;
          break;
        default:
          t = jr;
      }
      t = uc(t, ec.bind(null, e));
    }
    (e.callbackPriority = n), (e.callbackNode = t);
  }
}
function ec(e, n) {
  if (((Lr = -1), (Rr = 0), M & 6)) throw Error(y(327));
  var t = e.callbackNode;
  if (qn() && e.callbackNode !== t) return null;
  var r = Dr(e, e === q ? ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || n) n = nl(e, r);
  else {
    n = r;
    var l = M;
    M |= 2;
    var o = tc();
    (q !== e || ee !== n) && ((Ue = null), (it = Y() + 500), An(e, n));
    do
      try {
        _d();
        break;
      } catch (u) {
        nc(e, u);
      }
    while (!0);
    mi(),
      (qr.current = o),
      (M = l),
      G !== null ? (n = 0) : ((q = null), (ee = 0), (n = J));
  }
  if (n !== 0) {
    if (
      (n === 2 && ((l = mo(e)), l !== 0 && ((r = l), (n = Qo(e, l)))), n === 1)
    )
      throw ((t = Zt), An(e, 0), nn(e, r), me(e, Y()), t);
    if (n === 6) nn(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Pd(l) &&
          ((n = nl(e, r)),
          n === 2 && ((o = mo(e)), o !== 0 && ((r = o), (n = Qo(e, o)))),
          n === 1))
      )
        throw ((t = Zt), An(e, 0), nn(e, r), me(e, Y()), t);
      switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          Sn(e, ce, Ue);
          break;
        case 3:
          if (
            (nn(e, r), (r & 130023424) === r && ((n = _i + 500 - Y()), 10 < n))
          ) {
            if (Dr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ue(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Eo(Sn.bind(null, e, ce, Ue), n);
            break;
          }
          Sn(e, ce, Ue);
          break;
        case 4:
          if ((nn(e, r), (r & 4194240) === r)) break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Te(r);
            (o = 1 << i), (i = n[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = Y() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Nd(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Eo(Sn.bind(null, e, ce, Ue), r);
            break;
          }
          Sn(e, ce, Ue);
          break;
        case 5:
          Sn(e, ce, Ue);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return me(e, Y()), e.callbackNode === t ? ec.bind(null, e) : null;
}
function Qo(e, n) {
  var t = Tt;
  return (
    e.current.memoizedState.isDehydrated && (An(e, n).flags |= 256),
    (e = nl(e, n)),
    e !== 2 && ((n = ce), (ce = t), n !== null && Vo(n)),
    e
  );
}
function Vo(e) {
  ce === null ? (ce = e) : ce.push.apply(ce, e);
}
function Pd(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && ((t = t.stores), t !== null))
        for (var r = 0; r < t.length; r++) {
          var l = t[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Ie(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
      (t.return = n), (n = t);
    else {
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return !0;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }
  return !0;
}
function nn(e, n) {
  for (
    n &= ~zi,
      n &= ~pl,
      e.suspendedLanes |= n,
      e.pingedLanes &= ~n,
      e = e.expirationTimes;
    0 < n;

  ) {
    var t = 31 - Te(n),
      r = 1 << t;
    (e[t] = -1), (n &= ~r);
  }
}
function Vu(e) {
  if (M & 6) throw Error(y(327));
  qn();
  var n = Dr(e, 0);
  if (!(n & 1)) return me(e, Y()), null;
  var t = nl(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = mo(e);
    r !== 0 && ((n = r), (t = Qo(e, r)));
  }
  if (t === 1) throw ((t = Zt), An(e, 0), nn(e, n), me(e, Y()), t);
  if (t === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = n),
    Sn(e, ce, Ue),
    me(e, Y()),
    null
  );
}
function Li(e, n) {
  var t = M;
  M |= 1;
  try {
    return e(n);
  } finally {
    (M = t), M === 0 && ((it = Y() + 500), al && yn());
  }
}
function Rn(e) {
  rn !== null && rn.tag === 0 && !(M & 6) && qn();
  var n = M;
  M |= 1;
  var t = xe.transition,
    r = I;
  try {
    if (((xe.transition = null), (I = 1), e)) return e();
  } finally {
    (I = r), (xe.transition = t), (M = n), !(M & 6) && yn();
  }
}
function Ri() {
  (ve = Yn.current), B(Yn);
}
function An(e, n) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var t = e.timeoutHandle;
  if ((t !== -1 && ((e.timeoutHandle = -1), rd(t)), G !== null))
    for (t = G.return; t !== null; ) {
      var r = t;
      switch ((fi(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Qr();
          break;
        case 3:
          lt(), B(de), B(oe), ki();
          break;
        case 5:
          wi(r);
          break;
        case 4:
          lt();
          break;
        case 13:
          B(H);
          break;
        case 19:
          B(H);
          break;
        case 10:
          vi(r.type._context);
          break;
        case 22:
        case 23:
          Ri();
      }
      t = t.return;
    }
  if (
    ((q = e),
    (G = e = dn(e.current, null)),
    (ee = ve = n),
    (J = 0),
    (Zt = null),
    (zi = pl = Ln = 0),
    (ce = Tt = null),
    Cn !== null)
  ) {
    for (n = 0; n < Cn.length; n++)
      if (((t = Cn[n]), (r = t.interleaved), r !== null)) {
        t.interleaved = null;
        var l = r.next,
          o = t.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        t.pending = r;
      }
    Cn = null;
  }
  return e;
}
function nc(e, n) {
  do {
    var t = G;
    try {
      if ((mi(), (Pr.current = $r), Zr)) {
        for (var r = Q.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Zr = !1;
      }
      if (
        ((_n = 0),
        ($ = X = Q = null),
        (Lt = !1),
        (Gt = 0),
        (Pi.current = null),
        t === null || t.return === null)
      ) {
        (J = 1), (Zt = n), (G = null);
        break;
      }
      e: {
        var o = e,
          i = t.return,
          u = t,
          s = n;
        if (
          ((n = ee),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var f = s,
            v = u,
            m = v.tag;
          if (!(v.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = v.alternate;
            p
              ? ((v.updateQueue = p.updateQueue),
                (v.memoizedState = p.memoizedState),
                (v.lanes = p.lanes))
              : ((v.updateQueue = null), (v.memoizedState = null));
          }
          var S = Lu(i);
          if (S !== null) {
            (S.flags &= -257),
              Ru(S, i, u, o, n),
              S.mode & 1 && _u(o, f, n),
              (n = S),
              (s = f);
            var w = n.updateQueue;
            if (w === null) {
              var C = new Set();
              C.add(s), (n.updateQueue = C);
            } else w.add(s);
            break e;
          } else {
            if (!(n & 1)) {
              _u(o, f, n), Ti();
              break e;
            }
            s = Error(y(426));
          }
        } else if (U && u.mode & 1) {
          var O = Lu(i);
          if (O !== null) {
            !(O.flags & 65536) && (O.flags |= 256),
              Ru(O, i, u, o, n),
              di(ot(s, u));
            break e;
          }
        }
        (o = s = ot(s, u)),
          J !== 4 && (J = 2),
          Tt === null ? (Tt = [o]) : Tt.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (n &= -n), (o.lanes |= n);
              var c = Fa(o, s, n);
              Cu(o, c);
              break e;
            case 1:
              u = s;
              var a = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (cn === null || !cn.has(d))))
              ) {
                (o.flags |= 65536), (n &= -n), (o.lanes |= n);
                var h = Ba(o, u, n);
                Cu(o, h);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      lc(t);
    } catch (A) {
      (n = A), G === t && t !== null && (G = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function tc() {
  var e = qr.current;
  return (qr.current = $r), e === null ? $r : e;
}
function Ti() {
  (J === 0 || J === 3 || J === 2) && (J = 4),
    q === null || (!(Ln & 268435455) && !(pl & 268435455)) || nn(q, ee);
}
function nl(e, n) {
  var t = M;
  M |= 2;
  var r = tc();
  (q !== e || ee !== n) && ((Ue = null), An(e, n));
  do
    try {
      zd();
      break;
    } catch (l) {
      nc(e, l);
    }
  while (!0);
  if ((mi(), (M = t), (qr.current = r), G !== null)) throw Error(y(261));
  return (q = null), (ee = 0), J;
}
function zd() {
  for (; G !== null; ) rc(G);
}
function _d() {
  for (; G !== null && !bc(); ) rc(G);
}
function rc(e) {
  var n = ic(e.alternate, e, ve);
  (e.memoizedProps = e.pendingProps),
    n === null ? lc(e) : (G = n),
    (Pi.current = null);
}
function lc(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (((e = n.return), n.flags & 32768)) {
      if (((t = Ed(t, n)), t !== null)) {
        (t.flags &= 32767), (G = t);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (J = 6), (G = null);
        return;
      }
    } else if (((t = Sd(t, n, ve)), t !== null)) {
      G = t;
      return;
    }
    if (((n = n.sibling), n !== null)) {
      G = n;
      return;
    }
    G = n = e;
  } while (n !== null);
  J === 0 && (J = 5);
}
function Sn(e, n, t) {
  var r = I,
    l = xe.transition;
  try {
    (xe.transition = null), (I = 1), Ld(e, n, t, r);
  } finally {
    (xe.transition = l), (I = r);
  }
  return null;
}
function Ld(e, n, t, r) {
  do qn();
  while (rn !== null);
  if (M & 6) throw Error(y(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = t.lanes | t.childLanes;
  if (
    (cf(e, o),
    e === q && ((G = q = null), (ee = 0)),
    (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
      wr ||
      ((wr = !0),
      uc(jr, function () {
        return qn(), null;
      })),
    (o = (t.flags & 15990) !== 0),
    t.subtreeFlags & 15990 || o)
  ) {
    (o = xe.transition), (xe.transition = null);
    var i = I;
    I = 1;
    var u = M;
    (M |= 4),
      (Pi.current = null),
      xd(e, t),
      qa(t, e),
      Zf(ko),
      (Fr = !!wo),
      (ko = wo = null),
      (e.current = t),
      Ad(t),
      ef(),
      (M = u),
      (I = i),
      (xe.transition = o);
  } else e.current = t;
  if (
    (wr && ((wr = !1), (rn = e), (el = l)),
    (o = e.pendingLanes),
    o === 0 && (cn = null),
    rf(t.stateNode),
    me(e, Y()),
    n !== null)
  )
    for (r = e.onRecoverableError, t = 0; t < n.length; t++)
      (l = n[t]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (br) throw ((br = !1), (e = Uo), (Uo = null), e);
  return (
    el & 1 && e.tag !== 0 && qn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Ho ? Mt++ : ((Mt = 0), (Ho = e))) : (Mt = 0),
    yn(),
    null
  );
}
function qn() {
  if (rn !== null) {
    var e = Fs(el),
      n = xe.transition,
      t = I;
    try {
      if (((xe.transition = null), (I = 16 > e ? 16 : e), rn === null))
        var r = !1;
      else {
        if (((e = rn), (rn = null), (el = 0), M & 6)) throw Error(y(331));
        var l = M;
        for (M |= 4, N = e.current; N !== null; ) {
          var o = N,
            i = o.child;
          if (N.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var f = u[s];
                for (N = f; N !== null; ) {
                  var v = N;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rt(8, v, o);
                  }
                  var m = v.child;
                  if (m !== null) (m.return = v), (N = m);
                  else
                    for (; N !== null; ) {
                      v = N;
                      var p = v.sibling,
                        S = v.return;
                      if ((Ja(v), v === f)) {
                        N = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = S), (N = p);
                        break;
                      }
                      N = S;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var C = w.child;
                if (C !== null) {
                  w.child = null;
                  do {
                    var O = C.sibling;
                    (C.sibling = null), (C = O);
                  } while (C !== null);
                }
              }
              N = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (N = i);
          else
            e: for (; N !== null; ) {
              if (((o = N), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Rt(9, o, o.return);
                }
              var c = o.sibling;
              if (c !== null) {
                (c.return = o.return), (N = c);
                break e;
              }
              N = o.return;
            }
        }
        var a = e.current;
        for (N = a; N !== null; ) {
          i = N;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (N = d);
          else
            e: for (i = a; N !== null; ) {
              if (((u = N), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      dl(9, u);
                  }
                } catch (A) {
                  K(u, u.return, A);
                }
              if (u === i) {
                N = null;
                break e;
              }
              var h = u.sibling;
              if (h !== null) {
                (h.return = u.return), (N = h);
                break e;
              }
              N = u.return;
            }
        }
        if (
          ((M = l), yn(), Fe && typeof Fe.onPostCommitFiberRoot == "function")
        )
          try {
            Fe.onPostCommitFiberRoot(ll, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (I = t), (xe.transition = n);
    }
  }
  return !1;
}
function Ku(e, n, t) {
  (n = ot(t, n)),
    (n = Fa(e, n, 1)),
    (e = an(e, n, 1)),
    (n = ue()),
    e !== null && (qt(e, 1, n), me(e, n));
}
function K(e, n, t) {
  if (e.tag === 3) Ku(e, e, t);
  else
    for (; n !== null; ) {
      if (n.tag === 3) {
        Ku(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (cn === null || !cn.has(r)))
        ) {
          (e = ot(t, e)),
            (e = Ba(n, e, 1)),
            (n = an(n, e, 1)),
            (e = ue()),
            n !== null && (qt(n, 1, e), me(n, e));
          break;
        }
      }
      n = n.return;
    }
}
function Rd(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n),
    (n = ue()),
    (e.pingedLanes |= e.suspendedLanes & t),
    q === e &&
      (ee & t) === t &&
      (J === 4 || (J === 3 && (ee & 130023424) === ee && 500 > Y() - _i)
        ? An(e, 0)
        : (zi |= t)),
    me(e, n);
}
function oc(e, n) {
  n === 0 &&
    (e.mode & 1
      ? ((n = ar), (ar <<= 1), !(ar & 130023424) && (ar = 4194304))
      : (n = 1));
  var t = ue();
  (e = Ge(e, n)), e !== null && (qt(e, n, t), me(e, t));
}
function Td(e) {
  var n = e.memoizedState,
    t = 0;
  n !== null && (t = n.retryLane), oc(e, t);
}
function Md(e, n) {
  var t = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (t = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(n), oc(e, t);
}
var ic;
ic = function (e, n, t) {
  if (e !== null)
    if (e.memoizedProps !== n.pendingProps || de.current) fe = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128)) return (fe = !1), kd(e, n, t);
      fe = !!(e.flags & 131072);
    }
  else (fe = !1), U && n.flags & 1048576 && ca(n, Wr, n.index);
  switch (((n.lanes = 0), n.tag)) {
    case 2:
      var r = n.type;
      _r(e, n), (e = n.pendingProps);
      var l = nt(n, oe.current);
      $n(n, t), (l = Ei(null, n, r, e, l, t));
      var o = Ci();
      return (
        (n.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((n.tag = 1),
            (n.memoizedState = null),
            (n.updateQueue = null),
            pe(r) ? ((o = !0), Vr(n)) : (o = !1),
            (n.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            yi(n),
            (l.updater = fl),
            (n.stateNode = l),
            (l._reactInternals = n),
            _o(n, r, e, t),
            (n = To(null, n, r, !0, o, t)))
          : ((n.tag = 0), U && o && ci(n), ie(null, n, l, t), (n = n.child)),
        n
      );
    case 16:
      r = n.elementType;
      e: {
        switch (
          (_r(e, n),
          (e = n.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (n.type = r),
          (l = n.tag = Od(r)),
          (e = _e(r, e)),
          l)
        ) {
          case 0:
            n = Ro(null, n, r, e, t);
            break e;
          case 1:
            n = Iu(null, n, r, e, t);
            break e;
          case 11:
            n = Tu(null, n, r, e, t);
            break e;
          case 14:
            n = Mu(null, n, r, _e(r.type, e), t);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return n;
    case 0:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : _e(r, l)),
        Ro(e, n, r, l, t)
      );
    case 1:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : _e(r, l)),
        Iu(e, n, r, l, t)
      );
    case 3:
      e: {
        if ((Va(n), e === null)) throw Error(y(387));
        (r = n.pendingProps),
          (o = n.memoizedState),
          (l = o.element),
          ha(e, n),
          Xr(n, r, null, t);
        var i = n.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (n.updateQueue.baseState = o),
            (n.memoizedState = o),
            n.flags & 256)
          ) {
            (l = ot(Error(y(423)), n)), (n = Ou(e, n, r, t, l));
            break e;
          } else if (r !== l) {
            (l = ot(Error(y(424)), n)), (n = Ou(e, n, r, t, l));
            break e;
          } else
            for (
              he = sn(n.stateNode.containerInfo.firstChild),
                ye = n,
                U = !0,
                Re = null,
                t = ma(n, null, r, t),
                n.child = t;
              t;

            )
              (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
        else {
          if ((tt(), r === l)) {
            n = Xe(e, n, t);
            break e;
          }
          ie(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return (
        ya(n),
        e === null && No(n),
        (r = n.type),
        (l = n.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        So(r, l) ? (i = null) : o !== null && So(r, o) && (n.flags |= 32),
        Qa(e, n),
        ie(e, n, i, t),
        n.child
      );
    case 6:
      return e === null && No(n), null;
    case 13:
      return Ka(e, n, t);
    case 4:
      return (
        gi(n, n.stateNode.containerInfo),
        (r = n.pendingProps),
        e === null ? (n.child = rt(n, null, r, t)) : ie(e, n, r, t),
        n.child
      );
    case 11:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : _e(r, l)),
        Tu(e, n, r, l, t)
      );
    case 7:
      return ie(e, n, n.pendingProps, t), n.child;
    case 8:
      return ie(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return ie(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (
          ((r = n.type._context),
          (l = n.pendingProps),
          (o = n.memoizedProps),
          (i = l.value),
          j(Yr, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Ie(o.value, i)) {
            if (o.children === l.children && !de.current) {
              n = Xe(e, n, t);
              break e;
            }
          } else
            for (o = n.child, o !== null && (o.return = n); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = Ke(-1, t & -t)), (s.tag = 2);
                      var f = o.updateQueue;
                      if (f !== null) {
                        f = f.shared;
                        var v = f.pending;
                        v === null
                          ? (s.next = s)
                          : ((s.next = v.next), (v.next = s)),
                          (f.pending = s);
                      }
                    }
                    (o.lanes |= t),
                      (s = o.alternate),
                      s !== null && (s.lanes |= t),
                      Po(o.return, t, n),
                      (u.lanes |= t);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === n.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(y(341));
                (i.lanes |= t),
                  (u = i.alternate),
                  u !== null && (u.lanes |= t),
                  Po(i, t, n),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === n) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ie(e, n, l.children, t), (n = n.child);
      }
      return n;
    case 9:
      return (
        (l = n.type),
        (r = n.pendingProps.children),
        $n(n, t),
        (l = Ae(l)),
        (r = r(l)),
        (n.flags |= 1),
        ie(e, n, r, t),
        n.child
      );
    case 14:
      return (
        (r = n.type),
        (l = _e(r, n.pendingProps)),
        (l = _e(r.type, l)),
        Mu(e, n, r, l, t)
      );
    case 15:
      return Ua(e, n, n.type, n.pendingProps, t);
    case 17:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : _e(r, l)),
        _r(e, n),
        (n.tag = 1),
        pe(r) ? ((e = !0), Vr(n)) : (e = !1),
        $n(n, t),
        Da(n, r, l),
        _o(n, r, l, t),
        To(null, n, r, !0, e, t)
      );
    case 19:
      return Wa(e, n, t);
    case 22:
      return Ha(e, n, t);
  }
  throw Error(y(156, n.tag));
};
function uc(e, n) {
  return Is(e, n);
}
function Id(e, n, t, r) {
  (this.tag = e),
    (this.key = t),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = n),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ce(e, n, t, r) {
  return new Id(e, n, t, r);
}
function Mi(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Od(e) {
  if (typeof e == "function") return Mi(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === qo)) return 11;
    if (e === bo) return 14;
  }
  return 2;
}
function dn(e, n) {
  var t = e.alternate;
  return (
    t === null
      ? ((t = Ce(e.tag, n, e.key, e.mode)),
        (t.elementType = e.elementType),
        (t.type = e.type),
        (t.stateNode = e.stateNode),
        (t.alternate = e),
        (e.alternate = t))
      : ((t.pendingProps = n),
        (t.type = e.type),
        (t.flags = 0),
        (t.subtreeFlags = 0),
        (t.deletions = null)),
    (t.flags = e.flags & 14680064),
    (t.childLanes = e.childLanes),
    (t.lanes = e.lanes),
    (t.child = e.child),
    (t.memoizedProps = e.memoizedProps),
    (t.memoizedState = e.memoizedState),
    (t.updateQueue = e.updateQueue),
    (n = e.dependencies),
    (t.dependencies =
      n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
    (t.sibling = e.sibling),
    (t.index = e.index),
    (t.ref = e.ref),
    t
  );
}
function Tr(e, n, t, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Mi(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case jn:
        return Nn(t.children, l, o, n);
      case $o:
        (i = 8), (l |= 8);
        break;
      case ql:
        return (
          (e = Ce(12, t, n, l | 2)), (e.elementType = ql), (e.lanes = o), e
        );
      case bl:
        return (e = Ce(13, t, n, l)), (e.elementType = bl), (e.lanes = o), e;
      case eo:
        return (e = Ce(19, t, n, l)), (e.elementType = eo), (e.lanes = o), e;
      case ys:
        return ml(t, l, o, n);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case vs:
              i = 10;
              break e;
            case hs:
              i = 9;
              break e;
            case qo:
              i = 11;
              break e;
            case bo:
              i = 14;
              break e;
            case qe:
              (i = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (n = Ce(i, t, n, l)), (n.elementType = e), (n.type = r), (n.lanes = o), n
  );
}
function Nn(e, n, t, r) {
  return (e = Ce(7, e, r, n)), (e.lanes = t), e;
}
function ml(e, n, t, r) {
  return (
    (e = Ce(22, e, r, n)),
    (e.elementType = ys),
    (e.lanes = t),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Yl(e, n, t) {
  return (e = Ce(6, e, null, n)), (e.lanes = t), e;
}
function Gl(e, n, t) {
  return (
    (n = Ce(4, e.children !== null ? e.children : [], e.key, n)),
    (n.lanes = t),
    (n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    n
  );
}
function jd(e, n, t, r, l) {
  (this.tag = n),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Pl(0)),
    (this.expirationTimes = Pl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Pl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Ii(e, n, t, r, l, o, i, u, s) {
  return (
    (e = new jd(e, n, t, u, s)),
    n === 1 ? ((n = 1), o === !0 && (n |= 8)) : (n = 0),
    (o = Ce(3, null, null, n)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: t,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    yi(o),
    e
  );
}
function Dd(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: On,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: n,
    implementation: t,
  };
}
function sc(e) {
  if (!e) return mn;
  e = e._reactInternals;
  e: {
    if (Mn(e) !== e || e.tag !== 1) throw Error(y(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (pe(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (pe(t)) return sa(e, t, n);
  }
  return n;
}
function ac(e, n, t, r, l, o, i, u, s) {
  return (
    (e = Ii(t, r, !0, e, l, o, i, u, s)),
    (e.context = sc(null)),
    (t = e.current),
    (r = ue()),
    (l = fn(t)),
    (o = Ke(r, l)),
    (o.callback = n ?? null),
    an(t, o, l),
    (e.current.lanes = l),
    qt(e, l, r),
    me(e, r),
    e
  );
}
function vl(e, n, t, r) {
  var l = n.current,
    o = ue(),
    i = fn(l);
  return (
    (t = sc(t)),
    n.context === null ? (n.context = t) : (n.pendingContext = t),
    (n = Ke(o, i)),
    (n.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (n.callback = r),
    (e = an(l, n, i)),
    e !== null && (Me(e, l, i, o), Nr(e, l, i)),
    i
  );
}
function tl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Wu(e, n) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function Oi(e, n) {
  Wu(e, n), (e = e.alternate) && Wu(e, n);
}
function Fd() {
  return null;
}
var cc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ji(e) {
  this._internalRoot = e;
}
hl.prototype.render = ji.prototype.render = function (e) {
  var n = this._internalRoot;
  if (n === null) throw Error(y(409));
  vl(e, n, null, null);
};
hl.prototype.unmount = ji.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    Rn(function () {
      vl(null, e, null, null);
    }),
      (n[Ye] = null);
  }
};
function hl(e) {
  this._internalRoot = e;
}
hl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var n = Hs();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < en.length && n !== 0 && n < en[t].priority; t++);
    en.splice(t, 0, e), t === 0 && Vs(e);
  }
};
function Di(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function yl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Yu() {}
function Bd(e, n, t, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var f = tl(i);
        o.call(f);
      };
    }
    var i = ac(n, r, e, 0, null, !1, !1, "", Yu);
    return (
      (e._reactRootContainer = i),
      (e[Ye] = i.current),
      Qt(e.nodeType === 8 ? e.parentNode : e),
      Rn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var f = tl(s);
      u.call(f);
    };
  }
  var s = Ii(e, 0, !1, null, null, !1, !1, "", Yu);
  return (
    (e._reactRootContainer = s),
    (e[Ye] = s.current),
    Qt(e.nodeType === 8 ? e.parentNode : e),
    Rn(function () {
      vl(n, s, t, r);
    }),
    s
  );
}
function gl(e, n, t, r, l) {
  var o = t._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = tl(i);
        u.call(s);
      };
    }
    vl(n, i, e, l);
  } else i = Bd(t, n, e, l, r);
  return tl(i);
}
Bs = function (e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = Ct(n.pendingLanes);
        t !== 0 &&
          (ti(n, t | 1), me(n, Y()), !(M & 6) && ((it = Y() + 500), yn()));
      }
      break;
    case 13:
      Rn(function () {
        var r = Ge(e, 1);
        if (r !== null) {
          var l = ue();
          Me(r, e, 1, l);
        }
      }),
        Oi(e, 1);
  }
};
ri = function (e) {
  if (e.tag === 13) {
    var n = Ge(e, 134217728);
    if (n !== null) {
      var t = ue();
      Me(n, e, 134217728, t);
    }
    Oi(e, 134217728);
  }
};
Us = function (e) {
  if (e.tag === 13) {
    var n = fn(e),
      t = Ge(e, n);
    if (t !== null) {
      var r = ue();
      Me(t, e, n, r);
    }
    Oi(e, n);
  }
};
Hs = function () {
  return I;
};
Qs = function (e, n) {
  var t = I;
  try {
    return (I = e), n();
  } finally {
    I = t;
  }
};
co = function (e, n, t) {
  switch (n) {
    case "input":
      if ((ro(e, t), (n = t.name), t.type === "radio" && n != null)) {
        for (t = e; t.parentNode; ) t = t.parentNode;
        for (
          t = t.querySelectorAll(
            "input[name=" + JSON.stringify("" + n) + '][type="radio"]'
          ),
            n = 0;
          n < t.length;
          n++
        ) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = sl(r);
            if (!l) throw Error(y(90));
            ws(r), ro(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ss(e, t);
      break;
    case "select":
      (n = t.value), n != null && Gn(e, !!t.multiple, n, !1);
  }
};
zs = Li;
_s = Rn;
var Ud = { usingClientEntryPoint: !1, Events: [er, Un, sl, Ns, Ps, Li] },
  wt = {
    findFiberByHostInstance: En,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Hd = {
    bundleType: wt.bundleType,
    version: wt.version,
    rendererPackageName: wt.rendererPackageName,
    rendererConfig: wt.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Je.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ts(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: wt.findFiberByHostInstance || Fd,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var kr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!kr.isDisabled && kr.supportsFiber)
    try {
      (ll = kr.inject(Hd)), (Fe = kr);
    } catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ud;
we.createPortal = function (e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Di(n)) throw Error(y(200));
  return Dd(e, n, null, t);
};
we.createRoot = function (e, n) {
  if (!Di(e)) throw Error(y(299));
  var t = !1,
    r = "",
    l = cc;
  return (
    n != null &&
      (n.unstable_strictMode === !0 && (t = !0),
      n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (n = Ii(e, 1, !1, null, null, t, !1, r, l)),
    (e[Ye] = n.current),
    Qt(e.nodeType === 8 ? e.parentNode : e),
    new ji(n)
  );
};
we.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return (e = Ts(n)), (e = e === null ? null : e.stateNode), e;
};
we.flushSync = function (e) {
  return Rn(e);
};
we.hydrate = function (e, n, t) {
  if (!yl(n)) throw Error(y(200));
  return gl(null, e, n, !0, t);
};
we.hydrateRoot = function (e, n, t) {
  if (!Di(e)) throw Error(y(405));
  var r = (t != null && t.hydratedSources) || null,
    l = !1,
    o = "",
    i = cc;
  if (
    (t != null &&
      (t.unstable_strictMode === !0 && (l = !0),
      t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (n = ac(n, null, e, 1, t ?? null, l, !1, o, i)),
    (e[Ye] = n.current),
    Qt(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (t = r[e]),
        (l = t._getVersion),
        (l = l(t._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [t, l])
          : n.mutableSourceEagerHydrationData.push(t, l);
  return new hl(n);
};
we.render = function (e, n, t) {
  if (!yl(n)) throw Error(y(200));
  return gl(null, e, n, !1, t);
};
we.unmountComponentAtNode = function (e) {
  if (!yl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Rn(function () {
        gl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ye] = null);
        });
      }),
      !0)
    : !1;
};
we.unstable_batchedUpdates = Li;
we.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
  if (!yl(t)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return gl(e, n, t, !1, r);
};
we.version = "18.3.1-next-f1338f8080-20240426";
function fc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fc);
    } catch (e) {
      console.error(e);
    }
}
fc(), (fs.exports = we);
var Qd = fs.exports,
  dc,
  Gu = Qd;
(dc = Gu.createRoot), Gu.hydrateRoot;
const Vd = "_title_172md_1",
  Kd = { title: Vd },
  bn = ({ text: e }) =>
    x.jsx("div", {
      className: Kd.title,
      children: x.jsx("p", { children: e }),
    }),
  Wd = "_container_1ripv_1",
  Yd = { container: Wd },
  Gd = () =>
    x.jsxs("div", {
      className: Yd.container,
      children: [
        x.jsx(bn, { text: "How to play" }),
        x.jsxs("p", {
          children: [
            "Not responsive.Not intended for mobile devices The game window requires a screen width of 1024px",
            " ",
          ],
        }),
        x.jsx("p", {
          children:
            "Enemies move in 3 lines. Enter the specified sequence of arrows to kill the enemy in the same line as you. You have 5 seconds to enter the information. After that, the sequence will change.",
        }),
        x.jsx("p", {
          children:
            "Gradually the number of keys will increase, and the time for enemies to appear will speed up.",
        }),
        x.jsx("p", {
          children:
            "You have 4 lives. For each enemy that reaches you, you lose 1",
        }),
        x.jsx(bn, { text: "Controls" }),
        x.jsx("p", { children: "z ,x ,c - change line" }),
        x.jsx("p", { children: "← ↑ → ↓ (alternative NumPad 4 8 6 5 ) " }),
        x.jsx(bn, { text: "Assets Credits" }),
        x.jsx("p", {
          children: '"Retro Inventory", ElvGames https://twitter.com/ElvGames',
        }),
        x.jsx("p", {
          children:
            "Tiny RPG - Dragon Regalia GUI by Gabriel 'tiopalada' Lima is marked with CC0 1.0",
        }),
        x.jsx("p", {
          children: "Background https://craftpix.net/file-licenses/",
        }),
        x.jsx("p", {
          children: "Font - Arcade Classic Regular (Jakob Fischer)",
        }),
      ],
    }),
  Xd = "_container_wsqde_9",
  Jd = "_lines_wsqde_53",
  Zd = "_score_wsqde_75",
  Xl = {
    container: Xd,
    "enemy-positions": "_enemy-positions_wsqde_25",
    "hero-position": "_hero-position_wsqde_41",
    lines: Jd,
    score: Zd,
  },
  $d = "_line_13m0b_1",
  qd = "_spot_13m0b_15",
  Xu = { line: $d, spot: qd },
  bd = "_image_7g7dt_1",
  ep = "_sprite_7g7dt_1",
  Jl = { image: bd, sprite: ep },
  np = () => {
    const e = F.useRef(null);
    return x.jsx("div", {
      className: Jl.position,
      style: { display: "flex" },
      children: x.jsx("div", {
        ref: e,
        className: Jl.image,
        style: { background: `url(${Jl}) 0 0 no-repeat` },
      }),
    });
  },
  tp = "_enemy_urzns_1",
  rp = "_image_urzns_17",
  Ju = { enemy: tp, image: rp },
  lp = "assets/Orc-Ri7cDm64.png",
  op = ({ val: e }) => {
    const [n, t] = F.useState(0);
    return (
      F.useEffect(() => {
        const r = setInterval(() => {
          t((l) => (l += 100) % 800);
        }, 100);
        return () => clearInterval(r);
      }, []),
      x.jsx("div", {
        className: Ju.enemy,
        style: { transform: `translate(-${e * 40}px , 0px)` },
        children: x.jsx("div", {
          className: Ju.image,
          style: {
            background: `url(${lp}) 0 0 no-repeat`,
            backgroundPosition: `-${n}px -100px `,
          },
        }),
      })
    );
  },
  ip = "_linebtn_1y8p6_1",
  Zu = { linebtn: ip, "linebtn-img": "_linebtn-img_1y8p6_19" },
  up = ({ text: e, action: n }) =>
    x.jsxs("button", {
      onClick: n,
      className: Zu.linebtn,
      children: [
        x.jsx("img", {
          className: Zu["linebtn-img"],
          src: "./assets/Btn.png",
          width: 45,
          height: 45,
          alt: "",
        }),
        x.jsx("div", {
          style: {
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2,
            fontSize: "24px",
            color: "rgb(247, 168, 0)",
          },
          children: x.jsx("label", { children: e }),
        }),
      ],
    }),
  sp = { 1: "Z", 2: "X", 3: "C" },
  Zl = ({ indx: e, enemies: n, activeLine: t }) => {
    const r = F.useRef(null);
    return x.jsxs("div", {
      className: Xu.line,
      children: [
        x.jsx("div", {
          ref: r,
          id: "spawn",
          style: {
            position: "absolute",
            width: "100%",
            display: "flex",
            gap: "1rem",
            right: "-115%",
          },
          children: n.map((l) => {
            if (l.value !== -1) return x.jsx(op, { val: l.value }, l.id);
          }),
        }),
        x.jsx("div", {
          className: Xu.spot,
          children:
            e === t
              ? x.jsx("div", {
                  style: {
                    width: "100px",
                    transform: "translate( -30px, -55px)",
                  },
                  children: x.jsx(np, {}),
                })
              : x.jsx(up, {
                  text: sp[e],
                  action: function () {
                    throw new Error("Function not implemented.");
                  },
                }),
        }),
      ],
    });
  };
function $e() {
  return Math.random().toString(16).slice(2);
}
function $u(e, n) {
  return Math.floor(Math.random() * (n - e + 1)) + e;
}
const ap =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAAwCAYAAAAvvfcmAAADLklEQVR4nO3dsWsUQRTH8dtgEEvhBAPa2kk4YgSx0VIQK8HaJiG1nYVYaZU6xMZaSGUESysRvBzBv8HANQFrSXAtVjIv7L7MzM6usy/5fqojmbn9NcN7zM7tFmVZjmIURRE1oSzLoou5XSF/u7ldIX+7uZqFmC8EMCwsYMCwSyGDZOn/8+Vx1AW6mpvSDpE/fS750zP0kZ8KDBjGAgYMU1torfTvfft68nlj85f3AnLu6tNP3vFbL642ztV28LTWgvz1ueSvs56fCgwYxgIGDCvkQY7YtmEtYA/73bH7HDtethN37t1vHF882G28Ud5H/sUbq97xRwfTk8/kr5zX/LF5+shPBQYMYwEDhgUd5NDanpXL/rlr4nPseHnd6Y77u9zN2zv0f2dK/sXrru0ZXxt7xx+O3PiNTdcOkb9iPb9sg2Pz9JGfCgwYxgIGDFNbaLnzFmLl5lLzP37O3Zj3HxuHzJ4/8X5/bJ6u8o+v+NueU+NFmzQ/aJ+H/P/yDCx/SBvc1fiQ/FRgwDAWMGCY2kKfvnHsP8OpUVvrnnWVPxfy52UlPxUYMIwFDBjW2S50kFfrrafGtjS95E9A/rzOa34qMGAYCxgwLOgs9HSn+akC8tyyemBDaZtnYvzst/u7/PmYvG5KS5OSf9d4/tHbrahrzfc/N163j/xLtx+1/k7Nf80/yZ+fCgwYxgIGDCu0V6vIpxNsP3N/nyy7pwSE/ExMHuQIaTvlUwg0ckdOPlFBIn/l9S1/myfbtlz5U9rRi5yfCgwYxgIGDFN3obW3qm2P5FMy4nZHY3dr93+4a61/kF/qrqW9XJH8ZwvZ7cyVP6QdJX+FCgwYxgIGDAs6yKG1E5NlV+5D2rmUtjPl7XIXOb/8MWdK25Ytv2hHyV9HBQYMYwEDhqkHOdQJooX4/qb5prO80SzbiZCznXdfuhYipe3RkL9C/naGlp8KDBjGAgYMS2qhtTe4SbKdCBmz8FDeZO+3BSJ/fQz5zza0/FRgwDAWMGBYZy20FPL0A/WFxZlaIIn8FfLXDS0/FRgwjAUMGBZ0FjqEvGEdpvkGdy7kz4v87VCBAcNYwIBhfwEevKNCtiEc1QAAAABJRU5ErkJggg==",
  cp = "_player_16fhu_1",
  qu = {
    player: cp,
    "player-text": "_player-text_16fhu_19",
    "player-bar": "_player-bar_16fhu_27",
  },
  fp = { 0: "-192px", 1: "-144px", 2: "-96px", 3: "-48px", 4: "0" },
  dp = ({ value: e }) =>
    x.jsx("div", {
      className: qu.player,
      children: x.jsx("div", {
        className: qu["player-bar"],
        style: { background: `url(${ap}) ${fp[e]} 0 no-repeat` },
      }),
    }),
  pp = "_btn_70kh3_1",
  mp = { btn: pp },
  vp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAAAaCAYAAABreghKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAC4SURBVGhD7doxCoNQEEXRMQuwEpJUgmCfLWTl2UL6gJAqCVi5AeXLfCPoAsbHPY2ftJdXZQrbcana0Z8I6Nu/Nt1O/sXBLWXXK2xud38hou758Nd/nSxSRJGXyAqPKa+TRYogpAhCiiCkCEKKIKQIQoogpAhCiiCkCEKKIKQIQoogpAhCilj+jyzP9fxDUl0bfyGi/tP5y2z4vecvixSxe7OzXifiyStMuNkRs7mPTLhrjY27VllmE4HeIc+PaappAAAAAElFTkSuQmCC",
  pc = ({ text: e, action: n }) =>
    x.jsx("button", {
      onClick: n,
      className: mp.btn,
      style: { background: `url(${vp}) no-repeat`, backgroundSize: "cover" },
      children: e,
    }),
  hp = "_container_eakyf_1",
  yp = { container: hp },
  mc = ({ children: e }) =>
    x.jsx("div", { className: yp.container, children: e }),
  gp = "_container_eakyf_1",
  wp = { container: gp },
  kp = ({ score: e, reset: n }) =>
    x.jsxs(mc, {
      children: [
        x.jsx("div", {}),
        x.jsx(bn, { text: `SCORE: ${e}` }),
        x.jsx("div", {
          className: wp.actions,
          children: x.jsx(pc, { text: "Restart", action: n }),
        }),
      ],
    }),
  Sp = ({ start: e }) =>
    x.jsx(mc, { children: x.jsx(pc, { text: "Start", action: e }) }),
  Ep = "_actionSeq_469cj_1",
  Cp = "_timer_469cj_33",
  kt = {
    actionSeq: Ep,
    timer: Cp,
    "timer-text": "_timer-text_469cj_57",
    "success-mark": "_success-mark_469cj_69",
  },
  xp = "./assets/Arrow-g9hImIbm.png",
  Ap = {
    1: "rotate(180deg)",
    2: "rotate(0)",
    3: "rotate(-90deg)",
    4: "rotate(90deg)",
  },
  Np = ({ dir: e }) =>
    x.jsx("div", {
      style: {
        background: `url(${xp}) 0 0 no-repeat `,
        backgroundSize: "contain",
        width: "60px",
        height: "60px",
        transform: Ap[e],
      },
    }),
  Pp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAB2CAYAAAAnfk0OAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAttSURBVHhe7d3PbxTnHcfxByOaIANOZBEkO1WgudTigGRQqnKIlAoF5UBPyY2gRPwDHLjSQznkkkNOuaFGQE/kVA6IqFKkHFwpwpY4IPeSulEDEqFWYn4IEorpvB/2M3x3PLu2aKLuzHxekjO7s7teI+Xznef5PrOzm5KZtcLkzrce925mB2cPpouXTw3NuAuAWYMp9Kf3TaWjs/9Kzx27mR7Oj6fVa9vS+YVfplNXb+TnLd+6VJt1FwCzhqmGfmzv3bRl/738WNUPZ3flrYpBtRC4AJg1BMGvCz1H/DqxKFRHBSoELgBmIywe7XHs3cV09txMvh1RFIahYKBaBFwAzEYU4V96/1EO7PGPruSjOOEnvDT45hbmysJQh6LAa1UcuA29Hi4AZiOI8H/94UoOfF34QYdf04JIUwTEaYKO/nimEYDeTC/u7Tazn5BypiM3nX2aeTG8UPC5r1xWi4HoNRGFZKx3O+ONPz50PP9wO/6w78bnT3/JkcOn89xEj7HND5jZhsR8KT9sFf5Df9lbG/5BIVc+eU78gV5D6PWD8iiuN6bJwLDhzIkDeT9/iNYWNQSR+HxMvTHlkYHZBpA3Aku4yRd5I1vVTCl34HGFfL08xqJRnULEjJY3OIoT9h0HJtI7s0vp/IOH+ZdUlxviPILn7/nT5kSjgn8EKAJmtj5yo/ywBSHWQVdFQRR+cqnXxSzWZZXfc/T5LenCwp50+8pKfv6lzbvLMwTXFoDV11N67Wq6e//6mqZB/ON4g1dOTuTHwB+nfZ++uT3tn/6+94iZ1YnhZ6t9Efvnr7+Q3v7sTqIpSMDjQVb7dMRXTqGisG3rdEpf7ku3x74YXADi3IOAa2jCmxFo4Q/RH81+3eeNquFXJxKxMoH73NZ+s67R//8xE9B9cBBGLALsq+ZP94X9cYoRCwTz/6EFAHE4QRHgMV4cw65Ko2GK7pvZz6OaNe7HoqCcxl6Bisi6BUDhVrMg/uJXJ3+dn/fV8t/zVvfN7P+rmknuVw/UNAeV5YEFQFWD5sPMrjt5GCF7Znb2bpnZKFtavNW7lfK0YPHm9rwSAEbzsQCU5wFQJTT3iMMMqorDb9Yc5JXcxmkCyLf2Sa4COvpz5GeowBRAIwB+0epLy/nJuH/vu94tMxslW8df7N0qjuzfTuapgEYAyjUjAUYBOhcg/4clQLZUCuYOYK6g7qJGAA6/2WhTEWAaoPzGTGsEoKXAPAUg+Bom0Clk2UBNBDNrJvJLjskzuUbMOnIBYDigc4PBXIFqQQfR3X6z5iG35Jccx/MKyHnMep4CiM4G5EWaO3zyzY6yB+ApgNlo0xSAHsB7L98ue3mMBKpnAaJcBaARSKOA8CMuAZpZMynH5Jp8cxGRqG8ZkDP/1DBgG+cKZtYs5DfmmXyTc32UH2UBUNhpGLAk6AagWfORY/JMrlE9qJcFgEagPmVE0yCe629mzUN+ybGagDoLMOprAoJeAFs3Ac2aZ1ATEBQERgDxgiDlCCAi/P48v1nzKceEnybgwB5A5PCbtQPdf0LPKcA0AfVxf6ktAHAT0KzZGO4r/NBFQaKBBcDMmk3DfsQrAkUuAGYtxCcBCT/D/urlwKKBBUCXAzOzZuGTgBz9URf+2lOBzaw91OyrDvtj+DGwAMRPEJlZsxB8rgFI+HU6cB2PAMxahgv4EHyKABf2HcY9ALMW4noAFIH1cuwpgFkLsQpAI3C9HHsEYNYyWgX4n0YAZtZcrALoSt+6yE8dFwCzFqIByPCf04B1TkAdFwCzltEqAN8DwIlA+hRg9XJgcAEwayGtAuh8gLqPAsMFwKyFtArAFIAeAKOB6keB4QJg1jL6ViDRBX4ZDVS5AJi1UF3Y+U6AKhcAs5ZRE7DOhj8MZGbNtdGv9HMBMOuAcNj3CMDMnnABMOswFwCzDnMBMOswFwCzDnMBMOswFwCzDnMBMOswFwCzDnMBMOswFwCzDnMBMOswFwCzDnMBMOswFwCzDnMBMOswFwCzDnMBMOswFwCzDnMBMOswFwCzDnMBMOuwdQsA3zFmZu20bgHgCwb5rjEza5++AvDxoeN9Xx2Mum8UNbN26CsAhJ0jPl8nLNzmu8bMrH36CgDfKEoRuPH5jXTmxIH8BYMb/Y4xM2uevgKg7xD/4eyudPyjK3k04CagWXv1FYDlW5c2xSJw7N1FNwHNWqyvAIiKwOq1bW4CmrVYbQFYev9RngLQAKQQmFk71RYAPJwfz8N/RgNeBTBrJnI8zMACsGX/Pa8CmDUcOR5m3RGAVwHMmuuZRwCvnJwoTwzyKoBZO9UWAJp/nAw0tveuVwHMGuyZpgAc9TV08CqAWXv1FYDJnW89JvwsAVI5OA/AqwBmzbXhHkAMPzgTkKO/VwHM2qssAISfU3+h8HP0N7P2KgsAzT6G/TH8FAUzay6m8cOUBYDQx/BzOrCZNd/89RfSmiv99JQFgNDHYT8vMrNmI8dvf3and2+tsgDoo8Cs/3/94crQF5lZM5DjfxZ5Jtd/W5jr7X1qU2+bVwF4krB8wNmArAKsvrSc992/913emtlo2jr+Yt6OfTuZT+Mn/L8IJwNNvzGV/n3rEgf+PCsoRwBq+NEHmCqetF7zwMxGHzkm9A+KXOOPRc6PHD69WtzMB/++HgBHfV0QlK1XAcyai/z+qsgxh3q2Pxb5/kOvxyd9PYCz52bK7v+nb27PWzNrLuX4H0WuzxX5/u3swXxfygIArQSoCagVATNrHvKrJuCfwwrfxcun+nsANAD54TY4IYiRAE1BXw/ArHnUACTHsQk4tzBH3vt7AMwVNN/njEAagfQA2JpZM9EAZO5PA5Bck3hlvdcIfFIAGBroEuBcA4BpAHMHikD8MJCWGMxs9MR8klvCf6HIMcN/cs0KAB/2i43A8jwAvheQIsDwn2VACsDize3pk292lOcBmFkzcB7Aey/fTjO77uQ+wPViOv+f+fFEo//S5t35ORcvn9pUNgEZBejqIZoOsI+5hC8JZtYc5JXcqulHnjnSk28d/XuNwKcjAJqANAwYKlAleLHODGREoKmAmoK+ToDZaKhmkvss+20usrz75EQe+jO6V0+ApUCtBPQVACqFrgH43LGbeatTgnmMokCR4DGKQhwpQPfN7OdRzRr36fY/7oWbsLOPIT/hJr86q1cf9ju4XgEg4KwAMBog/PGkIOYTFAEahOzXfRUF9u2f/j4/l9eLphe6RBH3ua39Zl2j//9jJqD7UHj1qb4Ydhp87ONo/2rvvmje/2ORY+V5aAGgCUj4d6y+ntJrV9Pd+9fzm/Mi8MJYIPgjKQ4SpwsqAjqtWCgUYL+KiPaZWb0Yftb0ObdfJ+1oXwy4RgdklYPw9q3T6fGX+9LK2Bd5RYAm4OACcGAivTO7lM4/eFiOAmJlikWB5yvEdUWBP0RzD/1xiOGvFgkzq6dhPblkBPBVkR8CDYW9mlVyefT5LenCwp60cuXJGYG1BUBTAC0FnjlxIO+PR3w1B0XPF/UKoIuLIr6Wx3mMfwS/lxEDQxIzG46z+OLcflAeya9GBCBv8fm1UwCoCCD+YuiXxyBDt+M+VaPfffCb9NffXyuP/rwx/4hI4S/+oL6/xczWKjK6WuQsX7xH2SFTZI+gc+DmsShmNeTtSQEg9HlPoBdUKeTaah90X+FX8yKGHwT9yOHTfe/p8JttXPw8P0EuMvyoyF9fURhG4ed2LgDV8GoeIXE4IdU3UxXSlICRAreZFsTw5xtm9pOqFoVis+bAXicfjRVeUARA4LldDX5EEeA6AioiMfy8lgafw282usrw6ugPDd8HqSsK6g9A0wKH32y09Y0ABk0BhtFyQ3WuLw6/2egqw1lXCIapru3H4Dv0Zs2wJqgqBKibGgwKPRx8s2YZGFgKAVsVA3Hozdoipf8CI71QDIjqICkAAAAASUVORK5CYII=",
  zp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABICAYAAABP0VPJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAfxSURBVHhe7ZxPbFRVGMUvUME/JWCk0JYWgy6QkNqk6IJGFyYGZaFujIlRSQwrgwsXbFyQYIhxYwwLdacEaly5w4g0MY2bxog0sjBEY2JQKRRoFKFSrG3ldzvn8c3tfdP586Z03niSyby+d99933fe+c69M/Nul7nbgPvads2effeKu2P7hBt+Z4t7fvCq+2znatf/5o/++NSpe9zJwS6/f/zS8UWN8bYQAiBldGjUb3c+0enfRYpI6u/r9/uPndi/aHEuL7zXFSRf2PQI/4aINEBG2L6eqDshJEPCvPMaeukF/7dAeahUhDNjqz1JwyPDRecXDtcVmUoxLWiVBsnjG4CyUHnoHbBNCXGOba+yAviKrpW1x2SiEN35X16d9nf2YO+t4AHJkPDMD63J3zFABiQItOe8sP2HT+7xquF6XDdL9dTMLsEQnGRPQiRy6tza6D7KYf/pUccoA+7ft8ZvM6pIKRgqpG7dcNVt3/inW7V7zLelH9qxb/m2a0Vqy2pEqrmDa0f6ZwmMYEnOAqII3hIhUBJKREMw+OiNR4raWWLoh/YWOpfrv/jprppHpJpKBnUoEZUDMtY7JGw+vMInoSQhKcTRga2FLefbtW9qSV78zfn0Q3+2f6DrEgcmXCuqIkSewfaNoxv83UHWJCt5k8AHf1wsSg48uvP3IlJITGTRTwh7Pv3RL7DX4zziALV6SsWEyDNIDLkiY0BQ7EPyQASE4E7KW2gvUD4g7TxBx7kO54tE4iAeEV4tKRXVmyVDwDe4y9YnSiV14dd/E4VQCmxDkEaShQgR6Mf6C8qBEKHaqX/ZjUVGOHJ8MtKdSL7cZCxEEMFXez6AnJf7fqt59Cmr4UJkVJOIBUll0UcWpMw5VAnYMlnROeXJYFR47ssJd2bVdde6pva5XVZ9nJyccG9/fTPmsQdcT9sVH2/73ZPuMdfmPr+w6cD1v39+q9A8FSVZi3kGZGShinpCatn9ypnCnvI9peRBhjBLBmWCeS1lMgRIwewpHwFS3rvcU3LylqpV1IF7C/KMRiADECfxauIGyGehyVuUEJWK2A1Hk0YB8VpSyIe8yM/viCBKCCdZdWQ1miw2iFekCORFfs88dTBKyrxagj1qT1NwpsSN4htpkJ+EOcUMdp5CYE8nMsTCbiOTAeQnmubrc1BMJUWExIy00XwjDeRRjsEWEQJrMlJklQd1CFKJPhXLYEOVJIRIHZrygryoQ7D5kGdMJdFRBuRJHYJUEsKqJCEkNNO8qUMgr9BcLTwh4UTFmk8eEeZnyyZRiB1dYrLKE2x+yltlkxCi0UVyypt/CMpLeSpvwROiOlKjvPqHoPyUr/WR5aU+6DQT5CNeIdY/8m6oQjhrBfhI4iH/Yw6eEIzFzlCbCeRtjdUTIjKajZRY3p4QuW2zwubvCWkWI02DzT8x1WZVSZi3J8ROZcOZW15h8yzK336v2GwqsfnqEVCvkHCqHn4kzhvC/JQ/P2AlHhIaK99U5xFhXmHeCSGqI8ZkO5XPI8hPc4/wqw5PiHxEjfJurMpP+co/QKIQ6kjfSIO8+ojNi3ytf/CeECLIeZFV3nyEfGQHaSNqQghlY30E5E0lysf6hy0XUKQQ5CPX5RvpPKlE6tAvC+QZlgsoIkQqsXLKi0psHuQXUweY5yF5VEm56gDzCJFKwt9AG5UU4iZ+DbX6zTqmDjCPEAB7Kh0MCHYbkRSRQfzkoVJJUweIEoJKYqVj67ARIDLCUklTB4gSAkKDRXJ03igqIU7iVamERhpTByj54O43V9sP6CFYsGz9P/4h2I9HJjN52LZeUKl07bjs/545vzJ5vra7ozuVDFAyK5WOXc+i1QZLVSkiI/awcalSEVKZsuDXvfDJYOpRK5yWwu/AIsKWCQjJKKUOUBYhwJIix4YULeixqJQgqa3a8yzskrNKyQBlG4EtHy7GOhkUwto5Xjz2CGGVgqQ4j1cswYXAeVxbcfD4NmtvqiEDLLgawoLVBDLavb1zy0qBJjsEAMo1XJGB6np7L/tVDMd+ulLW+ZxLibw2PO7WzXa5bRenXUvvhOt+fNztON/p91dKBqh4qJBSZFqoBaWwD7lyt95/6K7kbvOeduchgxVRSJwX2+yLQf3won+uQwyogmsTA7EAa6iVkAEqJkTAP+QjLC1T7TIJUkB7713v9xM025YYtq1JC+wL23EufdAXhGHkXEdeATnEYGOqFlURokkbUKkoGNUvwe859J0PGrBtiSExjjEqCGyzj2OWCM4FHGObvlmEyLW4rmKwMZUzxMZQkYdYyEuQeU/rOr/C6tDgnT4ZlnnNXlrpZm/eaFY1CRAmr0AJHLNttM1EUG2YVIV9QMLDHX957+C6Q2O3VoJ/NbzRk7PQBCwNFZ9gEQ7FQAHrrgkKWIpgrkA7fc4QMGgdA3a1pyDSaWevW+3IYlG1QoBGHZSx9vst3ukHTjyY3DWBBJA6I8D06TmyelomfbLss/j2iy7XMTnj26CCza+fdX1Pj/r+1eeNjT1u3/FzXkVc88jhre7ZgSl/vBYyQE0KEXgUyT7raeuX/ZgeSuAu6v8DSDEYsL3LzCOsImTWKIdJoE3YPh9nr1ktGSATQgT7iLSCsmUFGQQu8sLPHECLBZUgbSHFloNNOHbNWpApIWkISWGUkqpQjz574BtWBTEyQBaJp2FRCAH2TgIlZctNCQN73O8ooJ5kLCmQeJj84sO5/wDpU+vhuYG+4gAAAABJRU5ErkJggg==",
  _p = ({ timer: e, actionsOrder: n, currentPos: t }) =>
    x.jsxs("div", {
      className: kt.actionSeq,
      style: { background: `url(${Pp})  no-repeat `, backgroundSize: "cover" },
      children: [
        x.jsx("div", {
          className: kt.timer,
          style: {
            background: `url(${zp})  no-repeat`,
            backgroundSize: "cover",
          },
          children: x.jsx("div", {
            className: kt["timer-text"],
            children: (e / 1e3).toFixed(1),
          }),
        }),
        n.map((r, l) =>
          x.jsx(
            "div",
            {
              className: kt.arrow,
              children:
                t[0] > l
                  ? x.jsx("div", {
                      className: kt["success-mark"],
                      children: x.jsx("img", {
                        src: "./assets/accept_icon.png",
                        height: 40,
                        width: 40,
                        alt: "",
                      }),
                    })
                  : t[1] === 0
                  ? x.jsx(Np, { dir: r })
                  : "fail",
            },
            l
          )
        ),
      ],
    }),
  Lp = "./assets/Battleground1-CVWf9HM4.png",
  Rp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAgCAYAAADtwH1UAAAAAXNSR0IArs4c6QAAAtlJREFUaIHtmrFr1FAcxz9nC1bhhJrGWgSRIh4cdjno4IGDk9zgcr2ho4s49C8QOVCk9C/oIF06dohdbii3dbpFuMHikHIWHCRDey10sC0KcThefMm9JM3zoHh5H8hwubxc8vkmv/eSd2AwGAxXRkG3oWXX/FEeyP9O/3BHy+WkTiPLrvnr3TWdpmPLSgVfJ4TMDSy75r98+4rphZmsTceak70jNlc3Mt8JmTaOyj/ZO8rSfGyRfWQN4dIbquQvLs1nPdax5POnA+0QUjey7FpQ21Qh5L0UyQ6E/GqlCkCn20kN4lrSl6KzffH8gw+Dnn5zdWM0Rz6GyPJb7WZhvbuWOlqMDUDI7+2f0ul2Qt+J2p/3qx9Q9oetdrNg2TW/t39KWgjK20OWD/Dw0S1WKm8AECXIlJ+/CBeiBAGo/KnK0dCKqHwjWh/ZXVwIoRKkkr+4ND803JQ/53komuQh6i6uHAUBxMnv7Z8GOxJLdCiaxxCi5y5KkFii7kAdwgQM5C836vyaLYZ2LsI47l9wY/ZmsAB4jov97D63revcK0/z9eMXiuV8lCrPcXny+jEAZ5MTeI5LsTwTcnTcvwAG7hae3uXb7o9g/QPucPD997uzn733QT0SIcw1SsBw7ZevcpH2udtnrlHCc1ymSlZu+oq4c486krcXnz3HZcvZDoaroQ4hLgRVGHIIeZIviJ57kqM4+a12s6AcBSXdCaoDyZt8QRY3KvmQ8BwghyAaA4j1eRYfRbhQeYJ4+RDzJNw/3ClsOdt4jgsQNK5WqsEPRGteXpEvRJWnJPmQMCEzCAF/mXqosZkJS0dI9py6nyQfLvk2tFqpBvLlW8sQRlzt8tvjJPmQ8jYUCO0s2jkbBggXc40Sy4168KAl3MXJB40ZMRPCMGkjnSS05oRNGRpGRz5o/i1FhDBVsnSajx3nbl9LPpj/BY0MHfnwDwEAwVSlYUBW+QaDwXDF/AGNgSN43wFSFwAAAABJRU5ErkJggg==",
  Tp = 3,
  Mp = 50,
  Ip = 6,
  Op = 30,
  jp = 50,
  bu = { hp: 4, activeLine: 2, timer: 5e3, points: 0 },
  Dp = () => {
    const [e, n] = F.useState(bu),
      [t, r] = F.useState({
        1: [{ id: $e(), value: 1 }],
        2: [{ id: $e(), value: 1 }],
        3: [{ id: $e(), value: 1 }],
      }),
      [l, o] = F.useState(3e3),
      [i, u] = F.useState(e.timer),
      [s, f] = F.useState([]),
      [v, m] = F.useState([0, 0]),
      [p, S] = F.useState(0),
      w = F.useCallback(() => {
        const g = Math.min(Ip, Tp + Math.floor(e.points / 1e3)),
          k = [];
        for (let E = 0; E < g; E++) k.push($u(1, 4));
        f(k);
      }, [e.points]);
    function C(g) {
      let k = 0;
      const E = [];
      return (
        g.forEach((T) => {
          T.value < Op ? E.push({ ...T, value: ++T.value }) : k++;
        }),
        n((T) => ({ ...T, hp: T.hp - k })),
        E
      );
    }
    const O = () => {
        r((g) => {
          var z;
          const k = $u(1, 3),
            E = [...g[k]];
          return (
            E.push({
              id: $e(),
              value:
                Math.min(0, ((z = E.at(-1)) == null ? void 0 : z.value) ?? 0) -
                1,
            }),
            { ...g, [k]: E }
          );
        });
      },
      c = F.useCallback(() => {
        r((g) => ({ 1: C(g[1]), 2: C(g[2]), 3: C(g[3]) }));
      }, []),
      a = F.useCallback((g) => {
        n((k) => ({ ...k, activeLine: g }));
      }, []),
      d = F.useCallback(() => {
        let g = 0;
        r((k) => {
          var z;
          const E = { ...k },
            T = E[e.activeLine];
          return (
            E[e.activeLine].length > 0 &&
              (T.shift(),
              T.push({
                id: $e(),
                value:
                  Math.min(
                    0,
                    ((z = T.at(-1)) == null ? void 0 : z.value) ?? 0
                  ) - 1,
              }),
              g++),
            E
          );
        }),
          n((k) => ({ ...k, points: e.points + g * jp })),
          o((k) => Math.max(1e3, k - Mp * g));
      }, [e.activeLine, e.points]);
    F.useEffect(() => {
      p === 1 && (i > 0 || (c(), m([0, 0]), w(), u(e.timer)));
    }, [w, c, e.timer, p, i]),
      F.useEffect(() => {
        e.hp === 0 && S(2);
      }, [e.hp]),
      F.useEffect(() => {
        if (p !== 1) return;
        const g = setInterval(() => {
          u((k) => (k -= 100));
        }, 100);
        return () => {
          clearInterval(g);
        };
      }, [p]),
      F.useEffect(() => {
        if (p !== 1) return;
        const g = setInterval(() => {
          O(), c();
        }, l);
        return () => clearInterval(g);
      }, [c, l, p]),
      F.useEffect(() => {
        function g(k) {
          if (p !== 1) return;
          const E = {
            ArrowLeft: 1,
            ArrowRight: 2,
            ArrowUp: 3,
            ArrowDown: 4,
            4: 1,
            6: 2,
            8: 3,
            2: 4,
            5: 4,
          }[k.key];
          if (!E) return;
          s[v[0]] === E
            ? v[0] + 1 === s.length
              ? (w(), m([0, 0]), u(e.timer), c(), d())
              : m((z) => [z[0] + 1, 0])
            : (w(), m([0, 0]), O(), u(e.timer), c());
        }
        return (
          document.body.addEventListener("keydown", g),
          () => document.body.removeEventListener("keydown", g)
        );
      }, [s, v, w, c, d, e.timer, p]),
      F.useEffect(() => {
        const g = (k) => {
          const E = { z: 1, x: 2, c: 3 }[k.key];
          E && e.activeLine != E && a(E);
        };
        return (
          document.body.addEventListener("keydown", g),
          () => document.body.removeEventListener("keydown", g)
        );
      }, [a, e.activeLine]);
    const h = () => {
      S(1), c();
    };
    F.useEffect(() => {
      p === 1 && w();
    }, [w, p]);
    const A = () => {
      u(5e3),
        n(bu),
        r({
          1: [{ id: $e(), value: 0 }],
          2: [{ id: $e(), value: 0 }],
          3: [{ id: $e(), value: 0 }],
        }),
        S(1);
    };
    return x.jsxs("div", {
      className: Xl.container,
      style: { background: `url(${Lp}) `, backgroundSize: "contain" },
      children: [
        p === 2 && x.jsx(kp, { score: e.points, reset: A }),
        p === 0 && x.jsx(Sp, { start: h }),
        x.jsx(dp, { value: e.hp }),
        x.jsx("div", {
          className: Xl.score,
          style: {
            background: `url(${Rp}) no-repeat;`,
            backgroundSize: "cover",
          },
          children: x.jsx(bn, { text: `SCORE: ${e.points}` }),
        }),
        p === 1 && x.jsx(_p, { timer: i, actionsOrder: s, currentPos: v }),
        x.jsxs("div", {
          className: Xl.lines,
          children: [
            x.jsx(Zl, { indx: 1, activeLine: e.activeLine, enemies: t[1] }),
            x.jsx(Zl, { indx: 2, activeLine: e.activeLine, enemies: t[2] }),
            x.jsx(Zl, { indx: 3, activeLine: e.activeLine, enemies: t[3] }),
          ],
        }),
      ],
    });
  };
function Fp() {
  return x.jsxs(x.Fragment, {
    children: [
      x.jsx(bn, { text: "Arrows master" }),
      x.jsx(Dp, {}),
      x.jsx(Gd, {}),
    ],
  });
}
dc(document.getElementById("root")).render(
  x.jsx(F.StrictMode, { children: x.jsx(Fp, {}) })
);
