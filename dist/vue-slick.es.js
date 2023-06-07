import { defineComponent as Fn, ref as Bn, onMounted as Un, openBlock as Vn, createElementBlock as Xn, renderSlot as Yn, normalizeClass as Gn } from "vue";
var Kn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Qn(J) {
  return J && J.__esModule && Object.prototype.hasOwnProperty.call(J, "default") ? J.default : J;
}
var Ut = { exports: {} };
/*!
 * jQuery JavaScript Library v3.7.0
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-05-11T18:29Z
 */
var Hi;
function ji() {
  return Hi || (Hi = 1, function(J) {
    (function(R, C) {
      J.exports = R.document ? C(R, !0) : function(x) {
        if (!x.document)
          throw new Error("jQuery requires a window with a document");
        return C(x);
      };
    })(typeof window < "u" ? window : Kn, function(R, C) {
      var x = [], i = Object.getPrototypeOf, o = x.slice, c = x.flat ? function(e) {
        return x.flat.call(e);
      } : function(e) {
        return x.concat.apply([], e);
      }, p = x.push, g = x.indexOf, E = {}, _ = E.toString, V = E.hasOwnProperty, $ = V.toString, se = $.call(Object), q = {}, L = function(t) {
        return typeof t == "function" && typeof t.nodeType != "number" && typeof t.item != "function";
      }, he = function(t) {
        return t != null && t === t.window;
      }, I = R.document, st = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
      };
      function Me(e, t, n) {
        n = n || I;
        var r, a, l = n.createElement("script");
        if (l.text = e, t)
          for (r in st)
            a = t[r] || t.getAttribute && t.getAttribute(r), a && l.setAttribute(r, a);
        n.head.appendChild(l).parentNode.removeChild(l);
      }
      function qe(e) {
        return e == null ? e + "" : typeof e == "object" || typeof e == "function" ? E[_.call(e)] || "object" : typeof e;
      }
      var Vt = "3.7.0", Pi = /HTML$/i, s = function(e, t) {
        return new s.fn.init(e, t);
      };
      s.fn = s.prototype = {
        // The current version of jQuery being used
        jquery: Vt,
        constructor: s,
        // The default length of a jQuery object is 0
        length: 0,
        toArray: function() {
          return o.call(this);
        },
        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function(e) {
          return e == null ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function(e) {
          var t = s.merge(this.constructor(), e);
          return t.prevObject = this, t;
        },
        // Execute a callback for every element in the matched set.
        each: function(e) {
          return s.each(this, e);
        },
        map: function(e) {
          return this.pushStack(s.map(this, function(t, n) {
            return e.call(t, n, t);
          }));
        },
        slice: function() {
          return this.pushStack(o.apply(this, arguments));
        },
        first: function() {
          return this.eq(0);
        },
        last: function() {
          return this.eq(-1);
        },
        even: function() {
          return this.pushStack(s.grep(this, function(e, t) {
            return (t + 1) % 2;
          }));
        },
        odd: function() {
          return this.pushStack(s.grep(this, function(e, t) {
            return t % 2;
          }));
        },
        eq: function(e) {
          var t = this.length, n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function() {
          return this.prevObject || this.constructor();
        },
        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push: p,
        sort: x.sort,
        splice: x.splice
      }, s.extend = s.fn.extend = function() {
        var e, t, n, r, a, l, u = arguments[0] || {}, h = 1, d = arguments.length, v = !1;
        for (typeof u == "boolean" && (v = u, u = arguments[h] || {}, h++), typeof u != "object" && !L(u) && (u = {}), h === d && (u = this, h--); h < d; h++)
          if ((e = arguments[h]) != null)
            for (t in e)
              r = e[t], !(t === "__proto__" || u === r) && (v && r && (s.isPlainObject(r) || (a = Array.isArray(r))) ? (n = u[t], a && !Array.isArray(n) ? l = [] : !a && !s.isPlainObject(n) ? l = {} : l = n, a = !1, u[t] = s.extend(v, l, r)) : r !== void 0 && (u[t] = r));
        return u;
      }, s.extend({
        // Unique for each copy of jQuery on the page
        expando: "jQuery" + (Vt + Math.random()).replace(/\D/g, ""),
        // Assume jQuery is ready without the ready module
        isReady: !0,
        error: function(e) {
          throw new Error(e);
        },
        noop: function() {
        },
        isPlainObject: function(e) {
          var t, n;
          return !e || _.call(e) !== "[object Object]" ? !1 : (t = i(e), t ? (n = V.call(t, "constructor") && t.constructor, typeof n == "function" && $.call(n) === se) : !0);
        },
        isEmptyObject: function(e) {
          var t;
          for (t in e)
            return !1;
          return !0;
        },
        // Evaluates a script in a provided context; falls back to the global one
        // if not specified.
        globalEval: function(e, t, n) {
          Me(e, { nonce: t && t.nonce }, n);
        },
        each: function(e, t) {
          var n, r = 0;
          if (Tt(e))
            for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++)
              ;
          else
            for (r in e)
              if (t.call(e[r], r, e[r]) === !1)
                break;
          return e;
        },
        // Retrieve the text value of an array of DOM nodes
        text: function(e) {
          var t, n = "", r = 0, a = e.nodeType;
          if (a) {
            if (a === 1 || a === 9 || a === 11)
              return e.textContent;
            if (a === 3 || a === 4)
              return e.nodeValue;
          } else
            for (; t = e[r++]; )
              n += s.text(t);
          return n;
        },
        // results is for internal usage only
        makeArray: function(e, t) {
          var n = t || [];
          return e != null && (Tt(Object(e)) ? s.merge(
            n,
            typeof e == "string" ? [e] : e
          ) : p.call(n, e)), n;
        },
        inArray: function(e, t, n) {
          return t == null ? -1 : g.call(t, e, n);
        },
        isXMLDoc: function(e) {
          var t = e && e.namespaceURI, n = e && (e.ownerDocument || e).documentElement;
          return !Pi.test(t || n && n.nodeName || "HTML");
        },
        // Support: Android <=4.0 only, PhantomJS 1 only
        // push.apply(_, arraylike) throws on ancient WebKit
        merge: function(e, t) {
          for (var n = +t.length, r = 0, a = e.length; r < n; r++)
            e[a++] = t[r];
          return e.length = a, e;
        },
        grep: function(e, t, n) {
          for (var r, a = [], l = 0, u = e.length, h = !n; l < u; l++)
            r = !t(e[l], l), r !== h && a.push(e[l]);
          return a;
        },
        // arg is for internal usage only
        map: function(e, t, n) {
          var r, a, l = 0, u = [];
          if (Tt(e))
            for (r = e.length; l < r; l++)
              a = t(e[l], l, n), a != null && u.push(a);
          else
            for (l in e)
              a = t(e[l], l, n), a != null && u.push(a);
          return c(u);
        },
        // A global GUID counter for objects
        guid: 1,
        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support: q
      }), typeof Symbol == "function" && (s.fn[Symbol.iterator] = x[Symbol.iterator]), s.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
        function(e, t) {
          E["[object " + t + "]"] = t.toLowerCase();
        }
      );
      function Tt(e) {
        var t = !!e && "length" in e && e.length, n = qe(e);
        return L(e) || he(e) ? !1 : n === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in e;
      }
      function ee(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var Li = x.pop, Mi = x.sort, qi = x.splice, K = "[\\x20\\t\\r\\n\\f]", Ge = new RegExp(
        "^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$",
        "g"
      );
      s.contains = function(e, t) {
        var n = t && t.parentNode;
        return e === n || !!(n && n.nodeType === 1 && // Support: IE 9 - 11+
        // IE doesn't have `contains` on SVG.
        (e.contains ? e.contains(n) : e.compareDocumentPosition && e.compareDocumentPosition(n) & 16));
      };
      var Ii = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
      function zi(e, t) {
        return t ? e === "\0" ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
      }
      s.escapeSelector = function(e) {
        return (e + "").replace(Ii, zi);
      };
      var xe = I, wt = p;
      (function() {
        var e, t, n, r, a, l = wt, u, h, d, v, w, k = s.expando, b = 0, A = 0, z = ht(), Y = ht(), F = ht(), ne = ht(), ie = function(f, y) {
          return f === y && (a = !0), 0;
        }, be = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", Te = "(?:\\\\[\\da-fA-F]{1,6}" + K + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", X = "\\[" + K + "*(" + Te + ")(?:" + K + // Operator (capture 2)
        "*([*^$|!~]?=)" + K + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
        `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + Te + "))|)" + K + "*\\]", Pe = ":(" + Te + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + X + ")*)|.*)\\)|)", G = new RegExp(K + "+", "g"), te = new RegExp("^" + K + "*," + K + "*"), rt = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"), qt = new RegExp(K + "|>"), we = new RegExp(Pe), ot = new RegExp("^" + Te + "$"), Se = {
          ID: new RegExp("^#(" + Te + ")"),
          CLASS: new RegExp("^\\.(" + Te + ")"),
          TAG: new RegExp("^(" + Te + "|[*])"),
          ATTR: new RegExp("^" + X),
          PSEUDO: new RegExp("^" + Pe),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + be + ")$", "i"),
          // For use in libraries implementing .is()
          // We use this for POS matching in `select`
          needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
        }, De = /^(?:input|select|textarea|button)$/i, Oe = /^h\d$/i, ce = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, It = /[+~]/, Ee = new RegExp("\\\\[\\da-fA-F]{1,6}" + K + "?|\\\\([^\\r\\n\\f])", "g"), $e = function(f, y) {
          var m = "0x" + f.slice(1) - 65536;
          return y || (m < 0 ? String.fromCharCode(m + 65536) : String.fromCharCode(m >> 10 | 55296, m & 1023 | 56320));
        }, Ln = function() {
          Ne();
        }, Mn = vt(
          function(f) {
            return f.disabled === !0 && ee(f, "fieldset");
          },
          { dir: "parentNode", next: "legend" }
        );
        function qn() {
          try {
            return u.activeElement;
          } catch {
          }
        }
        try {
          l.apply(
            x = o.call(xe.childNodes),
            xe.childNodes
          ), x[xe.childNodes.length].nodeType;
        } catch {
          l = {
            apply: function(y, m) {
              wt.apply(y, o.call(m));
            },
            call: function(y) {
              wt.apply(y, o.call(arguments, 1));
            }
          };
        }
        function Q(f, y, m, T) {
          var S, D, O, H, N, B, M, W = y && y.ownerDocument, U = y ? y.nodeType : 9;
          if (m = m || [], typeof f != "string" || !f || U !== 1 && U !== 9 && U !== 11)
            return m;
          if (!T && (Ne(y), y = y || u, d)) {
            if (U !== 11 && (N = ce.exec(f)))
              if (S = N[1]) {
                if (U === 9)
                  if (O = y.getElementById(S)) {
                    if (O.id === S)
                      return l.call(m, O), m;
                  } else
                    return m;
                else if (W && (O = W.getElementById(S)) && Q.contains(y, O) && O.id === S)
                  return l.call(m, O), m;
              } else {
                if (N[2])
                  return l.apply(m, y.getElementsByTagName(f)), m;
                if ((S = N[3]) && y.getElementsByClassName)
                  return l.apply(m, y.getElementsByClassName(S)), m;
              }
            if (!ne[f + " "] && (!v || !v.test(f))) {
              if (M = f, W = y, U === 1 && (qt.test(f) || rt.test(f))) {
                for (W = It.test(f) && zt(y.parentNode) || y, (W != y || !q.scope) && ((H = y.getAttribute("id")) ? H = s.escapeSelector(H) : y.setAttribute("id", H = k)), B = gt(f), D = B.length; D--; )
                  B[D] = (H ? "#" + H : ":scope") + " " + yt(B[D]);
                M = B.join(",");
              }
              try {
                return l.apply(
                  m,
                  W.querySelectorAll(M)
                ), m;
              } catch {
                ne(f, !0);
              } finally {
                H === k && y.removeAttribute("id");
              }
            }
          }
          return _i(f.replace(Ge, "$1"), y, m, T);
        }
        function ht() {
          var f = [];
          function y(m, T) {
            return f.push(m + " ") > t.cacheLength && delete y[f.shift()], y[m + " "] = T;
          }
          return y;
        }
        function ye(f) {
          return f[k] = !0, f;
        }
        function Xe(f) {
          var y = u.createElement("fieldset");
          try {
            return !!f(y);
          } catch {
            return !1;
          } finally {
            y.parentNode && y.parentNode.removeChild(y), y = null;
          }
        }
        function In(f) {
          return function(y) {
            return ee(y, "input") && y.type === f;
          };
        }
        function zn(f) {
          return function(y) {
            return (ee(y, "input") || ee(y, "button")) && y.type === f;
          };
        }
        function Oi(f) {
          return function(y) {
            return "form" in y ? y.parentNode && y.disabled === !1 ? "label" in y ? "label" in y.parentNode ? y.parentNode.disabled === f : y.disabled === f : y.isDisabled === f || // Where there is no isDisabled, check manually
            y.isDisabled !== !f && Mn(y) === f : y.disabled === f : "label" in y ? y.disabled === f : !1;
          };
        }
        function Le(f) {
          return ye(function(y) {
            return y = +y, ye(function(m, T) {
              for (var S, D = f([], m.length, y), O = D.length; O--; )
                m[S = D[O]] && (m[S] = !(T[S] = m[S]));
            });
          });
        }
        function zt(f) {
          return f && typeof f.getElementsByTagName < "u" && f;
        }
        function Ne(f) {
          var y, m = f ? f.ownerDocument || f : xe;
          return m == u || m.nodeType !== 9 || !m.documentElement || (u = m, h = u.documentElement, d = !s.isXMLDoc(u), w = h.matches || h.webkitMatchesSelector || h.msMatchesSelector, xe != u && (y = u.defaultView) && y.top !== y && y.addEventListener("unload", Ln), q.getById = Xe(function(T) {
            return h.appendChild(T).id = s.expando, !u.getElementsByName || !u.getElementsByName(s.expando).length;
          }), q.disconnectedMatch = Xe(function(T) {
            return w.call(T, "*");
          }), q.scope = Xe(function() {
            return u.querySelectorAll(":scope");
          }), q.cssHas = Xe(function() {
            try {
              return u.querySelector(":has(*,:jqfake)"), !1;
            } catch {
              return !0;
            }
          }), q.getById ? (t.filter.ID = function(T) {
            var S = T.replace(Ee, $e);
            return function(D) {
              return D.getAttribute("id") === S;
            };
          }, t.find.ID = function(T, S) {
            if (typeof S.getElementById < "u" && d) {
              var D = S.getElementById(T);
              return D ? [D] : [];
            }
          }) : (t.filter.ID = function(T) {
            var S = T.replace(Ee, $e);
            return function(D) {
              var O = typeof D.getAttributeNode < "u" && D.getAttributeNode("id");
              return O && O.value === S;
            };
          }, t.find.ID = function(T, S) {
            if (typeof S.getElementById < "u" && d) {
              var D, O, H, N = S.getElementById(T);
              if (N) {
                if (D = N.getAttributeNode("id"), D && D.value === T)
                  return [N];
                for (H = S.getElementsByName(T), O = 0; N = H[O++]; )
                  if (D = N.getAttributeNode("id"), D && D.value === T)
                    return [N];
              }
              return [];
            }
          }), t.find.TAG = function(T, S) {
            return typeof S.getElementsByTagName < "u" ? S.getElementsByTagName(T) : S.querySelectorAll(T);
          }, t.find.CLASS = function(T, S) {
            if (typeof S.getElementsByClassName < "u" && d)
              return S.getElementsByClassName(T);
          }, v = [], Xe(function(T) {
            var S;
            h.appendChild(T).innerHTML = "<a id='" + k + "' href='' disabled='disabled'></a><select id='" + k + "-\r\\' disabled='disabled'><option selected=''></option></select>", T.querySelectorAll("[selected]").length || v.push("\\[" + K + "*(?:value|" + be + ")"), T.querySelectorAll("[id~=" + k + "-]").length || v.push("~="), T.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]"), T.querySelectorAll(":checked").length || v.push(":checked"), S = u.createElement("input"), S.setAttribute("type", "hidden"), T.appendChild(S).setAttribute("name", "D"), h.appendChild(T).disabled = !0, T.querySelectorAll(":disabled").length !== 2 && v.push(":enabled", ":disabled"), S = u.createElement("input"), S.setAttribute("name", ""), T.appendChild(S), T.querySelectorAll("[name='']").length || v.push("\\[" + K + "*name" + K + "*=" + K + `*(?:''|"")`);
          }), q.cssHas || v.push(":has"), v = v.length && new RegExp(v.join("|")), ie = function(T, S) {
            if (T === S)
              return a = !0, 0;
            var D = !T.compareDocumentPosition - !S.compareDocumentPosition;
            return D || (D = (T.ownerDocument || T) == (S.ownerDocument || S) ? T.compareDocumentPosition(S) : (
              // Otherwise we know they are disconnected
              1
            ), D & 1 || !q.sortDetached && S.compareDocumentPosition(T) === D ? T === u || T.ownerDocument == xe && Q.contains(xe, T) ? -1 : S === u || S.ownerDocument == xe && Q.contains(xe, S) ? 1 : r ? g.call(r, T) - g.call(r, S) : 0 : D & 4 ? -1 : 1);
          }), u;
        }
        Q.matches = function(f, y) {
          return Q(f, null, null, y);
        }, Q.matchesSelector = function(f, y) {
          if (Ne(f), d && !ne[y + " "] && (!v || !v.test(y)))
            try {
              var m = w.call(f, y);
              if (m || q.disconnectedMatch || // As well, disconnected nodes are said to be in a document
              // fragment in IE 9
              f.document && f.document.nodeType !== 11)
                return m;
            } catch {
              ne(y, !0);
            }
          return Q(y, u, null, [f]).length > 0;
        }, Q.contains = function(f, y) {
          return (f.ownerDocument || f) != u && Ne(f), s.contains(f, y);
        }, Q.attr = function(f, y) {
          (f.ownerDocument || f) != u && Ne(f);
          var m = t.attrHandle[y.toLowerCase()], T = m && V.call(t.attrHandle, y.toLowerCase()) ? m(f, y, !d) : void 0;
          return T !== void 0 ? T : f.getAttribute(y);
        }, Q.error = function(f) {
          throw new Error("Syntax error, unrecognized expression: " + f);
        }, s.uniqueSort = function(f) {
          var y, m = [], T = 0, S = 0;
          if (a = !q.sortStable, r = !q.sortStable && o.call(f, 0), Mi.call(f, ie), a) {
            for (; y = f[S++]; )
              y === f[S] && (T = m.push(S));
            for (; T--; )
              qi.call(f, m[T], 1);
          }
          return r = null, f;
        }, s.fn.uniqueSort = function() {
          return this.pushStack(s.uniqueSort(o.apply(this)));
        }, t = s.expr = {
          // Can be adjusted by the user
          cacheLength: 50,
          createPseudo: ye,
          match: Se,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" }
          },
          preFilter: {
            ATTR: function(f) {
              return f[1] = f[1].replace(Ee, $e), f[3] = (f[3] || f[4] || f[5] || "").replace(Ee, $e), f[2] === "~=" && (f[3] = " " + f[3] + " "), f.slice(0, 4);
            },
            CHILD: function(f) {
              return f[1] = f[1].toLowerCase(), f[1].slice(0, 3) === "nth" ? (f[3] || Q.error(f[0]), f[4] = +(f[4] ? f[5] + (f[6] || 1) : 2 * (f[3] === "even" || f[3] === "odd")), f[5] = +(f[7] + f[8] || f[3] === "odd")) : f[3] && Q.error(f[0]), f;
            },
            PSEUDO: function(f) {
              var y, m = !f[6] && f[2];
              return Se.CHILD.test(f[0]) ? null : (f[3] ? f[2] = f[4] || f[5] || "" : m && we.test(m) && // Get excess from tokenize (recursively)
              (y = gt(m, !0)) && // advance to the next closing parenthesis
              (y = m.indexOf(")", m.length - y) - m.length) && (f[0] = f[0].slice(0, y), f[2] = m.slice(0, y)), f.slice(0, 3));
            }
          },
          filter: {
            TAG: function(f) {
              var y = f.replace(Ee, $e).toLowerCase();
              return f === "*" ? function() {
                return !0;
              } : function(m) {
                return ee(m, y);
              };
            },
            CLASS: function(f) {
              var y = z[f + " "];
              return y || (y = new RegExp("(^|" + K + ")" + f + "(" + K + "|$)")) && z(f, function(m) {
                return y.test(
                  typeof m.className == "string" && m.className || typeof m.getAttribute < "u" && m.getAttribute("class") || ""
                );
              });
            },
            ATTR: function(f, y, m) {
              return function(T) {
                var S = Q.attr(T, f);
                return S == null ? y === "!=" : y ? (S += "", y === "=" ? S === m : y === "!=" ? S !== m : y === "^=" ? m && S.indexOf(m) === 0 : y === "*=" ? m && S.indexOf(m) > -1 : y === "$=" ? m && S.slice(-m.length) === m : y === "~=" ? (" " + S.replace(G, " ") + " ").indexOf(m) > -1 : y === "|=" ? S === m || S.slice(0, m.length + 1) === m + "-" : !1) : !0;
              };
            },
            CHILD: function(f, y, m, T, S) {
              var D = f.slice(0, 3) !== "nth", O = f.slice(-4) !== "last", H = y === "of-type";
              return T === 1 && S === 0 ? (
                // Shortcut for :nth-*(n)
                function(N) {
                  return !!N.parentNode;
                }
              ) : function(N, B, M) {
                var W, U, P, Z, fe, re = D !== O ? "nextSibling" : "previousSibling", pe = N.parentNode, ke = H && N.nodeName.toLowerCase(), Ye = !M && !H, oe = !1;
                if (pe) {
                  if (D) {
                    for (; re; ) {
                      for (P = N; P = P[re]; )
                        if (H ? ee(P, ke) : P.nodeType === 1)
                          return !1;
                      fe = re = f === "only" && !fe && "nextSibling";
                    }
                    return !0;
                  }
                  if (fe = [O ? pe.firstChild : pe.lastChild], O && Ye) {
                    for (U = pe[k] || (pe[k] = {}), W = U[f] || [], Z = W[0] === b && W[1], oe = Z && W[2], P = Z && pe.childNodes[Z]; P = ++Z && P && P[re] || // Fallback to seeking `elem` from the start
                    (oe = Z = 0) || fe.pop(); )
                      if (P.nodeType === 1 && ++oe && P === N) {
                        U[f] = [b, Z, oe];
                        break;
                      }
                  } else if (Ye && (U = N[k] || (N[k] = {}), W = U[f] || [], Z = W[0] === b && W[1], oe = Z), oe === !1)
                    for (; (P = ++Z && P && P[re] || (oe = Z = 0) || fe.pop()) && !((H ? ee(P, ke) : P.nodeType === 1) && ++oe && (Ye && (U = P[k] || (P[k] = {}), U[f] = [b, oe]), P === N)); )
                      ;
                  return oe -= S, oe === T || oe % T === 0 && oe / T >= 0;
                }
              };
            },
            PSEUDO: function(f, y) {
              var m, T = t.pseudos[f] || t.setFilters[f.toLowerCase()] || Q.error("unsupported pseudo: " + f);
              return T[k] ? T(y) : T.length > 1 ? (m = [f, f, "", y], t.setFilters.hasOwnProperty(f.toLowerCase()) ? ye(function(S, D) {
                for (var O, H = T(S, y), N = H.length; N--; )
                  O = g.call(S, H[N]), S[O] = !(D[O] = H[N]);
              }) : function(S) {
                return T(S, 0, m);
              }) : T;
            }
          },
          pseudos: {
            // Potentially complex pseudos
            not: ye(function(f) {
              var y = [], m = [], T = Bt(f.replace(Ge, "$1"));
              return T[k] ? ye(function(S, D, O, H) {
                for (var N, B = T(S, null, H, []), M = S.length; M--; )
                  (N = B[M]) && (S[M] = !(D[M] = N));
              }) : function(S, D, O) {
                return y[0] = S, T(y, null, O, m), y[0] = null, !m.pop();
              };
            }),
            has: ye(function(f) {
              return function(y) {
                return Q(f, y).length > 0;
              };
            }),
            contains: ye(function(f) {
              return f = f.replace(Ee, $e), function(y) {
                return (y.textContent || s.text(y)).indexOf(f) > -1;
              };
            }),
            // "Whether an element is represented by a :lang() selector
            // is based solely on the element's language value
            // being equal to the identifier C,
            // or beginning with the identifier C immediately followed by "-".
            // The matching of C against the element's language value is performed case-insensitively.
            // The identifier C does not have to be a valid language name."
            // https://www.w3.org/TR/selectors/#lang-pseudo
            lang: ye(function(f) {
              return ot.test(f || "") || Q.error("unsupported lang: " + f), f = f.replace(Ee, $e).toLowerCase(), function(y) {
                var m;
                do
                  if (m = d ? y.lang : y.getAttribute("xml:lang") || y.getAttribute("lang"))
                    return m = m.toLowerCase(), m === f || m.indexOf(f + "-") === 0;
                while ((y = y.parentNode) && y.nodeType === 1);
                return !1;
              };
            }),
            // Miscellaneous
            target: function(f) {
              var y = R.location && R.location.hash;
              return y && y.slice(1) === f.id;
            },
            root: function(f) {
              return f === h;
            },
            focus: function(f) {
              return f === qn() && u.hasFocus() && !!(f.type || f.href || ~f.tabIndex);
            },
            // Boolean properties
            enabled: Oi(!1),
            disabled: Oi(!0),
            checked: function(f) {
              return ee(f, "input") && !!f.checked || ee(f, "option") && !!f.selected;
            },
            selected: function(f) {
              return f.parentNode && f.parentNode.selectedIndex, f.selected === !0;
            },
            // Contents
            empty: function(f) {
              for (f = f.firstChild; f; f = f.nextSibling)
                if (f.nodeType < 6)
                  return !1;
              return !0;
            },
            parent: function(f) {
              return !t.pseudos.empty(f);
            },
            // Element/input types
            header: function(f) {
              return Oe.test(f.nodeName);
            },
            input: function(f) {
              return De.test(f.nodeName);
            },
            button: function(f) {
              return ee(f, "input") && f.type === "button" || ee(f, "button");
            },
            text: function(f) {
              var y;
              return ee(f, "input") && f.type === "text" && // Support: IE <10 only
              // New HTML5 attribute values (e.g., "search") appear
              // with elem.type === "text"
              ((y = f.getAttribute("type")) == null || y.toLowerCase() === "text");
            },
            // Position-in-collection
            first: Le(function() {
              return [0];
            }),
            last: Le(function(f, y) {
              return [y - 1];
            }),
            eq: Le(function(f, y, m) {
              return [m < 0 ? m + y : m];
            }),
            even: Le(function(f, y) {
              for (var m = 0; m < y; m += 2)
                f.push(m);
              return f;
            }),
            odd: Le(function(f, y) {
              for (var m = 1; m < y; m += 2)
                f.push(m);
              return f;
            }),
            lt: Le(function(f, y, m) {
              var T;
              for (m < 0 ? T = m + y : m > y ? T = y : T = m; --T >= 0; )
                f.push(T);
              return f;
            }),
            gt: Le(function(f, y, m) {
              for (var T = m < 0 ? m + y : m; ++T < y; )
                f.push(T);
              return f;
            })
          }
        }, t.pseudos.nth = t.pseudos.eq;
        for (e in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
          t.pseudos[e] = In(e);
        for (e in { submit: !0, reset: !0 })
          t.pseudos[e] = zn(e);
        function Ni() {
        }
        Ni.prototype = t.filters = t.pseudos, t.setFilters = new Ni();
        function gt(f, y) {
          var m, T, S, D, O, H, N, B = Y[f + " "];
          if (B)
            return y ? 0 : B.slice(0);
          for (O = f, H = [], N = t.preFilter; O; ) {
            (!m || (T = te.exec(O))) && (T && (O = O.slice(T[0].length) || O), H.push(S = [])), m = !1, (T = rt.exec(O)) && (m = T.shift(), S.push({
              value: m,
              // Cast descendant combinators to space
              type: T[0].replace(Ge, " ")
            }), O = O.slice(m.length));
            for (D in t.filter)
              (T = Se[D].exec(O)) && (!N[D] || (T = N[D](T))) && (m = T.shift(), S.push({
                value: m,
                type: D,
                matches: T
              }), O = O.slice(m.length));
            if (!m)
              break;
          }
          return y ? O.length : O ? Q.error(f) : (
            // Cache the tokens
            Y(f, H).slice(0)
          );
        }
        function yt(f) {
          for (var y = 0, m = f.length, T = ""; y < m; y++)
            T += f[y].value;
          return T;
        }
        function vt(f, y, m) {
          var T = y.dir, S = y.next, D = S || T, O = m && D === "parentNode", H = A++;
          return y.first ? (
            // Check against closest ancestor/preceding element
            function(N, B, M) {
              for (; N = N[T]; )
                if (N.nodeType === 1 || O)
                  return f(N, B, M);
              return !1;
            }
          ) : (
            // Check against all ancestor/preceding elements
            function(N, B, M) {
              var W, U, P = [b, H];
              if (M) {
                for (; N = N[T]; )
                  if ((N.nodeType === 1 || O) && f(N, B, M))
                    return !0;
              } else
                for (; N = N[T]; )
                  if (N.nodeType === 1 || O)
                    if (U = N[k] || (N[k] = {}), S && ee(N, S))
                      N = N[T] || N;
                    else {
                      if ((W = U[D]) && W[0] === b && W[1] === H)
                        return P[2] = W[2];
                      if (U[D] = P, P[2] = f(N, B, M))
                        return !0;
                    }
              return !1;
            }
          );
        }
        function Rt(f) {
          return f.length > 1 ? function(y, m, T) {
            for (var S = f.length; S--; )
              if (!f[S](y, m, T))
                return !1;
            return !0;
          } : f[0];
        }
        function Rn(f, y, m) {
          for (var T = 0, S = y.length; T < S; T++)
            Q(f, y[T], m);
          return m;
        }
        function mt(f, y, m, T, S) {
          for (var D, O = [], H = 0, N = f.length, B = y != null; H < N; H++)
            (D = f[H]) && (!m || m(D, T, S)) && (O.push(D), B && y.push(H));
          return O;
        }
        function Wt(f, y, m, T, S, D) {
          return T && !T[k] && (T = Wt(T)), S && !S[k] && (S = Wt(S, D)), ye(function(O, H, N, B) {
            var M, W, U, P, Z = [], fe = [], re = H.length, pe = O || Rn(
              y || "*",
              N.nodeType ? [N] : N,
              []
            ), ke = f && (O || !y) ? mt(pe, Z, f, N, B) : pe;
            if (m ? (P = S || (O ? f : re || T) ? (
              // ...intermediate processing is necessary
              []
            ) : (
              // ...otherwise use results directly
              H
            ), m(ke, P, N, B)) : P = ke, T)
              for (M = mt(P, fe), T(M, [], N, B), W = M.length; W--; )
                (U = M[W]) && (P[fe[W]] = !(ke[fe[W]] = U));
            if (O) {
              if (S || f) {
                if (S) {
                  for (M = [], W = P.length; W--; )
                    (U = P[W]) && M.push(ke[W] = U);
                  S(null, P = [], M, B);
                }
                for (W = P.length; W--; )
                  (U = P[W]) && (M = S ? g.call(O, U) : Z[W]) > -1 && (O[M] = !(H[M] = U));
              }
            } else
              P = mt(
                P === H ? P.splice(re, P.length) : P
              ), S ? S(null, H, P, B) : l.apply(H, P);
          });
        }
        function Ft(f) {
          for (var y, m, T, S = f.length, D = t.relative[f[0].type], O = D || t.relative[" "], H = D ? 1 : 0, N = vt(function(W) {
            return W === y;
          }, O, !0), B = vt(function(W) {
            return g.call(y, W) > -1;
          }, O, !0), M = [function(W, U, P) {
            var Z = !D && (P || U != n) || ((y = U).nodeType ? N(W, U, P) : B(W, U, P));
            return y = null, Z;
          }]; H < S; H++)
            if (m = t.relative[f[H].type])
              M = [vt(Rt(M), m)];
            else {
              if (m = t.filter[f[H].type].apply(null, f[H].matches), m[k]) {
                for (T = ++H; T < S && !t.relative[f[T].type]; T++)
                  ;
                return Wt(
                  H > 1 && Rt(M),
                  H > 1 && yt(
                    // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                    f.slice(0, H - 1).concat({ value: f[H - 2].type === " " ? "*" : "" })
                  ).replace(Ge, "$1"),
                  m,
                  H < T && Ft(f.slice(H, T)),
                  T < S && Ft(f = f.slice(T)),
                  T < S && yt(f)
                );
              }
              M.push(m);
            }
          return Rt(M);
        }
        function Wn(f, y) {
          var m = y.length > 0, T = f.length > 0, S = function(D, O, H, N, B) {
            var M, W, U, P = 0, Z = "0", fe = D && [], re = [], pe = n, ke = D || T && t.find.TAG("*", B), Ye = b += pe == null ? 1 : Math.random() || 0.1, oe = ke.length;
            for (B && (n = O == u || O || B); Z !== oe && (M = ke[Z]) != null; Z++) {
              if (T && M) {
                for (W = 0, !O && M.ownerDocument != u && (Ne(M), H = !d); U = f[W++]; )
                  if (U(M, O || u, H)) {
                    l.call(N, M);
                    break;
                  }
                B && (b = Ye);
              }
              m && ((M = !U && M) && P--, D && fe.push(M));
            }
            if (P += Z, m && Z !== P) {
              for (W = 0; U = y[W++]; )
                U(fe, re, O, H);
              if (D) {
                if (P > 0)
                  for (; Z--; )
                    fe[Z] || re[Z] || (re[Z] = Li.call(N));
                re = mt(re);
              }
              l.apply(N, re), B && !D && re.length > 0 && P + y.length > 1 && s.uniqueSort(N);
            }
            return B && (b = Ye, n = pe), fe;
          };
          return m ? ye(S) : S;
        }
        function Bt(f, y) {
          var m, T = [], S = [], D = F[f + " "];
          if (!D) {
            for (y || (y = gt(f)), m = y.length; m--; )
              D = Ft(y[m]), D[k] ? T.push(D) : S.push(D);
            D = F(
              f,
              Wn(S, T)
            ), D.selector = f;
          }
          return D;
        }
        function _i(f, y, m, T) {
          var S, D, O, H, N, B = typeof f == "function" && f, M = !T && gt(f = B.selector || f);
          if (m = m || [], M.length === 1) {
            if (D = M[0] = M[0].slice(0), D.length > 2 && (O = D[0]).type === "ID" && y.nodeType === 9 && d && t.relative[D[1].type]) {
              if (y = (t.find.ID(
                O.matches[0].replace(Ee, $e),
                y
              ) || [])[0], y)
                B && (y = y.parentNode);
              else
                return m;
              f = f.slice(D.shift().value.length);
            }
            for (S = Se.needsContext.test(f) ? 0 : D.length; S-- && (O = D[S], !t.relative[H = O.type]); )
              if ((N = t.find[H]) && (T = N(
                O.matches[0].replace(Ee, $e),
                It.test(D[0].type) && zt(y.parentNode) || y
              ))) {
                if (D.splice(S, 1), f = T.length && yt(D), !f)
                  return l.apply(m, T), m;
                break;
              }
          }
          return (B || Bt(f, M))(
            T,
            y,
            !d,
            m,
            !y || It.test(f) && zt(y.parentNode) || y
          ), m;
        }
        q.sortStable = k.split("").sort(ie).join("") === k, Ne(), q.sortDetached = Xe(function(f) {
          return f.compareDocumentPosition(u.createElement("fieldset")) & 1;
        }), s.find = Q, s.expr[":"] = s.expr.pseudos, s.unique = s.uniqueSort, Q.compile = Bt, Q.select = _i, Q.setDocument = Ne, Q.escape = s.escapeSelector, Q.getText = s.text, Q.isXML = s.isXMLDoc, Q.selectors = s.expr, Q.support = s.support, Q.uniqueSort = s.uniqueSort;
      })();
      var Ie = function(e, t, n) {
        for (var r = [], a = n !== void 0; (e = e[t]) && e.nodeType !== 9; )
          if (e.nodeType === 1) {
            if (a && s(e).is(n))
              break;
            r.push(e);
          }
        return r;
      }, Xt = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
          e.nodeType === 1 && e !== t && n.push(e);
        return n;
      }, Yt = s.expr.match.needsContext, Gt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function St(e, t, n) {
        return L(t) ? s.grep(e, function(r, a) {
          return !!t.call(r, a, r) !== n;
        }) : t.nodeType ? s.grep(e, function(r) {
          return r === t !== n;
        }) : typeof t != "string" ? s.grep(e, function(r) {
          return g.call(t, r) > -1 !== n;
        }) : s.filter(t, e, n);
      }
      s.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), t.length === 1 && r.nodeType === 1 ? s.find.matchesSelector(r, e) ? [r] : [] : s.find.matches(e, s.grep(t, function(a) {
          return a.nodeType === 1;
        }));
      }, s.fn.extend({
        find: function(e) {
          var t, n, r = this.length, a = this;
          if (typeof e != "string")
            return this.pushStack(s(e).filter(function() {
              for (t = 0; t < r; t++)
                if (s.contains(a[t], this))
                  return !0;
            }));
          for (n = this.pushStack([]), t = 0; t < r; t++)
            s.find(e, a[t], n);
          return r > 1 ? s.uniqueSort(n) : n;
        },
        filter: function(e) {
          return this.pushStack(St(this, e || [], !1));
        },
        not: function(e) {
          return this.pushStack(St(this, e || [], !0));
        },
        is: function(e) {
          return !!St(
            this,
            // If this is a positional/relative selector, check membership in the returned set
            // so $("p:first").is("p:last") won't return true for a doc with two "p".
            typeof e == "string" && Yt.test(e) ? s(e) : e || [],
            !1
          ).length;
        }
      });
      var Kt, Ri = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, Wi = s.fn.init = function(e, t, n) {
        var r, a;
        if (!e)
          return this;
        if (n = n || Kt, typeof e == "string")
          if (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3 ? r = [null, e, null] : r = Ri.exec(e), r && (r[1] || !t))
            if (r[1]) {
              if (t = t instanceof s ? t[0] : t, s.merge(this, s.parseHTML(
                r[1],
                t && t.nodeType ? t.ownerDocument || t : I,
                !0
              )), Gt.test(r[1]) && s.isPlainObject(t))
                for (r in t)
                  L(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
              return this;
            } else
              return a = I.getElementById(r[2]), a && (this[0] = a, this.length = 1), this;
          else
            return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        else {
          if (e.nodeType)
            return this[0] = e, this.length = 1, this;
          if (L(e))
            return n.ready !== void 0 ? n.ready(e) : (
              // Execute immediately if ready is not present
              e(s)
            );
        }
        return s.makeArray(e, this);
      };
      Wi.prototype = s.fn, Kt = s(I);
      var Fi = /^(?:parents|prev(?:Until|All))/, Bi = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };
      s.fn.extend({
        has: function(e) {
          var t = s(e, this), n = t.length;
          return this.filter(function() {
            for (var r = 0; r < n; r++)
              if (s.contains(this, t[r]))
                return !0;
          });
        },
        closest: function(e, t) {
          var n, r = 0, a = this.length, l = [], u = typeof e != "string" && s(e);
          if (!Yt.test(e)) {
            for (; r < a; r++)
              for (n = this[r]; n && n !== t; n = n.parentNode)
                if (n.nodeType < 11 && (u ? u.index(n) > -1 : (
                  // Don't pass non-elements to jQuery#find
                  n.nodeType === 1 && s.find.matchesSelector(n, e)
                ))) {
                  l.push(n);
                  break;
                }
          }
          return this.pushStack(l.length > 1 ? s.uniqueSort(l) : l);
        },
        // Determine the position of an element within the set
        index: function(e) {
          return e ? typeof e == "string" ? g.call(s(e), this[0]) : g.call(
            this,
            // If it receives a jQuery object, the first element is used
            e.jquery ? e[0] : e
          ) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
          return this.pushStack(
            s.uniqueSort(
              s.merge(this.get(), s(e, t))
            )
          );
        },
        addBack: function(e) {
          return this.add(
            e == null ? this.prevObject : this.prevObject.filter(e)
          );
        }
      });
      function Qt(e, t) {
        for (; (e = e[t]) && e.nodeType !== 1; )
          ;
        return e;
      }
      s.each({
        parent: function(e) {
          var t = e.parentNode;
          return t && t.nodeType !== 11 ? t : null;
        },
        parents: function(e) {
          return Ie(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
          return Ie(e, "parentNode", n);
        },
        next: function(e) {
          return Qt(e, "nextSibling");
        },
        prev: function(e) {
          return Qt(e, "previousSibling");
        },
        nextAll: function(e) {
          return Ie(e, "nextSibling");
        },
        prevAll: function(e) {
          return Ie(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
          return Ie(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
          return Ie(e, "previousSibling", n);
        },
        siblings: function(e) {
          return Xt((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
          return Xt(e.firstChild);
        },
        contents: function(e) {
          return e.contentDocument != null && // Support: IE 11+
          // <object> elements with no `data` attribute has an object
          // `contentDocument` with a `null` prototype.
          i(e.contentDocument) ? e.contentDocument : (ee(e, "template") && (e = e.content || e), s.merge([], e.childNodes));
        }
      }, function(e, t) {
        s.fn[e] = function(n, r) {
          var a = s.map(this, t, n);
          return e.slice(-5) !== "Until" && (r = n), r && typeof r == "string" && (a = s.filter(r, a)), this.length > 1 && (Bi[e] || s.uniqueSort(a), Fi.test(e) && a.reverse()), this.pushStack(a);
        };
      });
      var ve = /[^\x20\t\r\n\f]+/g;
      function Ui(e) {
        var t = {};
        return s.each(e.match(ve) || [], function(n, r) {
          t[r] = !0;
        }), t;
      }
      s.Callbacks = function(e) {
        e = typeof e == "string" ? Ui(e) : s.extend({}, e);
        var t, n, r, a, l = [], u = [], h = -1, d = function() {
          for (a = a || e.once, r = t = !0; u.length; h = -1)
            for (n = u.shift(); ++h < l.length; )
              l[h].apply(n[0], n[1]) === !1 && e.stopOnFalse && (h = l.length, n = !1);
          e.memory || (n = !1), t = !1, a && (n ? l = [] : l = "");
        }, v = {
          // Add a callback or a collection of callbacks to the list
          add: function() {
            return l && (n && !t && (h = l.length - 1, u.push(n)), function w(k) {
              s.each(k, function(b, A) {
                L(A) ? (!e.unique || !v.has(A)) && l.push(A) : A && A.length && qe(A) !== "string" && w(A);
              });
            }(arguments), n && !t && d()), this;
          },
          // Remove a callback from the list
          remove: function() {
            return s.each(arguments, function(w, k) {
              for (var b; (b = s.inArray(k, l, b)) > -1; )
                l.splice(b, 1), b <= h && h--;
            }), this;
          },
          // Check if a given callback is in the list.
          // If no argument is given, return whether or not list has callbacks attached.
          has: function(w) {
            return w ? s.inArray(w, l) > -1 : l.length > 0;
          },
          // Remove all callbacks from the list
          empty: function() {
            return l && (l = []), this;
          },
          // Disable .fire and .add
          // Abort any current/pending executions
          // Clear all callbacks and values
          disable: function() {
            return a = u = [], l = n = "", this;
          },
          disabled: function() {
            return !l;
          },
          // Disable .fire
          // Also disable .add unless we have memory (since it would have no effect)
          // Abort any pending executions
          lock: function() {
            return a = u = [], !n && !t && (l = n = ""), this;
          },
          locked: function() {
            return !!a;
          },
          // Call all callbacks with the given context and arguments
          fireWith: function(w, k) {
            return a || (k = k || [], k = [w, k.slice ? k.slice() : k], u.push(k), t || d()), this;
          },
          // Call all the callbacks with the given arguments
          fire: function() {
            return v.fireWith(this, arguments), this;
          },
          // To know if the callbacks have already been called at least once
          fired: function() {
            return !!r;
          }
        };
        return v;
      };
      function ze(e) {
        return e;
      }
      function at(e) {
        throw e;
      }
      function Jt(e, t, n, r) {
        var a;
        try {
          e && L(a = e.promise) ? a.call(e).done(t).fail(n) : e && L(a = e.then) ? a.call(e, t, n) : t.apply(void 0, [e].slice(r));
        } catch (l) {
          n.apply(void 0, [l]);
        }
      }
      s.extend({
        Deferred: function(e) {
          var t = [
            // action, add listener, callbacks,
            // ... .then handlers, argument index, [final state]
            [
              "notify",
              "progress",
              s.Callbacks("memory"),
              s.Callbacks("memory"),
              2
            ],
            [
              "resolve",
              "done",
              s.Callbacks("once memory"),
              s.Callbacks("once memory"),
              0,
              "resolved"
            ],
            [
              "reject",
              "fail",
              s.Callbacks("once memory"),
              s.Callbacks("once memory"),
              1,
              "rejected"
            ]
          ], n = "pending", r = {
            state: function() {
              return n;
            },
            always: function() {
              return a.done(arguments).fail(arguments), this;
            },
            catch: function(l) {
              return r.then(null, l);
            },
            // Keep pipe for back-compat
            pipe: function() {
              var l = arguments;
              return s.Deferred(function(u) {
                s.each(t, function(h, d) {
                  var v = L(l[d[4]]) && l[d[4]];
                  a[d[1]](function() {
                    var w = v && v.apply(this, arguments);
                    w && L(w.promise) ? w.promise().progress(u.notify).done(u.resolve).fail(u.reject) : u[d[0] + "With"](
                      this,
                      v ? [w] : arguments
                    );
                  });
                }), l = null;
              }).promise();
            },
            then: function(l, u, h) {
              var d = 0;
              function v(w, k, b, A) {
                return function() {
                  var z = this, Y = arguments, F = function() {
                    var ie, be;
                    if (!(w < d)) {
                      if (ie = b.apply(z, Y), ie === k.promise())
                        throw new TypeError("Thenable self-resolution");
                      be = ie && // Support: Promises/A+ section 2.3.4
                      // https://promisesaplus.com/#point-64
                      // Only check objects and functions for thenability
                      (typeof ie == "object" || typeof ie == "function") && ie.then, L(be) ? A ? be.call(
                        ie,
                        v(d, k, ze, A),
                        v(d, k, at, A)
                      ) : (d++, be.call(
                        ie,
                        v(d, k, ze, A),
                        v(d, k, at, A),
                        v(
                          d,
                          k,
                          ze,
                          k.notifyWith
                        )
                      )) : (b !== ze && (z = void 0, Y = [ie]), (A || k.resolveWith)(z, Y));
                    }
                  }, ne = A ? F : function() {
                    try {
                      F();
                    } catch (ie) {
                      s.Deferred.exceptionHook && s.Deferred.exceptionHook(
                        ie,
                        ne.error
                      ), w + 1 >= d && (b !== at && (z = void 0, Y = [ie]), k.rejectWith(z, Y));
                    }
                  };
                  w ? ne() : (s.Deferred.getErrorHook ? ne.error = s.Deferred.getErrorHook() : s.Deferred.getStackHook && (ne.error = s.Deferred.getStackHook()), R.setTimeout(ne));
                };
              }
              return s.Deferred(function(w) {
                t[0][3].add(
                  v(
                    0,
                    w,
                    L(h) ? h : ze,
                    w.notifyWith
                  )
                ), t[1][3].add(
                  v(
                    0,
                    w,
                    L(l) ? l : ze
                  )
                ), t[2][3].add(
                  v(
                    0,
                    w,
                    L(u) ? u : at
                  )
                );
              }).promise();
            },
            // Get a promise for this deferred
            // If obj is provided, the promise aspect is added to the object
            promise: function(l) {
              return l != null ? s.extend(l, r) : r;
            }
          }, a = {};
          return s.each(t, function(l, u) {
            var h = u[2], d = u[5];
            r[u[1]] = h.add, d && h.add(
              function() {
                n = d;
              },
              // rejected_callbacks.disable
              // fulfilled_callbacks.disable
              t[3 - l][2].disable,
              // rejected_handlers.disable
              // fulfilled_handlers.disable
              t[3 - l][3].disable,
              // progress_callbacks.lock
              t[0][2].lock,
              // progress_handlers.lock
              t[0][3].lock
            ), h.add(u[3].fire), a[u[0]] = function() {
              return a[u[0] + "With"](this === a ? void 0 : this, arguments), this;
            }, a[u[0] + "With"] = h.fireWith;
          }), r.promise(a), e && e.call(a, a), a;
        },
        // Deferred helper
        when: function(e) {
          var t = arguments.length, n = t, r = Array(n), a = o.call(arguments), l = s.Deferred(), u = function(h) {
            return function(d) {
              r[h] = this, a[h] = arguments.length > 1 ? o.call(arguments) : d, --t || l.resolveWith(r, a);
            };
          };
          if (t <= 1 && (Jt(
            e,
            l.done(u(n)).resolve,
            l.reject,
            !t
          ), l.state() === "pending" || L(a[n] && a[n].then)))
            return l.then();
          for (; n--; )
            Jt(a[n], u(n), l.reject);
          return l.promise();
        }
      });
      var Vi = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      s.Deferred.exceptionHook = function(e, t) {
        R.console && R.console.warn && e && Vi.test(e.name) && R.console.warn(
          "jQuery.Deferred exception: " + e.message,
          e.stack,
          t
        );
      }, s.readyException = function(e) {
        R.setTimeout(function() {
          throw e;
        });
      };
      var kt = s.Deferred();
      s.fn.ready = function(e) {
        return kt.then(e).catch(function(t) {
          s.readyException(t);
        }), this;
      }, s.extend({
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: !1,
        // A counter to track how many items to wait for before
        // the ready event fires. See trac-6781
        readyWait: 1,
        // Handle when the DOM is ready
        ready: function(e) {
          (e === !0 ? --s.readyWait : s.isReady) || (s.isReady = !0, !(e !== !0 && --s.readyWait > 0) && kt.resolveWith(I, [s]));
        }
      }), s.ready.then = kt.then;
      function lt() {
        I.removeEventListener("DOMContentLoaded", lt), R.removeEventListener("load", lt), s.ready();
      }
      I.readyState === "complete" || I.readyState !== "loading" && !I.documentElement.doScroll ? R.setTimeout(s.ready) : (I.addEventListener("DOMContentLoaded", lt), R.addEventListener("load", lt));
      var Ce = function(e, t, n, r, a, l, u) {
        var h = 0, d = e.length, v = n == null;
        if (qe(n) === "object") {
          a = !0;
          for (h in n)
            Ce(e, t, h, n[h], !0, l, u);
        } else if (r !== void 0 && (a = !0, L(r) || (u = !0), v && (u ? (t.call(e, r), t = null) : (v = t, t = function(w, k, b) {
          return v.call(s(w), b);
        })), t))
          for (; h < d; h++)
            t(
              e[h],
              n,
              u ? r : r.call(e[h], h, t(e[h], n))
            );
        return a ? e : v ? t.call(e) : d ? t(e[0], n) : l;
      }, Xi = /^-ms-/, Yi = /-([a-z])/g;
      function Gi(e, t) {
        return t.toUpperCase();
      }
      function me(e) {
        return e.replace(Xi, "ms-").replace(Yi, Gi);
      }
      var Ke = function(e) {
        return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType;
      };
      function Qe() {
        this.expando = s.expando + Qe.uid++;
      }
      Qe.uid = 1, Qe.prototype = {
        cache: function(e) {
          var t = e[this.expando];
          return t || (t = {}, Ke(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
            value: t,
            configurable: !0
          }))), t;
        },
        set: function(e, t, n) {
          var r, a = this.cache(e);
          if (typeof t == "string")
            a[me(t)] = n;
          else
            for (r in t)
              a[me(r)] = t[r];
          return a;
        },
        get: function(e, t) {
          return t === void 0 ? this.cache(e) : (
            // Always use camelCase key (gh-2257)
            e[this.expando] && e[this.expando][me(t)]
          );
        },
        access: function(e, t, n) {
          return t === void 0 || t && typeof t == "string" && n === void 0 ? this.get(e, t) : (this.set(e, t, n), n !== void 0 ? n : t);
        },
        remove: function(e, t) {
          var n, r = e[this.expando];
          if (r !== void 0) {
            if (t !== void 0)
              for (Array.isArray(t) ? t = t.map(me) : (t = me(t), t = t in r ? [t] : t.match(ve) || []), n = t.length; n--; )
                delete r[t[n]];
            (t === void 0 || s.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
          }
        },
        hasData: function(e) {
          var t = e[this.expando];
          return t !== void 0 && !s.isEmptyObject(t);
        }
      };
      var j = new Qe(), ae = new Qe(), Ki = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Qi = /[A-Z]/g;
      function Ji(e) {
        return e === "true" ? !0 : e === "false" ? !1 : e === "null" ? null : e === +e + "" ? +e : Ki.test(e) ? JSON.parse(e) : e;
      }
      function Zt(e, t, n) {
        var r;
        if (n === void 0 && e.nodeType === 1)
          if (r = "data-" + t.replace(Qi, "-$&").toLowerCase(), n = e.getAttribute(r), typeof n == "string") {
            try {
              n = Ji(n);
            } catch {
            }
            ae.set(e, t, n);
          } else
            n = void 0;
        return n;
      }
      s.extend({
        hasData: function(e) {
          return ae.hasData(e) || j.hasData(e);
        },
        data: function(e, t, n) {
          return ae.access(e, t, n);
        },
        removeData: function(e, t) {
          ae.remove(e, t);
        },
        // TODO: Now that all calls to _data and _removeData have been replaced
        // with direct calls to dataPriv methods, these can be deprecated.
        _data: function(e, t, n) {
          return j.access(e, t, n);
        },
        _removeData: function(e, t) {
          j.remove(e, t);
        }
      }), s.fn.extend({
        data: function(e, t) {
          var n, r, a, l = this[0], u = l && l.attributes;
          if (e === void 0) {
            if (this.length && (a = ae.get(l), l.nodeType === 1 && !j.get(l, "hasDataAttrs"))) {
              for (n = u.length; n--; )
                u[n] && (r = u[n].name, r.indexOf("data-") === 0 && (r = me(r.slice(5)), Zt(l, r, a[r])));
              j.set(l, "hasDataAttrs", !0);
            }
            return a;
          }
          return typeof e == "object" ? this.each(function() {
            ae.set(this, e);
          }) : Ce(this, function(h) {
            var d;
            if (l && h === void 0)
              return d = ae.get(l, e), d !== void 0 || (d = Zt(l, e), d !== void 0) ? d : void 0;
            this.each(function() {
              ae.set(this, e, h);
            });
          }, null, t, arguments.length > 1, null, !0);
        },
        removeData: function(e) {
          return this.each(function() {
            ae.remove(this, e);
          });
        }
      }), s.extend({
        queue: function(e, t, n) {
          var r;
          if (e)
            return t = (t || "fx") + "queue", r = j.get(e, t), n && (!r || Array.isArray(n) ? r = j.access(e, t, s.makeArray(n)) : r.push(n)), r || [];
        },
        dequeue: function(e, t) {
          t = t || "fx";
          var n = s.queue(e, t), r = n.length, a = n.shift(), l = s._queueHooks(e, t), u = function() {
            s.dequeue(e, t);
          };
          a === "inprogress" && (a = n.shift(), r--), a && (t === "fx" && n.unshift("inprogress"), delete l.stop, a.call(e, u, l)), !r && l && l.empty.fire();
        },
        // Not public - generate a queueHooks object, or return the current one
        _queueHooks: function(e, t) {
          var n = t + "queueHooks";
          return j.get(e, n) || j.access(e, n, {
            empty: s.Callbacks("once memory").add(function() {
              j.remove(e, [t + "queue", n]);
            })
          });
        }
      }), s.fn.extend({
        queue: function(e, t) {
          var n = 2;
          return typeof e != "string" && (t = e, e = "fx", n--), arguments.length < n ? s.queue(this[0], e) : t === void 0 ? this : this.each(function() {
            var r = s.queue(this, e, t);
            s._queueHooks(this, e), e === "fx" && r[0] !== "inprogress" && s.dequeue(this, e);
          });
        },
        dequeue: function(e) {
          return this.each(function() {
            s.dequeue(this, e);
          });
        },
        clearQueue: function(e) {
          return this.queue(e || "fx", []);
        },
        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function(e, t) {
          var n, r = 1, a = s.Deferred(), l = this, u = this.length, h = function() {
            --r || a.resolveWith(l, [l]);
          };
          for (typeof e != "string" && (t = e, e = void 0), e = e || "fx"; u--; )
            n = j.get(l[u], e + "queueHooks"), n && n.empty && (r++, n.empty.add(h));
          return h(), a.promise(t);
        }
      });
      var ei = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Je = new RegExp("^(?:([+-])=|)(" + ei + ")([a-z%]*)$", "i"), Ae = ["Top", "Right", "Bottom", "Left"], _e = I.documentElement, Re = function(e) {
        return s.contains(e.ownerDocument, e);
      }, Zi = { composed: !0 };
      _e.getRootNode && (Re = function(e) {
        return s.contains(e.ownerDocument, e) || e.getRootNode(Zi) === e.ownerDocument;
      });
      var ut = function(e, t) {
        return e = t || e, e.style.display === "none" || e.style.display === "" && // Otherwise, check computed style
        // Support: Firefox <=43 - 45
        // Disconnected elements can have computed display: none, so first confirm that elem is
        // in the document.
        Re(e) && s.css(e, "display") === "none";
      };
      function ti(e, t, n, r) {
        var a, l, u = 20, h = r ? function() {
          return r.cur();
        } : function() {
          return s.css(e, t, "");
        }, d = h(), v = n && n[3] || (s.cssNumber[t] ? "" : "px"), w = e.nodeType && (s.cssNumber[t] || v !== "px" && +d) && Je.exec(s.css(e, t));
        if (w && w[3] !== v) {
          for (d = d / 2, v = v || w[3], w = +d || 1; u--; )
            s.style(e, t, w + v), (1 - l) * (1 - (l = h() / d || 0.5)) <= 0 && (u = 0), w = w / l;
          w = w * 2, s.style(e, t, w + v), n = n || [];
        }
        return n && (w = +w || +d || 0, a = n[1] ? w + (n[1] + 1) * n[2] : +n[2], r && (r.unit = v, r.start = w, r.end = a)), a;
      }
      var ii = {};
      function en(e) {
        var t, n = e.ownerDocument, r = e.nodeName, a = ii[r];
        return a || (t = n.body.appendChild(n.createElement(r)), a = s.css(t, "display"), t.parentNode.removeChild(t), a === "none" && (a = "block"), ii[r] = a, a);
      }
      function We(e, t) {
        for (var n, r, a = [], l = 0, u = e.length; l < u; l++)
          r = e[l], r.style && (n = r.style.display, t ? (n === "none" && (a[l] = j.get(r, "display") || null, a[l] || (r.style.display = "")), r.style.display === "" && ut(r) && (a[l] = en(r))) : n !== "none" && (a[l] = "none", j.set(r, "display", n)));
        for (l = 0; l < u; l++)
          a[l] != null && (e[l].style.display = a[l]);
        return e;
      }
      s.fn.extend({
        show: function() {
          return We(this, !0);
        },
        hide: function() {
          return We(this);
        },
        toggle: function(e) {
          return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function() {
            ut(this) ? s(this).show() : s(this).hide();
          });
        }
      });
      var Ze = /^(?:checkbox|radio)$/i, ni = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, ri = /^$|^module$|\/(?:java|ecma)script/i;
      (function() {
        var e = I.createDocumentFragment(), t = e.appendChild(I.createElement("div")), n = I.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), q.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", q.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, t.innerHTML = "<option></option>", q.option = !!t.lastChild;
      })();
      var de = {
        // XHTML parsers do not magically insert elements in the
        // same way that tag soup parsers do. So we cannot shorten
        // this by omitting <tbody> or other required elements.
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
      de.tbody = de.tfoot = de.colgroup = de.caption = de.thead, de.th = de.td, q.option || (de.optgroup = de.option = [1, "<select multiple='multiple'>", "</select>"]);
      function le(e, t) {
        var n;
        return typeof e.getElementsByTagName < "u" ? n = e.getElementsByTagName(t || "*") : typeof e.querySelectorAll < "u" ? n = e.querySelectorAll(t || "*") : n = [], t === void 0 || t && ee(e, t) ? s.merge([e], n) : n;
      }
      function xt(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          j.set(
            e[n],
            "globalEval",
            !t || j.get(t[n], "globalEval")
          );
      }
      var tn = /<|&#?\w+;/;
      function oi(e, t, n, r, a) {
        for (var l, u, h, d, v, w, k = t.createDocumentFragment(), b = [], A = 0, z = e.length; A < z; A++)
          if (l = e[A], l || l === 0)
            if (qe(l) === "object")
              s.merge(b, l.nodeType ? [l] : l);
            else if (!tn.test(l))
              b.push(t.createTextNode(l));
            else {
              for (u = u || k.appendChild(t.createElement("div")), h = (ni.exec(l) || ["", ""])[1].toLowerCase(), d = de[h] || de._default, u.innerHTML = d[1] + s.htmlPrefilter(l) + d[2], w = d[0]; w--; )
                u = u.lastChild;
              s.merge(b, u.childNodes), u = k.firstChild, u.textContent = "";
            }
        for (k.textContent = "", A = 0; l = b[A++]; ) {
          if (r && s.inArray(l, r) > -1) {
            a && a.push(l);
            continue;
          }
          if (v = Re(l), u = le(k.appendChild(l), "script"), v && xt(u), n)
            for (w = 0; l = u[w++]; )
              ri.test(l.type || "") && n.push(l);
        }
        return k;
      }
      var si = /^([^.]*)(?:\.(.+)|)/;
      function Fe() {
        return !0;
      }
      function Be() {
        return !1;
      }
      function Ct(e, t, n, r, a, l) {
        var u, h;
        if (typeof t == "object") {
          typeof n != "string" && (r = r || n, n = void 0);
          for (h in t)
            Ct(e, h, n, r, t[h], l);
          return e;
        }
        if (r == null && a == null ? (a = n, r = n = void 0) : a == null && (typeof n == "string" ? (a = r, r = void 0) : (a = r, r = n, n = void 0)), a === !1)
          a = Be;
        else if (!a)
          return e;
        return l === 1 && (u = a, a = function(d) {
          return s().off(d), u.apply(this, arguments);
        }, a.guid = u.guid || (u.guid = s.guid++)), e.each(function() {
          s.event.add(this, t, a, r, n);
        });
      }
      s.event = {
        global: {},
        add: function(e, t, n, r, a) {
          var l, u, h, d, v, w, k, b, A, z, Y, F = j.get(e);
          if (Ke(e))
            for (n.handler && (l = n, n = l.handler, a = l.selector), a && s.find.matchesSelector(_e, a), n.guid || (n.guid = s.guid++), (d = F.events) || (d = F.events = /* @__PURE__ */ Object.create(null)), (u = F.handle) || (u = F.handle = function(ne) {
              return typeof s < "u" && s.event.triggered !== ne.type ? s.event.dispatch.apply(e, arguments) : void 0;
            }), t = (t || "").match(ve) || [""], v = t.length; v--; )
              h = si.exec(t[v]) || [], A = Y = h[1], z = (h[2] || "").split(".").sort(), A && (k = s.event.special[A] || {}, A = (a ? k.delegateType : k.bindType) || A, k = s.event.special[A] || {}, w = s.extend({
                type: A,
                origType: Y,
                data: r,
                handler: n,
                guid: n.guid,
                selector: a,
                needsContext: a && s.expr.match.needsContext.test(a),
                namespace: z.join(".")
              }, l), (b = d[A]) || (b = d[A] = [], b.delegateCount = 0, (!k.setup || k.setup.call(e, r, z, u) === !1) && e.addEventListener && e.addEventListener(A, u)), k.add && (k.add.call(e, w), w.handler.guid || (w.handler.guid = n.guid)), a ? b.splice(b.delegateCount++, 0, w) : b.push(w), s.event.global[A] = !0);
        },
        // Detach an event or set of events from an element
        remove: function(e, t, n, r, a) {
          var l, u, h, d, v, w, k, b, A, z, Y, F = j.hasData(e) && j.get(e);
          if (!(!F || !(d = F.events))) {
            for (t = (t || "").match(ve) || [""], v = t.length; v--; ) {
              if (h = si.exec(t[v]) || [], A = Y = h[1], z = (h[2] || "").split(".").sort(), !A) {
                for (A in d)
                  s.event.remove(e, A + t[v], n, r, !0);
                continue;
              }
              for (k = s.event.special[A] || {}, A = (r ? k.delegateType : k.bindType) || A, b = d[A] || [], h = h[2] && new RegExp("(^|\\.)" + z.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = l = b.length; l--; )
                w = b[l], (a || Y === w.origType) && (!n || n.guid === w.guid) && (!h || h.test(w.namespace)) && (!r || r === w.selector || r === "**" && w.selector) && (b.splice(l, 1), w.selector && b.delegateCount--, k.remove && k.remove.call(e, w));
              u && !b.length && ((!k.teardown || k.teardown.call(e, z, F.handle) === !1) && s.removeEvent(e, A, F.handle), delete d[A]);
            }
            s.isEmptyObject(d) && j.remove(e, "handle events");
          }
        },
        dispatch: function(e) {
          var t, n, r, a, l, u, h = new Array(arguments.length), d = s.event.fix(e), v = (j.get(this, "events") || /* @__PURE__ */ Object.create(null))[d.type] || [], w = s.event.special[d.type] || {};
          for (h[0] = d, t = 1; t < arguments.length; t++)
            h[t] = arguments[t];
          if (d.delegateTarget = this, !(w.preDispatch && w.preDispatch.call(this, d) === !1)) {
            for (u = s.event.handlers.call(this, d, v), t = 0; (a = u[t++]) && !d.isPropagationStopped(); )
              for (d.currentTarget = a.elem, n = 0; (l = a.handlers[n++]) && !d.isImmediatePropagationStopped(); )
                (!d.rnamespace || l.namespace === !1 || d.rnamespace.test(l.namespace)) && (d.handleObj = l, d.data = l.data, r = ((s.event.special[l.origType] || {}).handle || l.handler).apply(a.elem, h), r !== void 0 && (d.result = r) === !1 && (d.preventDefault(), d.stopPropagation()));
            return w.postDispatch && w.postDispatch.call(this, d), d.result;
          }
        },
        handlers: function(e, t) {
          var n, r, a, l, u, h = [], d = t.delegateCount, v = e.target;
          if (d && // Support: IE <=9
          // Black-hole SVG <use> instance trees (trac-13180)
          v.nodeType && // Support: Firefox <=42
          // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
          // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
          // Support: IE 11 only
          // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
          !(e.type === "click" && e.button >= 1)) {
            for (; v !== this; v = v.parentNode || this)
              if (v.nodeType === 1 && !(e.type === "click" && v.disabled === !0)) {
                for (l = [], u = {}, n = 0; n < d; n++)
                  r = t[n], a = r.selector + " ", u[a] === void 0 && (u[a] = r.needsContext ? s(a, this).index(v) > -1 : s.find(a, this, null, [v]).length), u[a] && l.push(r);
                l.length && h.push({ elem: v, handlers: l });
              }
          }
          return v = this, d < t.length && h.push({ elem: v, handlers: t.slice(d) }), h;
        },
        addProp: function(e, t) {
          Object.defineProperty(s.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: L(t) ? function() {
              if (this.originalEvent)
                return t(this.originalEvent);
            } : function() {
              if (this.originalEvent)
                return this.originalEvent[e];
            },
            set: function(n) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
              });
            }
          });
        },
        fix: function(e) {
          return e[s.expando] ? e : new s.Event(e);
        },
        special: {
          load: {
            // Prevent triggered image.load events from bubbling to window.load
            noBubble: !0
          },
          click: {
            // Utilize native event to ensure correct state for checkable inputs
            setup: function(e) {
              var t = this || e;
              return Ze.test(t.type) && t.click && ee(t, "input") && ft(t, "click", !0), !1;
            },
            trigger: function(e) {
              var t = this || e;
              return Ze.test(t.type) && t.click && ee(t, "input") && ft(t, "click"), !0;
            },
            // For cross-browser consistency, suppress native .click() on links
            // Also prevent it if we're currently inside a leveraged native-event stack
            _default: function(e) {
              var t = e.target;
              return Ze.test(t.type) && t.click && ee(t, "input") && j.get(t, "click") || ee(t, "a");
            }
          },
          beforeunload: {
            postDispatch: function(e) {
              e.result !== void 0 && e.originalEvent && (e.originalEvent.returnValue = e.result);
            }
          }
        }
      };
      function ft(e, t, n) {
        if (!n) {
          j.get(e, t) === void 0 && s.event.add(e, t, Fe);
          return;
        }
        j.set(e, t, !1), s.event.add(e, t, {
          namespace: !1,
          handler: function(r) {
            var a, l = j.get(this, t);
            if (r.isTrigger & 1 && this[t]) {
              if (l)
                (s.event.special[t] || {}).delegateType && r.stopPropagation();
              else if (l = o.call(arguments), j.set(this, t, l), this[t](), a = j.get(this, t), j.set(this, t, !1), l !== a)
                return r.stopImmediatePropagation(), r.preventDefault(), a;
            } else
              l && (j.set(this, t, s.event.trigger(
                l[0],
                l.slice(1),
                this
              )), r.stopPropagation(), r.isImmediatePropagationStopped = Fe);
          }
        });
      }
      s.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
      }, s.Event = function(e, t) {
        if (!(this instanceof s.Event))
          return new s.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === void 0 && // Support: Android <=2.3 only
        e.returnValue === !1 ? Fe : Be, this.target = e.target && e.target.nodeType === 3 ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && s.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[s.expando] = !0;
      }, s.Event.prototype = {
        constructor: s.Event,
        isDefaultPrevented: Be,
        isPropagationStopped: Be,
        isImmediatePropagationStopped: Be,
        isSimulated: !1,
        preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = Fe, e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = Fe, e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = Fe, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
        }
      }, s.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
      }, s.event.addProp), s.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
        function n(r) {
          if (I.documentMode) {
            var a = j.get(this, "handle"), l = s.event.fix(r);
            l.type = r.type === "focusin" ? "focus" : "blur", l.isSimulated = !0, a(r), l.target === l.currentTarget && a(l);
          } else
            s.event.simulate(
              t,
              r.target,
              s.event.fix(r)
            );
        }
        s.event.special[e] = {
          // Utilize native event if possible so blur/focus sequence is correct
          setup: function() {
            var r;
            if (ft(this, e, !0), I.documentMode)
              r = j.get(this, t), r || this.addEventListener(t, n), j.set(this, t, (r || 0) + 1);
            else
              return !1;
          },
          trigger: function() {
            return ft(this, e), !0;
          },
          teardown: function() {
            var r;
            if (I.documentMode)
              r = j.get(this, t) - 1, r ? j.set(this, t, r) : (this.removeEventListener(t, n), j.remove(this, t));
            else
              return !1;
          },
          // Suppress native focus or blur if we're currently inside
          // a leveraged native-event stack
          _default: function(r) {
            return j.get(r.target, e);
          },
          delegateType: t
        }, s.event.special[t] = {
          setup: function() {
            var r = this.ownerDocument || this.document || this, a = I.documentMode ? this : r, l = j.get(a, t);
            l || (I.documentMode ? this.addEventListener(t, n) : r.addEventListener(e, n, !0)), j.set(a, t, (l || 0) + 1);
          },
          teardown: function() {
            var r = this.ownerDocument || this.document || this, a = I.documentMode ? this : r, l = j.get(a, t) - 1;
            l ? j.set(a, t, l) : (I.documentMode ? this.removeEventListener(t, n) : r.removeEventListener(e, n, !0), j.remove(a, t));
          }
        };
      }), s.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function(e, t) {
        s.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function(n) {
            var r, a = this, l = n.relatedTarget, u = n.handleObj;
            return (!l || l !== a && !s.contains(a, l)) && (n.type = u.origType, r = u.handler.apply(this, arguments), n.type = t), r;
          }
        };
      }), s.fn.extend({
        on: function(e, t, n, r) {
          return Ct(this, e, t, n, r);
        },
        one: function(e, t, n, r) {
          return Ct(this, e, t, n, r, 1);
        },
        off: function(e, t, n) {
          var r, a;
          if (e && e.preventDefault && e.handleObj)
            return r = e.handleObj, s(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ), this;
          if (typeof e == "object") {
            for (a in e)
              this.off(a, t, e[a]);
            return this;
          }
          return (t === !1 || typeof t == "function") && (n = t, t = void 0), n === !1 && (n = Be), this.each(function() {
            s.event.remove(this, e, n, t);
          });
        }
      });
      var nn = /<script|<style|<link/i, rn = /checked\s*(?:[^=]|=\s*.checked.)/i, on = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
      function ai(e, t) {
        return ee(e, "table") && ee(t.nodeType !== 11 ? t : t.firstChild, "tr") && s(e).children("tbody")[0] || e;
      }
      function sn(e) {
        return e.type = (e.getAttribute("type") !== null) + "/" + e.type, e;
      }
      function an(e) {
        return (e.type || "").slice(0, 5) === "true/" ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
      }
      function li(e, t) {
        var n, r, a, l, u, h, d;
        if (t.nodeType === 1) {
          if (j.hasData(e) && (l = j.get(e), d = l.events, d)) {
            j.remove(t, "handle events");
            for (a in d)
              for (n = 0, r = d[a].length; n < r; n++)
                s.event.add(t, a, d[a][n]);
          }
          ae.hasData(e) && (u = ae.access(e), h = s.extend({}, u), ae.set(t, h));
        }
      }
      function ln(e, t) {
        var n = t.nodeName.toLowerCase();
        n === "input" && Ze.test(e.type) ? t.checked = e.checked : (n === "input" || n === "textarea") && (t.defaultValue = e.defaultValue);
      }
      function Ue(e, t, n, r) {
        t = c(t);
        var a, l, u, h, d, v, w = 0, k = e.length, b = k - 1, A = t[0], z = L(A);
        if (z || k > 1 && typeof A == "string" && !q.checkClone && rn.test(A))
          return e.each(function(Y) {
            var F = e.eq(Y);
            z && (t[0] = A.call(this, Y, F.html())), Ue(F, t, n, r);
          });
        if (k && (a = oi(t, e[0].ownerDocument, !1, e, r), l = a.firstChild, a.childNodes.length === 1 && (a = l), l || r)) {
          for (u = s.map(le(a, "script"), sn), h = u.length; w < k; w++)
            d = a, w !== b && (d = s.clone(d, !0, !0), h && s.merge(u, le(d, "script"))), n.call(e[w], d, w);
          if (h)
            for (v = u[u.length - 1].ownerDocument, s.map(u, an), w = 0; w < h; w++)
              d = u[w], ri.test(d.type || "") && !j.access(d, "globalEval") && s.contains(v, d) && (d.src && (d.type || "").toLowerCase() !== "module" ? s._evalUrl && !d.noModule && s._evalUrl(d.src, {
                nonce: d.nonce || d.getAttribute("nonce")
              }, v) : Me(d.textContent.replace(on, ""), d, v));
        }
        return e;
      }
      function ui(e, t, n) {
        for (var r, a = t ? s.filter(t, e) : e, l = 0; (r = a[l]) != null; l++)
          !n && r.nodeType === 1 && s.cleanData(le(r)), r.parentNode && (n && Re(r) && xt(le(r, "script")), r.parentNode.removeChild(r));
        return e;
      }
      s.extend({
        htmlPrefilter: function(e) {
          return e;
        },
        clone: function(e, t, n) {
          var r, a, l, u, h = e.cloneNode(!0), d = Re(e);
          if (!q.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !s.isXMLDoc(e))
            for (u = le(h), l = le(e), r = 0, a = l.length; r < a; r++)
              ln(l[r], u[r]);
          if (t)
            if (n)
              for (l = l || le(e), u = u || le(h), r = 0, a = l.length; r < a; r++)
                li(l[r], u[r]);
            else
              li(e, h);
          return u = le(h, "script"), u.length > 0 && xt(u, !d && le(e, "script")), h;
        },
        cleanData: function(e) {
          for (var t, n, r, a = s.event.special, l = 0; (n = e[l]) !== void 0; l++)
            if (Ke(n)) {
              if (t = n[j.expando]) {
                if (t.events)
                  for (r in t.events)
                    a[r] ? s.event.remove(n, r) : s.removeEvent(n, r, t.handle);
                n[j.expando] = void 0;
              }
              n[ae.expando] && (n[ae.expando] = void 0);
            }
        }
      }), s.fn.extend({
        detach: function(e) {
          return ui(this, e, !0);
        },
        remove: function(e) {
          return ui(this, e);
        },
        text: function(e) {
          return Ce(this, function(t) {
            return t === void 0 ? s.text(this) : this.empty().each(function() {
              (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = t);
            });
          }, null, e, arguments.length);
        },
        append: function() {
          return Ue(this, arguments, function(e) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var t = ai(this, e);
              t.appendChild(e);
            }
          });
        },
        prepend: function() {
          return Ue(this, arguments, function(e) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var t = ai(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function() {
          return Ue(this, arguments, function(e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function() {
          return Ue(this, arguments, function(e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function() {
          for (var e, t = 0; (e = this[t]) != null; t++)
            e.nodeType === 1 && (s.cleanData(le(e, !1)), e.textContent = "");
          return this;
        },
        clone: function(e, t) {
          return e = e ?? !1, t = t ?? e, this.map(function() {
            return s.clone(this, e, t);
          });
        },
        html: function(e) {
          return Ce(this, function(t) {
            var n = this[0] || {}, r = 0, a = this.length;
            if (t === void 0 && n.nodeType === 1)
              return n.innerHTML;
            if (typeof t == "string" && !nn.test(t) && !de[(ni.exec(t) || ["", ""])[1].toLowerCase()]) {
              t = s.htmlPrefilter(t);
              try {
                for (; r < a; r++)
                  n = this[r] || {}, n.nodeType === 1 && (s.cleanData(le(n, !1)), n.innerHTML = t);
                n = 0;
              } catch {
              }
            }
            n && this.empty().append(t);
          }, null, e, arguments.length);
        },
        replaceWith: function() {
          var e = [];
          return Ue(this, arguments, function(t) {
            var n = this.parentNode;
            s.inArray(this, e) < 0 && (s.cleanData(le(this)), n && n.replaceChild(t, this));
          }, e);
        }
      }), s.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function(e, t) {
        s.fn[e] = function(n) {
          for (var r, a = [], l = s(n), u = l.length - 1, h = 0; h <= u; h++)
            r = h === u ? this : this.clone(!0), s(l[h])[t](r), p.apply(a, r.get());
          return this.pushStack(a);
        };
      });
      var At = new RegExp("^(" + ei + ")(?!px)[a-z%]+$", "i"), Et = /^--/, dt = function(e) {
        var t = e.ownerDocument.defaultView;
        return (!t || !t.opener) && (t = R), t.getComputedStyle(e);
      }, fi = function(e, t, n) {
        var r, a, l = {};
        for (a in t)
          l[a] = e.style[a], e.style[a] = t[a];
        r = n.call(e);
        for (a in t)
          e.style[a] = l[a];
        return r;
      }, un = new RegExp(Ae.join("|"), "i");
      (function() {
        function e() {
          if (v) {
            d.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", v.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", _e.appendChild(d).appendChild(v);
            var w = R.getComputedStyle(v);
            n = w.top !== "1%", h = t(w.marginLeft) === 12, v.style.right = "60%", l = t(w.right) === 36, r = t(w.width) === 36, v.style.position = "absolute", a = t(v.offsetWidth / 3) === 12, _e.removeChild(d), v = null;
          }
        }
        function t(w) {
          return Math.round(parseFloat(w));
        }
        var n, r, a, l, u, h, d = I.createElement("div"), v = I.createElement("div");
        v.style && (v.style.backgroundClip = "content-box", v.cloneNode(!0).style.backgroundClip = "", q.clearCloneStyle = v.style.backgroundClip === "content-box", s.extend(q, {
          boxSizingReliable: function() {
            return e(), r;
          },
          pixelBoxStyles: function() {
            return e(), l;
          },
          pixelPosition: function() {
            return e(), n;
          },
          reliableMarginLeft: function() {
            return e(), h;
          },
          scrollboxSize: function() {
            return e(), a;
          },
          // Support: IE 9 - 11+, Edge 15 - 18+
          // IE/Edge misreport `getComputedStyle` of table rows with width/height
          // set in CSS while `offset*` properties report correct values.
          // Behavior in IE 9 is more subtle than in newer versions & it passes
          // some versions of this test; make sure not to make it pass there!
          //
          // Support: Firefox 70+
          // Only Firefox includes border widths
          // in computed dimensions. (gh-4529)
          reliableTrDimensions: function() {
            var w, k, b, A;
            return u == null && (w = I.createElement("table"), k = I.createElement("tr"), b = I.createElement("div"), w.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", k.style.cssText = "border:1px solid", k.style.height = "1px", b.style.height = "9px", b.style.display = "block", _e.appendChild(w).appendChild(k).appendChild(b), A = R.getComputedStyle(k), u = parseInt(A.height, 10) + parseInt(A.borderTopWidth, 10) + parseInt(A.borderBottomWidth, 10) === k.offsetHeight, _e.removeChild(w)), u;
          }
        }));
      })();
      function et(e, t, n) {
        var r, a, l, u, h = Et.test(t), d = e.style;
        return n = n || dt(e), n && (u = n.getPropertyValue(t) || n[t], h && u && (u = u.replace(Ge, "$1") || void 0), u === "" && !Re(e) && (u = s.style(e, t)), !q.pixelBoxStyles() && At.test(u) && un.test(t) && (r = d.width, a = d.minWidth, l = d.maxWidth, d.minWidth = d.maxWidth = d.width = u, u = n.width, d.width = r, d.minWidth = a, d.maxWidth = l)), u !== void 0 ? (
          // Support: IE <=9 - 11 only
          // IE returns zIndex value as an integer.
          u + ""
        ) : u;
      }
      function di(e, t) {
        return {
          get: function() {
            if (e()) {
              delete this.get;
              return;
            }
            return (this.get = t).apply(this, arguments);
          }
        };
      }
      var ci = ["Webkit", "Moz", "ms"], pi = I.createElement("div").style, hi = {};
      function fn(e) {
        for (var t = e[0].toUpperCase() + e.slice(1), n = ci.length; n--; )
          if (e = ci[n] + t, e in pi)
            return e;
      }
      function $t(e) {
        var t = s.cssProps[e] || hi[e];
        return t || (e in pi ? e : hi[e] = fn(e) || e);
      }
      var dn = /^(none|table(?!-c[ea]).+)/, cn = { position: "absolute", visibility: "hidden", display: "block" }, gi = {
        letterSpacing: "0",
        fontWeight: "400"
      };
      function yi(e, t, n) {
        var r = Je.exec(t);
        return r ? (
          // Guard against undefined "subtract", e.g., when used as in cssHooks
          Math.max(0, r[2] - (n || 0)) + (r[3] || "px")
        ) : t;
      }
      function Dt(e, t, n, r, a, l) {
        var u = t === "width" ? 1 : 0, h = 0, d = 0, v = 0;
        if (n === (r ? "border" : "content"))
          return 0;
        for (; u < 4; u += 2)
          n === "margin" && (v += s.css(e, n + Ae[u], !0, a)), r ? (n === "content" && (d -= s.css(e, "padding" + Ae[u], !0, a)), n !== "margin" && (d -= s.css(e, "border" + Ae[u] + "Width", !0, a))) : (d += s.css(e, "padding" + Ae[u], !0, a), n !== "padding" ? d += s.css(e, "border" + Ae[u] + "Width", !0, a) : h += s.css(e, "border" + Ae[u] + "Width", !0, a));
        return !r && l >= 0 && (d += Math.max(0, Math.ceil(
          e["offset" + t[0].toUpperCase() + t.slice(1)] - l - d - h - 0.5
          // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
          // Use an explicit zero to avoid NaN (gh-3964)
        )) || 0), d + v;
      }
      function vi(e, t, n) {
        var r = dt(e), a = !q.boxSizingReliable() || n, l = a && s.css(e, "boxSizing", !1, r) === "border-box", u = l, h = et(e, t, r), d = "offset" + t[0].toUpperCase() + t.slice(1);
        if (At.test(h)) {
          if (!n)
            return h;
          h = "auto";
        }
        return (!q.boxSizingReliable() && l || // Support: IE 10 - 11+, Edge 15 - 18+
        // IE/Edge misreport `getComputedStyle` of table rows with width/height
        // set in CSS while `offset*` properties report correct values.
        // Interestingly, in some cases IE 9 doesn't suffer from this issue.
        !q.reliableTrDimensions() && ee(e, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
        // This happens for inline elements with no explicit setting (gh-3571)
        h === "auto" || // Support: Android <=4.1 - 4.3 only
        // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
        !parseFloat(h) && s.css(e, "display", !1, r) === "inline") && // Make sure the element is visible & connected
        e.getClientRects().length && (l = s.css(e, "boxSizing", !1, r) === "border-box", u = d in e, u && (h = e[d])), h = parseFloat(h) || 0, h + Dt(
          e,
          t,
          n || (l ? "border" : "content"),
          u,
          r,
          // Provide the current computed size to request scroll gutter calculation (gh-3589)
          h
        ) + "px";
      }
      s.extend({
        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
          opacity: {
            get: function(e, t) {
              if (t) {
                var n = et(e, "opacity");
                return n === "" ? "1" : n;
              }
            }
          }
        },
        // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
          animationIterationCount: !0,
          aspectRatio: !0,
          borderImageSlice: !0,
          columnCount: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          scale: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          // SVG-related
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0
        },
        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {},
        // Get and set the style property on a DOM Node
        style: function(e, t, n, r) {
          if (!(!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)) {
            var a, l, u, h = me(t), d = Et.test(t), v = e.style;
            if (d || (t = $t(h)), u = s.cssHooks[t] || s.cssHooks[h], n !== void 0) {
              if (l = typeof n, l === "string" && (a = Je.exec(n)) && a[1] && (n = ti(e, t, a), l = "number"), n == null || n !== n)
                return;
              l === "number" && !d && (n += a && a[3] || (s.cssNumber[h] ? "" : "px")), !q.clearCloneStyle && n === "" && t.indexOf("background") === 0 && (v[t] = "inherit"), (!u || !("set" in u) || (n = u.set(e, n, r)) !== void 0) && (d ? v.setProperty(t, n) : v[t] = n);
            } else
              return u && "get" in u && (a = u.get(e, !1, r)) !== void 0 ? a : v[t];
          }
        },
        css: function(e, t, n, r) {
          var a, l, u, h = me(t), d = Et.test(t);
          return d || (t = $t(h)), u = s.cssHooks[t] || s.cssHooks[h], u && "get" in u && (a = u.get(e, !0, n)), a === void 0 && (a = et(e, t, r)), a === "normal" && t in gi && (a = gi[t]), n === "" || n ? (l = parseFloat(a), n === !0 || isFinite(l) ? l || 0 : a) : a;
        }
      }), s.each(["height", "width"], function(e, t) {
        s.cssHooks[t] = {
          get: function(n, r, a) {
            if (r)
              return dn.test(s.css(n, "display")) && // Support: Safari 8+
              // Table columns in Safari have non-zero offsetWidth & zero
              // getBoundingClientRect().width unless display is changed.
              // Support: IE <=11 only
              // Running getBoundingClientRect on a disconnected node
              // in IE throws an error.
              (!n.getClientRects().length || !n.getBoundingClientRect().width) ? fi(n, cn, function() {
                return vi(n, t, a);
              }) : vi(n, t, a);
          },
          set: function(n, r, a) {
            var l, u = dt(n), h = !q.scrollboxSize() && u.position === "absolute", d = h || a, v = d && s.css(n, "boxSizing", !1, u) === "border-box", w = a ? Dt(
              n,
              t,
              a,
              v,
              u
            ) : 0;
            return v && h && (w -= Math.ceil(
              n["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(u[t]) - Dt(n, t, "border", !1, u) - 0.5
            )), w && (l = Je.exec(r)) && (l[3] || "px") !== "px" && (n.style[t] = r, r = s.css(n, t)), yi(n, r, w);
          }
        };
      }), s.cssHooks.marginLeft = di(
        q.reliableMarginLeft,
        function(e, t) {
          if (t)
            return (parseFloat(et(e, "marginLeft")) || e.getBoundingClientRect().left - fi(e, { marginLeft: 0 }, function() {
              return e.getBoundingClientRect().left;
            })) + "px";
        }
      ), s.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function(e, t) {
        s.cssHooks[e + t] = {
          expand: function(n) {
            for (var r = 0, a = {}, l = typeof n == "string" ? n.split(" ") : [n]; r < 4; r++)
              a[e + Ae[r] + t] = l[r] || l[r - 2] || l[0];
            return a;
          }
        }, e !== "margin" && (s.cssHooks[e + t].set = yi);
      }), s.fn.extend({
        css: function(e, t) {
          return Ce(this, function(n, r, a) {
            var l, u, h = {}, d = 0;
            if (Array.isArray(r)) {
              for (l = dt(n), u = r.length; d < u; d++)
                h[r[d]] = s.css(n, r[d], !1, l);
              return h;
            }
            return a !== void 0 ? s.style(n, r, a) : s.css(n, r);
          }, e, t, arguments.length > 1);
        }
      });
      function ue(e, t, n, r, a) {
        return new ue.prototype.init(e, t, n, r, a);
      }
      s.Tween = ue, ue.prototype = {
        constructor: ue,
        init: function(e, t, n, r, a, l) {
          this.elem = e, this.prop = n, this.easing = a || s.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = l || (s.cssNumber[n] ? "" : "px");
        },
        cur: function() {
          var e = ue.propHooks[this.prop];
          return e && e.get ? e.get(this) : ue.propHooks._default.get(this);
        },
        run: function(e) {
          var t, n = ue.propHooks[this.prop];
          return this.options.duration ? this.pos = t = s.easing[this.easing](
            e,
            this.options.duration * e,
            0,
            1,
            this.options.duration
          ) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ue.propHooks._default.set(this), this;
        }
      }, ue.prototype.init.prototype = ue.prototype, ue.propHooks = {
        _default: {
          get: function(e) {
            var t;
            return e.elem.nodeType !== 1 || e.elem[e.prop] != null && e.elem.style[e.prop] == null ? e.elem[e.prop] : (t = s.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t);
          },
          set: function(e) {
            s.fx.step[e.prop] ? s.fx.step[e.prop](e) : e.elem.nodeType === 1 && (s.cssHooks[e.prop] || e.elem.style[$t(e.prop)] != null) ? s.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
          }
        }
      }, ue.propHooks.scrollTop = ue.propHooks.scrollLeft = {
        set: function(e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
      }, s.easing = {
        linear: function(e) {
          return e;
        },
        swing: function(e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing"
      }, s.fx = ue.prototype.init, s.fx.step = {};
      var Ve, ct, pn = /^(?:toggle|show|hide)$/, hn = /queueHooks$/;
      function Ot() {
        ct && (I.hidden === !1 && R.requestAnimationFrame ? R.requestAnimationFrame(Ot) : R.setTimeout(Ot, s.fx.interval), s.fx.tick());
      }
      function mi() {
        return R.setTimeout(function() {
          Ve = void 0;
        }), Ve = Date.now();
      }
      function pt(e, t) {
        var n, r = 0, a = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
          n = Ae[r], a["margin" + n] = a["padding" + n] = e;
        return t && (a.opacity = a.width = e), a;
      }
      function bi(e, t, n) {
        for (var r, a = (ge.tweeners[t] || []).concat(ge.tweeners["*"]), l = 0, u = a.length; l < u; l++)
          if (r = a[l].call(n, t, e))
            return r;
      }
      function gn(e, t, n) {
        var r, a, l, u, h, d, v, w, k = "width" in t || "height" in t, b = this, A = {}, z = e.style, Y = e.nodeType && ut(e), F = j.get(e, "fxshow");
        n.queue || (u = s._queueHooks(e, "fx"), u.unqueued == null && (u.unqueued = 0, h = u.empty.fire, u.empty.fire = function() {
          u.unqueued || h();
        }), u.unqueued++, b.always(function() {
          b.always(function() {
            u.unqueued--, s.queue(e, "fx").length || u.empty.fire();
          });
        }));
        for (r in t)
          if (a = t[r], pn.test(a)) {
            if (delete t[r], l = l || a === "toggle", a === (Y ? "hide" : "show"))
              if (a === "show" && F && F[r] !== void 0)
                Y = !0;
              else
                continue;
            A[r] = F && F[r] || s.style(e, r);
          }
        if (d = !s.isEmptyObject(t), !(!d && s.isEmptyObject(A))) {
          k && e.nodeType === 1 && (n.overflow = [z.overflow, z.overflowX, z.overflowY], v = F && F.display, v == null && (v = j.get(e, "display")), w = s.css(e, "display"), w === "none" && (v ? w = v : (We([e], !0), v = e.style.display || v, w = s.css(e, "display"), We([e]))), (w === "inline" || w === "inline-block" && v != null) && s.css(e, "float") === "none" && (d || (b.done(function() {
            z.display = v;
          }), v == null && (w = z.display, v = w === "none" ? "" : w)), z.display = "inline-block")), n.overflow && (z.overflow = "hidden", b.always(function() {
            z.overflow = n.overflow[0], z.overflowX = n.overflow[1], z.overflowY = n.overflow[2];
          })), d = !1;
          for (r in A)
            d || (F ? "hidden" in F && (Y = F.hidden) : F = j.access(e, "fxshow", { display: v }), l && (F.hidden = !Y), Y && We([e], !0), b.done(function() {
              Y || We([e]), j.remove(e, "fxshow");
              for (r in A)
                s.style(e, r, A[r]);
            })), d = bi(Y ? F[r] : 0, r, b), r in F || (F[r] = d.start, Y && (d.end = d.start, d.start = 0));
        }
      }
      function yn(e, t) {
        var n, r, a, l, u;
        for (n in e)
          if (r = me(n), a = t[r], l = e[n], Array.isArray(l) && (a = l[1], l = e[n] = l[0]), n !== r && (e[r] = l, delete e[n]), u = s.cssHooks[r], u && "expand" in u) {
            l = u.expand(l), delete e[r];
            for (n in l)
              n in e || (e[n] = l[n], t[n] = a);
          } else
            t[r] = a;
      }
      function ge(e, t, n) {
        var r, a, l = 0, u = ge.prefilters.length, h = s.Deferred().always(function() {
          delete d.elem;
        }), d = function() {
          if (a)
            return !1;
          for (var k = Ve || mi(), b = Math.max(0, v.startTime + v.duration - k), A = b / v.duration || 0, z = 1 - A, Y = 0, F = v.tweens.length; Y < F; Y++)
            v.tweens[Y].run(z);
          return h.notifyWith(e, [v, z, b]), z < 1 && F ? b : (F || h.notifyWith(e, [v, 1, 0]), h.resolveWith(e, [v]), !1);
        }, v = h.promise({
          elem: e,
          props: s.extend({}, t),
          opts: s.extend(!0, {
            specialEasing: {},
            easing: s.easing._default
          }, n),
          originalProperties: t,
          originalOptions: n,
          startTime: Ve || mi(),
          duration: n.duration,
          tweens: [],
          createTween: function(k, b) {
            var A = s.Tween(
              e,
              v.opts,
              k,
              b,
              v.opts.specialEasing[k] || v.opts.easing
            );
            return v.tweens.push(A), A;
          },
          stop: function(k) {
            var b = 0, A = k ? v.tweens.length : 0;
            if (a)
              return this;
            for (a = !0; b < A; b++)
              v.tweens[b].run(1);
            return k ? (h.notifyWith(e, [v, 1, 0]), h.resolveWith(e, [v, k])) : h.rejectWith(e, [v, k]), this;
          }
        }), w = v.props;
        for (yn(w, v.opts.specialEasing); l < u; l++)
          if (r = ge.prefilters[l].call(v, e, w, v.opts), r)
            return L(r.stop) && (s._queueHooks(v.elem, v.opts.queue).stop = r.stop.bind(r)), r;
        return s.map(w, bi, v), L(v.opts.start) && v.opts.start.call(e, v), v.progress(v.opts.progress).done(v.opts.done, v.opts.complete).fail(v.opts.fail).always(v.opts.always), s.fx.timer(
          s.extend(d, {
            elem: e,
            anim: v,
            queue: v.opts.queue
          })
        ), v;
      }
      s.Animation = s.extend(ge, {
        tweeners: {
          "*": [function(e, t) {
            var n = this.createTween(e, t);
            return ti(n.elem, e, Je.exec(t), n), n;
          }]
        },
        tweener: function(e, t) {
          L(e) ? (t = e, e = ["*"]) : e = e.match(ve);
          for (var n, r = 0, a = e.length; r < a; r++)
            n = e[r], ge.tweeners[n] = ge.tweeners[n] || [], ge.tweeners[n].unshift(t);
        },
        prefilters: [gn],
        prefilter: function(e, t) {
          t ? ge.prefilters.unshift(e) : ge.prefilters.push(e);
        }
      }), s.speed = function(e, t, n) {
        var r = e && typeof e == "object" ? s.extend({}, e) : {
          complete: n || !n && t || L(e) && e,
          duration: e,
          easing: n && t || t && !L(t) && t
        };
        return s.fx.off ? r.duration = 0 : typeof r.duration != "number" && (r.duration in s.fx.speeds ? r.duration = s.fx.speeds[r.duration] : r.duration = s.fx.speeds._default), (r.queue == null || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
          L(r.old) && r.old.call(this), r.queue && s.dequeue(this, r.queue);
        }, r;
      }, s.fn.extend({
        fadeTo: function(e, t, n, r) {
          return this.filter(ut).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
        },
        animate: function(e, t, n, r) {
          var a = s.isEmptyObject(e), l = s.speed(t, n, r), u = function() {
            var h = ge(this, s.extend({}, e), l);
            (a || j.get(this, "finish")) && h.stop(!0);
          };
          return u.finish = u, a || l.queue === !1 ? this.each(u) : this.queue(l.queue, u);
        },
        stop: function(e, t, n) {
          var r = function(a) {
            var l = a.stop;
            delete a.stop, l(n);
          };
          return typeof e != "string" && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function() {
            var a = !0, l = e != null && e + "queueHooks", u = s.timers, h = j.get(this);
            if (l)
              h[l] && h[l].stop && r(h[l]);
            else
              for (l in h)
                h[l] && h[l].stop && hn.test(l) && r(h[l]);
            for (l = u.length; l--; )
              u[l].elem === this && (e == null || u[l].queue === e) && (u[l].anim.stop(n), a = !1, u.splice(l, 1));
            (a || !n) && s.dequeue(this, e);
          });
        },
        finish: function(e) {
          return e !== !1 && (e = e || "fx"), this.each(function() {
            var t, n = j.get(this), r = n[e + "queue"], a = n[e + "queueHooks"], l = s.timers, u = r ? r.length : 0;
            for (n.finish = !0, s.queue(this, e, []), a && a.stop && a.stop.call(this, !0), t = l.length; t--; )
              l[t].elem === this && l[t].queue === e && (l[t].anim.stop(!0), l.splice(t, 1));
            for (t = 0; t < u; t++)
              r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish;
          });
        }
      }), s.each(["toggle", "show", "hide"], function(e, t) {
        var n = s.fn[t];
        s.fn[t] = function(r, a, l) {
          return r == null || typeof r == "boolean" ? n.apply(this, arguments) : this.animate(pt(t, !0), r, a, l);
        };
      }), s.each({
        slideDown: pt("show"),
        slideUp: pt("hide"),
        slideToggle: pt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
      }, function(e, t) {
        s.fn[e] = function(n, r, a) {
          return this.animate(t, n, r, a);
        };
      }), s.timers = [], s.fx.tick = function() {
        var e, t = 0, n = s.timers;
        for (Ve = Date.now(); t < n.length; t++)
          e = n[t], !e() && n[t] === e && n.splice(t--, 1);
        n.length || s.fx.stop(), Ve = void 0;
      }, s.fx.timer = function(e) {
        s.timers.push(e), s.fx.start();
      }, s.fx.interval = 13, s.fx.start = function() {
        ct || (ct = !0, Ot());
      }, s.fx.stop = function() {
        ct = null;
      }, s.fx.speeds = {
        slow: 600,
        fast: 200,
        // Default speed
        _default: 400
      }, s.fn.delay = function(e, t) {
        return e = s.fx && s.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(n, r) {
          var a = R.setTimeout(n, e);
          r.stop = function() {
            R.clearTimeout(a);
          };
        });
      }, function() {
        var e = I.createElement("input"), t = I.createElement("select"), n = t.appendChild(I.createElement("option"));
        e.type = "checkbox", q.checkOn = e.value !== "", q.optSelected = n.selected, e = I.createElement("input"), e.value = "t", e.type = "radio", q.radioValue = e.value === "t";
      }();
      var Ti, tt = s.expr.attrHandle;
      s.fn.extend({
        attr: function(e, t) {
          return Ce(this, s.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
          return this.each(function() {
            s.removeAttr(this, e);
          });
        }
      }), s.extend({
        attr: function(e, t, n) {
          var r, a, l = e.nodeType;
          if (!(l === 3 || l === 8 || l === 2)) {
            if (typeof e.getAttribute > "u")
              return s.prop(e, t, n);
            if ((l !== 1 || !s.isXMLDoc(e)) && (a = s.attrHooks[t.toLowerCase()] || (s.expr.match.bool.test(t) ? Ti : void 0)), n !== void 0) {
              if (n === null) {
                s.removeAttr(e, t);
                return;
              }
              return a && "set" in a && (r = a.set(e, n, t)) !== void 0 ? r : (e.setAttribute(t, n + ""), n);
            }
            return a && "get" in a && (r = a.get(e, t)) !== null ? r : (r = s.find.attr(e, t), r ?? void 0);
          }
        },
        attrHooks: {
          type: {
            set: function(e, t) {
              if (!q.radioValue && t === "radio" && ee(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t;
              }
            }
          }
        },
        removeAttr: function(e, t) {
          var n, r = 0, a = t && t.match(ve);
          if (a && e.nodeType === 1)
            for (; n = a[r++]; )
              e.removeAttribute(n);
        }
      }), Ti = {
        set: function(e, t, n) {
          return t === !1 ? s.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
      }, s.each(s.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = tt[t] || s.find.attr;
        tt[t] = function(r, a, l) {
          var u, h, d = a.toLowerCase();
          return l || (h = tt[d], tt[d] = u, u = n(r, a, l) != null ? d : null, tt[d] = h), u;
        };
      });
      var vn = /^(?:input|select|textarea|button)$/i, mn = /^(?:a|area)$/i;
      s.fn.extend({
        prop: function(e, t) {
          return Ce(this, s.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
          return this.each(function() {
            delete this[s.propFix[e] || e];
          });
        }
      }), s.extend({
        prop: function(e, t, n) {
          var r, a, l = e.nodeType;
          if (!(l === 3 || l === 8 || l === 2))
            return (l !== 1 || !s.isXMLDoc(e)) && (t = s.propFix[t] || t, a = s.propHooks[t]), n !== void 0 ? a && "set" in a && (r = a.set(e, n, t)) !== void 0 ? r : e[t] = n : a && "get" in a && (r = a.get(e, t)) !== null ? r : e[t];
        },
        propHooks: {
          tabIndex: {
            get: function(e) {
              var t = s.find.attr(e, "tabindex");
              return t ? parseInt(t, 10) : vn.test(e.nodeName) || mn.test(e.nodeName) && e.href ? 0 : -1;
            }
          }
        },
        propFix: {
          for: "htmlFor",
          class: "className"
        }
      }), q.optSelected || (s.propHooks.selected = {
        get: function(e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function(e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
      }), s.each([
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
      ], function() {
        s.propFix[this.toLowerCase()] = this;
      });
      function He(e) {
        var t = e.match(ve) || [];
        return t.join(" ");
      }
      function je(e) {
        return e.getAttribute && e.getAttribute("class") || "";
      }
      function Nt(e) {
        return Array.isArray(e) ? e : typeof e == "string" ? e.match(ve) || [] : [];
      }
      s.fn.extend({
        addClass: function(e) {
          var t, n, r, a, l, u;
          return L(e) ? this.each(function(h) {
            s(this).addClass(e.call(this, h, je(this)));
          }) : (t = Nt(e), t.length ? this.each(function() {
            if (r = je(this), n = this.nodeType === 1 && " " + He(r) + " ", n) {
              for (l = 0; l < t.length; l++)
                a = t[l], n.indexOf(" " + a + " ") < 0 && (n += a + " ");
              u = He(n), r !== u && this.setAttribute("class", u);
            }
          }) : this);
        },
        removeClass: function(e) {
          var t, n, r, a, l, u;
          return L(e) ? this.each(function(h) {
            s(this).removeClass(e.call(this, h, je(this)));
          }) : arguments.length ? (t = Nt(e), t.length ? this.each(function() {
            if (r = je(this), n = this.nodeType === 1 && " " + He(r) + " ", n) {
              for (l = 0; l < t.length; l++)
                for (a = t[l]; n.indexOf(" " + a + " ") > -1; )
                  n = n.replace(" " + a + " ", " ");
              u = He(n), r !== u && this.setAttribute("class", u);
            }
          }) : this) : this.attr("class", "");
        },
        toggleClass: function(e, t) {
          var n, r, a, l, u = typeof e, h = u === "string" || Array.isArray(e);
          return L(e) ? this.each(function(d) {
            s(this).toggleClass(
              e.call(this, d, je(this), t),
              t
            );
          }) : typeof t == "boolean" && h ? t ? this.addClass(e) : this.removeClass(e) : (n = Nt(e), this.each(function() {
            if (h)
              for (l = s(this), a = 0; a < n.length; a++)
                r = n[a], l.hasClass(r) ? l.removeClass(r) : l.addClass(r);
            else
              (e === void 0 || u === "boolean") && (r = je(this), r && j.set(this, "__className__", r), this.setAttribute && this.setAttribute(
                "class",
                r || e === !1 ? "" : j.get(this, "__className__") || ""
              ));
          }));
        },
        hasClass: function(e) {
          var t, n, r = 0;
          for (t = " " + e + " "; n = this[r++]; )
            if (n.nodeType === 1 && (" " + He(je(n)) + " ").indexOf(t) > -1)
              return !0;
          return !1;
        }
      });
      var bn = /\r/g;
      s.fn.extend({
        val: function(e) {
          var t, n, r, a = this[0];
          return arguments.length ? (r = L(e), this.each(function(l) {
            var u;
            this.nodeType === 1 && (r ? u = e.call(this, l, s(this).val()) : u = e, u == null ? u = "" : typeof u == "number" ? u += "" : Array.isArray(u) && (u = s.map(u, function(h) {
              return h == null ? "" : h + "";
            })), t = s.valHooks[this.type] || s.valHooks[this.nodeName.toLowerCase()], (!t || !("set" in t) || t.set(this, u, "value") === void 0) && (this.value = u));
          })) : a ? (t = s.valHooks[a.type] || s.valHooks[a.nodeName.toLowerCase()], t && "get" in t && (n = t.get(a, "value")) !== void 0 ? n : (n = a.value, typeof n == "string" ? n.replace(bn, "") : n ?? "")) : void 0;
        }
      }), s.extend({
        valHooks: {
          option: {
            get: function(e) {
              var t = s.find.attr(e, "value");
              return t ?? // Support: IE <=10 - 11 only
              // option.text throws exceptions (trac-14686, trac-14858)
              // Strip and collapse whitespace
              // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
              He(s.text(e));
            }
          },
          select: {
            get: function(e) {
              var t, n, r, a = e.options, l = e.selectedIndex, u = e.type === "select-one", h = u ? null : [], d = u ? l + 1 : a.length;
              for (l < 0 ? r = d : r = u ? l : 0; r < d; r++)
                if (n = a[r], (n.selected || r === l) && // Don't return options that are disabled or in a disabled optgroup
                !n.disabled && (!n.parentNode.disabled || !ee(n.parentNode, "optgroup"))) {
                  if (t = s(n).val(), u)
                    return t;
                  h.push(t);
                }
              return h;
            },
            set: function(e, t) {
              for (var n, r, a = e.options, l = s.makeArray(t), u = a.length; u--; )
                r = a[u], (r.selected = s.inArray(s.valHooks.option.get(r), l) > -1) && (n = !0);
              return n || (e.selectedIndex = -1), l;
            }
          }
        }
      }), s.each(["radio", "checkbox"], function() {
        s.valHooks[this] = {
          set: function(e, t) {
            if (Array.isArray(t))
              return e.checked = s.inArray(s(e).val(), t) > -1;
          }
        }, q.checkOn || (s.valHooks[this].get = function(e) {
          return e.getAttribute("value") === null ? "on" : e.value;
        });
      });
      var it = R.location, wi = { guid: Date.now() }, _t = /\?/;
      s.parseXML = function(e) {
        var t, n;
        if (!e || typeof e != "string")
          return null;
        try {
          t = new R.DOMParser().parseFromString(e, "text/xml");
        } catch {
        }
        return n = t && t.getElementsByTagName("parsererror")[0], (!t || n) && s.error("Invalid XML: " + (n ? s.map(n.childNodes, function(r) {
          return r.textContent;
        }).join(`
`) : e)), t;
      };
      var Si = /^(?:focusinfocus|focusoutblur)$/, ki = function(e) {
        e.stopPropagation();
      };
      s.extend(s.event, {
        trigger: function(e, t, n, r) {
          var a, l, u, h, d, v, w, k, b = [n || I], A = V.call(e, "type") ? e.type : e, z = V.call(e, "namespace") ? e.namespace.split(".") : [];
          if (l = k = u = n = n || I, !(n.nodeType === 3 || n.nodeType === 8) && !Si.test(A + s.event.triggered) && (A.indexOf(".") > -1 && (z = A.split("."), A = z.shift(), z.sort()), d = A.indexOf(":") < 0 && "on" + A, e = e[s.expando] ? e : new s.Event(A, typeof e == "object" && e), e.isTrigger = r ? 2 : 3, e.namespace = z.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + z.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = t == null ? [e] : s.makeArray(t, [e]), w = s.event.special[A] || {}, !(!r && w.trigger && w.trigger.apply(n, t) === !1))) {
            if (!r && !w.noBubble && !he(n)) {
              for (h = w.delegateType || A, Si.test(h + A) || (l = l.parentNode); l; l = l.parentNode)
                b.push(l), u = l;
              u === (n.ownerDocument || I) && b.push(u.defaultView || u.parentWindow || R);
            }
            for (a = 0; (l = b[a++]) && !e.isPropagationStopped(); )
              k = l, e.type = a > 1 ? h : w.bindType || A, v = (j.get(l, "events") || /* @__PURE__ */ Object.create(null))[e.type] && j.get(l, "handle"), v && v.apply(l, t), v = d && l[d], v && v.apply && Ke(l) && (e.result = v.apply(l, t), e.result === !1 && e.preventDefault());
            return e.type = A, !r && !e.isDefaultPrevented() && (!w._default || w._default.apply(b.pop(), t) === !1) && Ke(n) && d && L(n[A]) && !he(n) && (u = n[d], u && (n[d] = null), s.event.triggered = A, e.isPropagationStopped() && k.addEventListener(A, ki), n[A](), e.isPropagationStopped() && k.removeEventListener(A, ki), s.event.triggered = void 0, u && (n[d] = u)), e.result;
          }
        },
        // Piggyback on a donor event to simulate a different one
        // Used only for `focus(in | out)` events
        simulate: function(e, t, n) {
          var r = s.extend(
            new s.Event(),
            n,
            {
              type: e,
              isSimulated: !0
            }
          );
          s.event.trigger(r, null, t);
        }
      }), s.fn.extend({
        trigger: function(e, t) {
          return this.each(function() {
            s.event.trigger(e, t, this);
          });
        },
        triggerHandler: function(e, t) {
          var n = this[0];
          if (n)
            return s.event.trigger(e, t, n, !0);
        }
      });
      var Tn = /\[\]$/, xi = /\r?\n/g, wn = /^(?:submit|button|image|reset|file)$/i, Sn = /^(?:input|select|textarea|keygen)/i;
      function Ht(e, t, n, r) {
        var a;
        if (Array.isArray(t))
          s.each(t, function(l, u) {
            n || Tn.test(e) ? r(e, u) : Ht(
              e + "[" + (typeof u == "object" && u != null ? l : "") + "]",
              u,
              n,
              r
            );
          });
        else if (!n && qe(t) === "object")
          for (a in t)
            Ht(e + "[" + a + "]", t[a], n, r);
        else
          r(e, t);
      }
      s.param = function(e, t) {
        var n, r = [], a = function(l, u) {
          var h = L(u) ? u() : u;
          r[r.length] = encodeURIComponent(l) + "=" + encodeURIComponent(h ?? "");
        };
        if (e == null)
          return "";
        if (Array.isArray(e) || e.jquery && !s.isPlainObject(e))
          s.each(e, function() {
            a(this.name, this.value);
          });
        else
          for (n in e)
            Ht(n, e[n], t, a);
        return r.join("&");
      }, s.fn.extend({
        serialize: function() {
          return s.param(this.serializeArray());
        },
        serializeArray: function() {
          return this.map(function() {
            var e = s.prop(this, "elements");
            return e ? s.makeArray(e) : this;
          }).filter(function() {
            var e = this.type;
            return this.name && !s(this).is(":disabled") && Sn.test(this.nodeName) && !wn.test(e) && (this.checked || !Ze.test(e));
          }).map(function(e, t) {
            var n = s(this).val();
            return n == null ? null : Array.isArray(n) ? s.map(n, function(r) {
              return { name: t.name, value: r.replace(xi, `\r
`) };
            }) : { name: t.name, value: n.replace(xi, `\r
`) };
          }).get();
        }
      });
      var kn = /%20/g, xn = /#.*$/, Cn = /([?&])_=[^&]*/, An = /^(.*?):[ \t]*([^\r\n]*)$/mg, En = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, $n = /^(?:GET|HEAD)$/, Dn = /^\/\//, Ci = {}, jt = {}, Ai = "*/".concat("*"), Pt = I.createElement("a");
      Pt.href = it.href;
      function Ei(e) {
        return function(t, n) {
          typeof t != "string" && (n = t, t = "*");
          var r, a = 0, l = t.toLowerCase().match(ve) || [];
          if (L(n))
            for (; r = l[a++]; )
              r[0] === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        };
      }
      function $i(e, t, n, r) {
        var a = {}, l = e === jt;
        function u(h) {
          var d;
          return a[h] = !0, s.each(e[h] || [], function(v, w) {
            var k = w(t, n, r);
            if (typeof k == "string" && !l && !a[k])
              return t.dataTypes.unshift(k), u(k), !1;
            if (l)
              return !(d = k);
          }), d;
        }
        return u(t.dataTypes[0]) || !a["*"] && u("*");
      }
      function Lt(e, t) {
        var n, r, a = s.ajaxSettings.flatOptions || {};
        for (n in t)
          t[n] !== void 0 && ((a[n] ? e : r || (r = {}))[n] = t[n]);
        return r && s.extend(!0, e, r), e;
      }
      function On(e, t, n) {
        for (var r, a, l, u, h = e.contents, d = e.dataTypes; d[0] === "*"; )
          d.shift(), r === void 0 && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r) {
          for (a in h)
            if (h[a] && h[a].test(r)) {
              d.unshift(a);
              break;
            }
        }
        if (d[0] in n)
          l = d[0];
        else {
          for (a in n) {
            if (!d[0] || e.converters[a + " " + d[0]]) {
              l = a;
              break;
            }
            u || (u = a);
          }
          l = l || u;
        }
        if (l)
          return l !== d[0] && d.unshift(l), n[l];
      }
      function Nn(e, t, n, r) {
        var a, l, u, h, d, v = {}, w = e.dataTypes.slice();
        if (w[1])
          for (u in e.converters)
            v[u.toLowerCase()] = e.converters[u];
        for (l = w.shift(); l; )
          if (e.responseFields[l] && (n[e.responseFields[l]] = t), !d && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), d = l, l = w.shift(), l) {
            if (l === "*")
              l = d;
            else if (d !== "*" && d !== l) {
              if (u = v[d + " " + l] || v["* " + l], !u) {
                for (a in v)
                  if (h = a.split(" "), h[1] === l && (u = v[d + " " + h[0]] || v["* " + h[0]], u)) {
                    u === !0 ? u = v[a] : v[a] !== !0 && (l = h[0], w.unshift(h[1]));
                    break;
                  }
              }
              if (u !== !0)
                if (u && e.throws)
                  t = u(t);
                else
                  try {
                    t = u(t);
                  } catch (k) {
                    return {
                      state: "parsererror",
                      error: u ? k : "No conversion from " + d + " to " + l
                    };
                  }
            }
          }
        return { state: "success", data: t };
      }
      s.extend({
        // Counter for holding the number of active queries
        active: 0,
        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: it.href,
          type: "GET",
          isLocal: En.test(it.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          /*
          timeout: 0,
          data: null,
          dataType: null,
          username: null,
          password: null,
          cache: null,
          throws: false,
          traditional: false,
          headers: {},
          */
          accepts: {
            "*": Ai,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },
          // Data converters
          // Keys separate source (or catchall "*") and destination types with a single space
          converters: {
            // Convert anything to text
            "* text": String,
            // Text to html (true = no transformation)
            "text html": !0,
            // Evaluate text as a json expression
            "text json": JSON.parse,
            // Parse text as xml
            "text xml": s.parseXML
          },
          // For options that shouldn't be deep extended:
          // you can add your own custom options here if
          // and when you create one that shouldn't be
          // deep extended (see ajaxExtend)
          flatOptions: {
            url: !0,
            context: !0
          }
        },
        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function(e, t) {
          return t ? (
            // Building a settings object
            Lt(Lt(e, s.ajaxSettings), t)
          ) : (
            // Extending ajaxSettings
            Lt(s.ajaxSettings, e)
          );
        },
        ajaxPrefilter: Ei(Ci),
        ajaxTransport: Ei(jt),
        // Main method
        ajax: function(e, t) {
          typeof e == "object" && (t = e, e = void 0), t = t || {};
          var n, r, a, l, u, h, d, v, w, k, b = s.ajaxSetup({}, t), A = b.context || b, z = b.context && (A.nodeType || A.jquery) ? s(A) : s.event, Y = s.Deferred(), F = s.Callbacks("once memory"), ne = b.statusCode || {}, ie = {}, be = {}, Te = "canceled", X = {
            readyState: 0,
            // Builds headers hashtable if needed
            getResponseHeader: function(G) {
              var te;
              if (d) {
                if (!l)
                  for (l = {}; te = An.exec(a); )
                    l[te[1].toLowerCase() + " "] = (l[te[1].toLowerCase() + " "] || []).concat(te[2]);
                te = l[G.toLowerCase() + " "];
              }
              return te == null ? null : te.join(", ");
            },
            // Raw string
            getAllResponseHeaders: function() {
              return d ? a : null;
            },
            // Caches the header
            setRequestHeader: function(G, te) {
              return d == null && (G = be[G.toLowerCase()] = be[G.toLowerCase()] || G, ie[G] = te), this;
            },
            // Overrides response content-type header
            overrideMimeType: function(G) {
              return d == null && (b.mimeType = G), this;
            },
            // Status-dependent callbacks
            statusCode: function(G) {
              var te;
              if (G)
                if (d)
                  X.always(G[X.status]);
                else
                  for (te in G)
                    ne[te] = [ne[te], G[te]];
              return this;
            },
            // Cancel the request
            abort: function(G) {
              var te = G || Te;
              return n && n.abort(te), Pe(0, te), this;
            }
          };
          if (Y.promise(X), b.url = ((e || b.url || it.href) + "").replace(Dn, it.protocol + "//"), b.type = t.method || t.type || b.method || b.type, b.dataTypes = (b.dataType || "*").toLowerCase().match(ve) || [""], b.crossDomain == null) {
            h = I.createElement("a");
            try {
              h.href = b.url, h.href = h.href, b.crossDomain = Pt.protocol + "//" + Pt.host != h.protocol + "//" + h.host;
            } catch {
              b.crossDomain = !0;
            }
          }
          if (b.data && b.processData && typeof b.data != "string" && (b.data = s.param(b.data, b.traditional)), $i(Ci, b, t, X), d)
            return X;
          v = s.event && b.global, v && s.active++ === 0 && s.event.trigger("ajaxStart"), b.type = b.type.toUpperCase(), b.hasContent = !$n.test(b.type), r = b.url.replace(xn, ""), b.hasContent ? b.data && b.processData && (b.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (b.data = b.data.replace(kn, "+")) : (k = b.url.slice(r.length), b.data && (b.processData || typeof b.data == "string") && (r += (_t.test(r) ? "&" : "?") + b.data, delete b.data), b.cache === !1 && (r = r.replace(Cn, "$1"), k = (_t.test(r) ? "&" : "?") + "_=" + wi.guid++ + k), b.url = r + k), b.ifModified && (s.lastModified[r] && X.setRequestHeader("If-Modified-Since", s.lastModified[r]), s.etag[r] && X.setRequestHeader("If-None-Match", s.etag[r])), (b.data && b.hasContent && b.contentType !== !1 || t.contentType) && X.setRequestHeader("Content-Type", b.contentType), X.setRequestHeader(
            "Accept",
            b.dataTypes[0] && b.accepts[b.dataTypes[0]] ? b.accepts[b.dataTypes[0]] + (b.dataTypes[0] !== "*" ? ", " + Ai + "; q=0.01" : "") : b.accepts["*"]
          );
          for (w in b.headers)
            X.setRequestHeader(w, b.headers[w]);
          if (b.beforeSend && (b.beforeSend.call(A, X, b) === !1 || d))
            return X.abort();
          if (Te = "abort", F.add(b.complete), X.done(b.success), X.fail(b.error), n = $i(jt, b, t, X), !n)
            Pe(-1, "No Transport");
          else {
            if (X.readyState = 1, v && z.trigger("ajaxSend", [X, b]), d)
              return X;
            b.async && b.timeout > 0 && (u = R.setTimeout(function() {
              X.abort("timeout");
            }, b.timeout));
            try {
              d = !1, n.send(ie, Pe);
            } catch (G) {
              if (d)
                throw G;
              Pe(-1, G);
            }
          }
          function Pe(G, te, rt, qt) {
            var we, ot, Se, De, Oe, ce = te;
            d || (d = !0, u && R.clearTimeout(u), n = void 0, a = qt || "", X.readyState = G > 0 ? 4 : 0, we = G >= 200 && G < 300 || G === 304, rt && (De = On(b, X, rt)), !we && s.inArray("script", b.dataTypes) > -1 && s.inArray("json", b.dataTypes) < 0 && (b.converters["text script"] = function() {
            }), De = Nn(b, De, X, we), we ? (b.ifModified && (Oe = X.getResponseHeader("Last-Modified"), Oe && (s.lastModified[r] = Oe), Oe = X.getResponseHeader("etag"), Oe && (s.etag[r] = Oe)), G === 204 || b.type === "HEAD" ? ce = "nocontent" : G === 304 ? ce = "notmodified" : (ce = De.state, ot = De.data, Se = De.error, we = !Se)) : (Se = ce, (G || !ce) && (ce = "error", G < 0 && (G = 0))), X.status = G, X.statusText = (te || ce) + "", we ? Y.resolveWith(A, [ot, ce, X]) : Y.rejectWith(A, [X, ce, Se]), X.statusCode(ne), ne = void 0, v && z.trigger(
              we ? "ajaxSuccess" : "ajaxError",
              [X, b, we ? ot : Se]
            ), F.fireWith(A, [X, ce]), v && (z.trigger("ajaxComplete", [X, b]), --s.active || s.event.trigger("ajaxStop")));
          }
          return X;
        },
        getJSON: function(e, t, n) {
          return s.get(e, t, n, "json");
        },
        getScript: function(e, t) {
          return s.get(e, void 0, t, "script");
        }
      }), s.each(["get", "post"], function(e, t) {
        s[t] = function(n, r, a, l) {
          return L(r) && (l = l || a, a = r, r = void 0), s.ajax(s.extend({
            url: n,
            type: t,
            dataType: l,
            data: r,
            success: a
          }, s.isPlainObject(n) && n));
        };
      }), s.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers)
          t.toLowerCase() === "content-type" && (e.contentType = e.headers[t] || "");
      }), s._evalUrl = function(e, t, n) {
        return s.ajax({
          url: e,
          // Make this explicit, since user can override this through ajaxSetup (trac-11264)
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          // Only evaluate the response if it is successful (gh-4126)
          // dataFilter is not invoked for failure responses, so using it instead
          // of the default converter is kludgy but it works.
          converters: {
            "text script": function() {
            }
          },
          dataFilter: function(r) {
            s.globalEval(r, t, n);
          }
        });
      }, s.fn.extend({
        wrapAll: function(e) {
          var t;
          return this[0] && (L(e) && (e = e.call(this[0])), t = s(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
            for (var n = this; n.firstElementChild; )
              n = n.firstElementChild;
            return n;
          }).append(this)), this;
        },
        wrapInner: function(e) {
          return L(e) ? this.each(function(t) {
            s(this).wrapInner(e.call(this, t));
          }) : this.each(function() {
            var t = s(this), n = t.contents();
            n.length ? n.wrapAll(e) : t.append(e);
          });
        },
        wrap: function(e) {
          var t = L(e);
          return this.each(function(n) {
            s(this).wrapAll(t ? e.call(this, n) : e);
          });
        },
        unwrap: function(e) {
          return this.parent(e).not("body").each(function() {
            s(this).replaceWith(this.childNodes);
          }), this;
        }
      }), s.expr.pseudos.hidden = function(e) {
        return !s.expr.pseudos.visible(e);
      }, s.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }, s.ajaxSettings.xhr = function() {
        try {
          return new R.XMLHttpRequest();
        } catch {
        }
      };
      var _n = {
        // File protocol always yields status code 0, assume 200
        0: 200,
        // Support: IE <=9 only
        // trac-1450: sometimes IE returns 1223 when it should be 204
        1223: 204
      }, nt = s.ajaxSettings.xhr();
      q.cors = !!nt && "withCredentials" in nt, q.ajax = nt = !!nt, s.ajaxTransport(function(e) {
        var t, n;
        if (q.cors || nt && !e.crossDomain)
          return {
            send: function(r, a) {
              var l, u = e.xhr();
              if (u.open(
                e.type,
                e.url,
                e.async,
                e.username,
                e.password
              ), e.xhrFields)
                for (l in e.xhrFields)
                  u[l] = e.xhrFields[l];
              e.mimeType && u.overrideMimeType && u.overrideMimeType(e.mimeType), !e.crossDomain && !r["X-Requested-With"] && (r["X-Requested-With"] = "XMLHttpRequest");
              for (l in r)
                u.setRequestHeader(l, r[l]);
              t = function(h) {
                return function() {
                  t && (t = n = u.onload = u.onerror = u.onabort = u.ontimeout = u.onreadystatechange = null, h === "abort" ? u.abort() : h === "error" ? typeof u.status != "number" ? a(0, "error") : a(
                    // File: protocol always yields status 0; see trac-8605, trac-14207
                    u.status,
                    u.statusText
                  ) : a(
                    _n[u.status] || u.status,
                    u.statusText,
                    // Support: IE <=9 only
                    // IE9 has no XHR2 but throws on binary (trac-11426)
                    // For XHR2 non-text, let the caller handle it (gh-2498)
                    (u.responseType || "text") !== "text" || typeof u.responseText != "string" ? { binary: u.response } : { text: u.responseText },
                    u.getAllResponseHeaders()
                  ));
                };
              }, u.onload = t(), n = u.onerror = u.ontimeout = t("error"), u.onabort !== void 0 ? u.onabort = n : u.onreadystatechange = function() {
                u.readyState === 4 && R.setTimeout(function() {
                  t && n();
                });
              }, t = t("abort");
              try {
                u.send(e.hasContent && e.data || null);
              } catch (h) {
                if (t)
                  throw h;
              }
            },
            abort: function() {
              t && t();
            }
          };
      }), s.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1);
      }), s.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function(e) {
            return s.globalEval(e), e;
          }
        }
      }), s.ajaxPrefilter("script", function(e) {
        e.cache === void 0 && (e.cache = !1), e.crossDomain && (e.type = "GET");
      }), s.ajaxTransport("script", function(e) {
        if (e.crossDomain || e.scriptAttrs) {
          var t, n;
          return {
            send: function(r, a) {
              t = s("<script>").attr(e.scriptAttrs || {}).prop({ charset: e.scriptCharset, src: e.url }).on("load error", n = function(l) {
                t.remove(), n = null, l && a(l.type === "error" ? 404 : 200, l.type);
              }), I.head.appendChild(t[0]);
            },
            abort: function() {
              n && n();
            }
          };
        }
      });
      var Di = [], Mt = /(=)\?(?=&|$)|\?\?/;
      s.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
          var e = Di.pop() || s.expando + "_" + wi.guid++;
          return this[e] = !0, e;
        }
      }), s.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, a, l, u = e.jsonp !== !1 && (Mt.test(e.url) ? "url" : typeof e.data == "string" && (e.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && Mt.test(e.data) && "data");
        if (u || e.dataTypes[0] === "jsonp")
          return r = e.jsonpCallback = L(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, u ? e[u] = e[u].replace(Mt, "$1" + r) : e.jsonp !== !1 && (e.url += (_t.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return l || s.error(r + " was not called"), l[0];
          }, e.dataTypes[0] = "json", a = R[r], R[r] = function() {
            l = arguments;
          }, n.always(function() {
            a === void 0 ? s(R).removeProp(r) : R[r] = a, e[r] && (e.jsonpCallback = t.jsonpCallback, Di.push(r)), l && L(a) && a(l[0]), l = a = void 0;
          }), "script";
      }), q.createHTMLDocument = function() {
        var e = I.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", e.childNodes.length === 2;
      }(), s.parseHTML = function(e, t, n) {
        if (typeof e != "string")
          return [];
        typeof t == "boolean" && (n = t, t = !1);
        var r, a, l;
        return t || (q.createHTMLDocument ? (t = I.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = I.location.href, t.head.appendChild(r)) : t = I), a = Gt.exec(e), l = !n && [], a ? [t.createElement(a[1])] : (a = oi([e], t, l), l && l.length && s(l).remove(), s.merge([], a.childNodes));
      }, s.fn.load = function(e, t, n) {
        var r, a, l, u = this, h = e.indexOf(" ");
        return h > -1 && (r = He(e.slice(h)), e = e.slice(0, h)), L(t) ? (n = t, t = void 0) : t && typeof t == "object" && (a = "POST"), u.length > 0 && s.ajax({
          url: e,
          // If "type" variable is undefined, then "GET" method will be used.
          // Make value of this field explicit since
          // user can override it through ajaxSetup method
          type: a || "GET",
          dataType: "html",
          data: t
        }).done(function(d) {
          l = arguments, u.html(r ? (
            // If a selector was specified, locate the right elements in a dummy div
            // Exclude scripts to avoid IE 'Permission Denied' errors
            s("<div>").append(s.parseHTML(d)).find(r)
          ) : (
            // Otherwise use the full result
            d
          ));
        }).always(n && function(d, v) {
          u.each(function() {
            n.apply(this, l || [d.responseText, v, d]);
          });
        }), this;
      }, s.expr.pseudos.animated = function(e) {
        return s.grep(s.timers, function(t) {
          return e === t.elem;
        }).length;
      }, s.offset = {
        setOffset: function(e, t, n) {
          var r, a, l, u, h, d, v, w = s.css(e, "position"), k = s(e), b = {};
          w === "static" && (e.style.position = "relative"), h = k.offset(), l = s.css(e, "top"), d = s.css(e, "left"), v = (w === "absolute" || w === "fixed") && (l + d).indexOf("auto") > -1, v ? (r = k.position(), u = r.top, a = r.left) : (u = parseFloat(l) || 0, a = parseFloat(d) || 0), L(t) && (t = t.call(e, n, s.extend({}, h))), t.top != null && (b.top = t.top - h.top + u), t.left != null && (b.left = t.left - h.left + a), "using" in t ? t.using.call(e, b) : k.css(b);
        }
      }, s.fn.extend({
        // offset() relates an element's border box to the document origin
        offset: function(e) {
          if (arguments.length)
            return e === void 0 ? this : this.each(function(a) {
              s.offset.setOffset(this, e, a);
            });
          var t, n, r = this[0];
          if (r)
            return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
              top: t.top + n.pageYOffset,
              left: t.left + n.pageXOffset
            }) : { top: 0, left: 0 };
        },
        // position() relates an element's margin box to its offset parent's padding box
        // This corresponds to the behavior of CSS absolute positioning
        position: function() {
          if (this[0]) {
            var e, t, n, r = this[0], a = { top: 0, left: 0 };
            if (s.css(r, "position") === "fixed")
              t = r.getBoundingClientRect();
            else {
              for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && s.css(e, "position") === "static"; )
                e = e.parentNode;
              e && e !== r && e.nodeType === 1 && (a = s(e).offset(), a.top += s.css(e, "borderTopWidth", !0), a.left += s.css(e, "borderLeftWidth", !0));
            }
            return {
              top: t.top - a.top - s.css(r, "marginTop", !0),
              left: t.left - a.left - s.css(r, "marginLeft", !0)
            };
          }
        },
        // This method will return documentElement in the following cases:
        // 1) For the element inside the iframe without offsetParent, this method will return
        //    documentElement of the parent window
        // 2) For the hidden or detached element
        // 3) For body or html element, i.e. in case of the html node - it will return itself
        //
        // but those exceptions were never presented as a real life use-cases
        // and might be considered as more preferable results.
        //
        // This logic, however, is not guaranteed and can change at any point in the future
        offsetParent: function() {
          return this.map(function() {
            for (var e = this.offsetParent; e && s.css(e, "position") === "static"; )
              e = e.offsetParent;
            return e || _e;
          });
        }
      }), s.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) {
        var n = t === "pageYOffset";
        s.fn[e] = function(r) {
          return Ce(this, function(a, l, u) {
            var h;
            if (he(a) ? h = a : a.nodeType === 9 && (h = a.defaultView), u === void 0)
              return h ? h[t] : a[l];
            h ? h.scrollTo(
              n ? h.pageXOffset : u,
              n ? u : h.pageYOffset
            ) : a[l] = u;
          }, e, r, arguments.length);
        };
      }), s.each(["top", "left"], function(e, t) {
        s.cssHooks[t] = di(
          q.pixelPosition,
          function(n, r) {
            if (r)
              return r = et(n, t), At.test(r) ? s(n).position()[t] + "px" : r;
          }
        );
      }), s.each({ Height: "height", Width: "width" }, function(e, t) {
        s.each({
          padding: "inner" + e,
          content: t,
          "": "outer" + e
        }, function(n, r) {
          s.fn[r] = function(a, l) {
            var u = arguments.length && (n || typeof a != "boolean"), h = n || (a === !0 || l === !0 ? "margin" : "border");
            return Ce(this, function(d, v, w) {
              var k;
              return he(d) ? r.indexOf("outer") === 0 ? d["inner" + e] : d.document.documentElement["client" + e] : d.nodeType === 9 ? (k = d.documentElement, Math.max(
                d.body["scroll" + e],
                k["scroll" + e],
                d.body["offset" + e],
                k["offset" + e],
                k["client" + e]
              )) : w === void 0 ? (
                // Get width or height on the element, requesting but not forcing parseFloat
                s.css(d, v, h)
              ) : (
                // Set width or height on the element
                s.style(d, v, w, h)
              );
            }, t, u ? a : void 0, u);
          };
        });
      }), s.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
      ], function(e, t) {
        s.fn[t] = function(n) {
          return this.on(t, n);
        };
      }), s.fn.extend({
        bind: function(e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
          return this.off(e, null, t);
        },
        delegate: function(e, t, n, r) {
          return this.on(t, e, n, r);
        },
        undelegate: function(e, t, n) {
          return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n);
        },
        hover: function(e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        }
      }), s.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
        function(e, t) {
          s.fn[t] = function(n, r) {
            return arguments.length > 0 ? this.on(t, null, n, r) : this.trigger(t);
          };
        }
      );
      var Hn = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
      s.proxy = function(e, t) {
        var n, r, a;
        if (typeof t == "string" && (n = e[t], t = e, e = n), !!L(e))
          return r = o.call(arguments, 2), a = function() {
            return e.apply(t || this, r.concat(o.call(arguments)));
          }, a.guid = e.guid = e.guid || s.guid++, a;
      }, s.holdReady = function(e) {
        e ? s.readyWait++ : s.ready(!0);
      }, s.isArray = Array.isArray, s.parseJSON = JSON.parse, s.nodeName = ee, s.isFunction = L, s.isWindow = he, s.camelCase = me, s.type = qe, s.now = Date.now, s.isNumeric = function(e) {
        var t = s.type(e);
        return (t === "number" || t === "string") && // parseFloat NaNs numeric-cast false positives ("")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        !isNaN(e - parseFloat(e));
      }, s.trim = function(e) {
        return e == null ? "" : (e + "").replace(Hn, "$1");
      };
      var jn = R.jQuery, Pn = R.$;
      return s.noConflict = function(e) {
        return R.$ === s && (R.$ = Pn), e && R.jQuery === s && (R.jQuery = jn), s;
      }, typeof C > "u" && (R.jQuery = R.$ = s), s;
    });
  }(Ut)), Ut.exports;
}
var Jn = ji();
const Zn = /* @__PURE__ */ Qn(Jn);
var er = { exports: {} };
(function(J, R) {
  (function(C) {
    J.exports = C(ji());
  })(function(C) {
    var x = window.Slick || {};
    x = function() {
      var i = 0;
      function o(c, p) {
        var g = this, E;
        g.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: C(c),
          appendDots: C(c),
          arrows: !0,
          asNavFor: null,
          prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
          nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function(_, V) {
            return C('<button type="button" />').text(V + 1);
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: 0.35,
          fade: !1,
          focusOnSelect: !1,
          focusOnChange: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: "ondemand",
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: "window",
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3
        }, g.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1
        }, C.extend(g, g.initials), g.activeBreakpoint = null, g.animType = null, g.animProp = null, g.breakpoints = [], g.breakpointSettings = [], g.cssTransitions = !1, g.focussed = !1, g.interrupted = !1, g.hidden = "hidden", g.paused = !0, g.positionProp = null, g.respondTo = null, g.rowCount = 1, g.shouldClick = !0, g.$slider = C(c), g.$slidesCache = null, g.transformType = null, g.transitionType = null, g.visibilityChange = "visibilitychange", g.windowWidth = 0, g.windowTimer = null, E = C(c).data("slick") || {}, g.options = C.extend({}, g.defaults, p, E), g.currentSlide = g.options.initialSlide, g.originalSettings = g.options, typeof document.mozHidden < "u" ? (g.hidden = "mozHidden", g.visibilityChange = "mozvisibilitychange") : typeof document.webkitHidden < "u" && (g.hidden = "webkitHidden", g.visibilityChange = "webkitvisibilitychange"), g.autoPlay = C.proxy(g.autoPlay, g), g.autoPlayClear = C.proxy(g.autoPlayClear, g), g.autoPlayIterator = C.proxy(g.autoPlayIterator, g), g.changeSlide = C.proxy(g.changeSlide, g), g.clickHandler = C.proxy(g.clickHandler, g), g.selectHandler = C.proxy(g.selectHandler, g), g.setPosition = C.proxy(g.setPosition, g), g.swipeHandler = C.proxy(g.swipeHandler, g), g.dragHandler = C.proxy(g.dragHandler, g), g.keyHandler = C.proxy(g.keyHandler, g), g.instanceUid = i++, g.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, g.registerBreakpoints(), g.init(!0);
      }
      return o;
    }(), x.prototype.activateADA = function() {
      var i = this;
      i.$slideTrack.find(".slick-active").attr({
        "aria-hidden": "false"
      }).find("a, input, button, select").attr({
        tabindex: "0"
      });
    }, x.prototype.addSlide = x.prototype.slickAdd = function(i, o, c) {
      var p = this;
      if (typeof o == "boolean")
        c = o, o = null;
      else if (o < 0 || o >= p.slideCount)
        return !1;
      p.unload(), typeof o == "number" ? o === 0 && p.$slides.length === 0 ? C(i).appendTo(p.$slideTrack) : c ? C(i).insertBefore(p.$slides.eq(o)) : C(i).insertAfter(p.$slides.eq(o)) : c === !0 ? C(i).prependTo(p.$slideTrack) : C(i).appendTo(p.$slideTrack), p.$slides = p.$slideTrack.children(this.options.slide), p.$slideTrack.children(this.options.slide).detach(), p.$slideTrack.append(p.$slides), p.$slides.each(function(g, E) {
        C(E).attr("data-slick-index", g);
      }), p.$slidesCache = p.$slides, p.reinit();
    }, x.prototype.animateHeight = function() {
      var i = this;
      if (i.options.slidesToShow === 1 && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
        var o = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.animate({
          height: o
        }, i.options.speed);
      }
    }, x.prototype.animateSlide = function(i, o) {
      var c = {}, p = this;
      p.animateHeight(), p.options.rtl === !0 && p.options.vertical === !1 && (i = -i), p.transformsEnabled === !1 ? p.options.vertical === !1 ? p.$slideTrack.animate({
        left: i
      }, p.options.speed, p.options.easing, o) : p.$slideTrack.animate({
        top: i
      }, p.options.speed, p.options.easing, o) : p.cssTransitions === !1 ? (p.options.rtl === !0 && (p.currentLeft = -p.currentLeft), C({
        animStart: p.currentLeft
      }).animate({
        animStart: i
      }, {
        duration: p.options.speed,
        easing: p.options.easing,
        step: function(g) {
          g = Math.ceil(g), p.options.vertical === !1 ? (c[p.animType] = "translate(" + g + "px, 0px)", p.$slideTrack.css(c)) : (c[p.animType] = "translate(0px," + g + "px)", p.$slideTrack.css(c));
        },
        complete: function() {
          o && o.call();
        }
      })) : (p.applyTransition(), i = Math.ceil(i), p.options.vertical === !1 ? c[p.animType] = "translate3d(" + i + "px, 0px, 0px)" : c[p.animType] = "translate3d(0px," + i + "px, 0px)", p.$slideTrack.css(c), o && setTimeout(function() {
        p.disableTransition(), o.call();
      }, p.options.speed));
    }, x.prototype.getNavTarget = function() {
      var i = this, o = i.options.asNavFor;
      return o && o !== null && (o = C(o).not(i.$slider)), o;
    }, x.prototype.asNavFor = function(i) {
      var o = this, c = o.getNavTarget();
      c !== null && typeof c == "object" && c.each(function() {
        var p = C(this).slick("getSlick");
        p.unslicked || p.slideHandler(i, !0);
      });
    }, x.prototype.applyTransition = function(i) {
      var o = this, c = {};
      o.options.fade === !1 ? c[o.transitionType] = o.transformType + " " + o.options.speed + "ms " + o.options.cssEase : c[o.transitionType] = "opacity " + o.options.speed + "ms " + o.options.cssEase, o.options.fade === !1 ? o.$slideTrack.css(c) : o.$slides.eq(i).css(c);
    }, x.prototype.autoPlay = function() {
      var i = this;
      i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
    }, x.prototype.autoPlayClear = function() {
      var i = this;
      i.autoPlayTimer && clearInterval(i.autoPlayTimer);
    }, x.prototype.autoPlayIterator = function() {
      var i = this, o = i.currentSlide + i.options.slidesToScroll;
      !i.paused && !i.interrupted && !i.focussed && (i.options.infinite === !1 && (i.direction === 1 && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : i.direction === 0 && (o = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 === 0 && (i.direction = 1))), i.slideHandler(o));
    }, x.prototype.buildArrows = function() {
      var i = this;
      i.options.arrows === !0 && (i.$prevArrow = C(i.options.prevArrow).addClass("slick-arrow"), i.$nextArrow = C(i.options.nextArrow).addClass("slick-arrow"), i.slideCount > i.options.slidesToShow ? (i.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), i.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.prependTo(i.options.appendArrows), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.appendTo(i.options.appendArrows), i.options.infinite !== !0 && i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : i.$prevArrow.add(i.$nextArrow).addClass("slick-hidden").attr({
        "aria-disabled": "true",
        tabindex: "-1"
      }));
    }, x.prototype.buildDots = function() {
      var i = this, o, c;
      if (i.options.dots === !0 && i.slideCount > i.options.slidesToShow) {
        for (i.$slider.addClass("slick-dotted"), c = C("<ul />").addClass(i.options.dotsClass), o = 0; o <= i.getDotCount(); o += 1)
          c.append(C("<li />").append(i.options.customPaging.call(this, i, o)));
        i.$dots = c.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active");
      }
    }, x.prototype.buildOut = function() {
      var i = this;
      i.$slides = i.$slider.children(i.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), i.slideCount = i.$slides.length, i.$slides.each(function(o, c) {
        C(c).attr("data-slick-index", o).data("originalStyling", C(c).attr("style") || "");
      }), i.$slider.addClass("slick-slider"), i.$slideTrack = i.slideCount === 0 ? C('<div class="slick-track"/>').appendTo(i.$slider) : i.$slides.wrapAll('<div class="slick-track"/>').parent(), i.$list = i.$slideTrack.wrap(
        '<div class="slick-list"/>'
      ).parent(), i.$slideTrack.css("opacity", 0), (i.options.centerMode === !0 || i.options.swipeToSlide === !0) && (i.options.slidesToScroll = 1), C("img[data-lazy]", i.$slider).not("[src]").addClass("slick-loading"), i.setupInfinite(), i.buildArrows(), i.buildDots(), i.updateDots(), i.setSlideClasses(typeof i.currentSlide == "number" ? i.currentSlide : 0), i.options.draggable === !0 && i.$list.addClass("draggable");
    }, x.prototype.buildRows = function() {
      var i = this, o, c, p, g, E, _, V;
      if (g = document.createDocumentFragment(), _ = i.$slider.children(), i.options.rows > 0) {
        for (V = i.options.slidesPerRow * i.options.rows, E = Math.ceil(
          _.length / V
        ), o = 0; o < E; o++) {
          var $ = document.createElement("div");
          for (c = 0; c < i.options.rows; c++) {
            var se = document.createElement("div");
            for (p = 0; p < i.options.slidesPerRow; p++) {
              var q = o * V + (c * i.options.slidesPerRow + p);
              _.get(q) && se.appendChild(_.get(q));
            }
            $.appendChild(se);
          }
          g.appendChild($);
        }
        i.$slider.empty().append(g), i.$slider.children().children().children().css({
          width: 100 / i.options.slidesPerRow + "%",
          display: "inline-block"
        });
      }
    }, x.prototype.checkResponsive = function(i, o) {
      var c = this, p, g, E, _ = !1, V = c.$slider.width(), $ = window.innerWidth || C(window).width();
      if (c.respondTo === "window" ? E = $ : c.respondTo === "slider" ? E = V : c.respondTo === "min" && (E = Math.min($, V)), c.options.responsive && c.options.responsive.length && c.options.responsive !== null) {
        g = null;
        for (p in c.breakpoints)
          c.breakpoints.hasOwnProperty(p) && (c.originalSettings.mobileFirst === !1 ? E < c.breakpoints[p] && (g = c.breakpoints[p]) : E > c.breakpoints[p] && (g = c.breakpoints[p]));
        g !== null ? c.activeBreakpoint !== null ? (g !== c.activeBreakpoint || o) && (c.activeBreakpoint = g, c.breakpointSettings[g] === "unslick" ? c.unslick(g) : (c.options = C.extend(
          {},
          c.originalSettings,
          c.breakpointSettings[g]
        ), i === !0 && (c.currentSlide = c.options.initialSlide), c.refresh(i)), _ = g) : (c.activeBreakpoint = g, c.breakpointSettings[g] === "unslick" ? c.unslick(g) : (c.options = C.extend(
          {},
          c.originalSettings,
          c.breakpointSettings[g]
        ), i === !0 && (c.currentSlide = c.options.initialSlide), c.refresh(i)), _ = g) : c.activeBreakpoint !== null && (c.activeBreakpoint = null, c.options = c.originalSettings, i === !0 && (c.currentSlide = c.options.initialSlide), c.refresh(i), _ = g), !i && _ !== !1 && c.$slider.trigger("breakpoint", [c, _]);
      }
    }, x.prototype.changeSlide = function(i, o) {
      var c = this, p = C(i.currentTarget), g, E, _;
      switch (p.is("a") && i.preventDefault(), p.is("li") || (p = p.closest("li")), _ = c.slideCount % c.options.slidesToScroll !== 0, g = _ ? 0 : (c.slideCount - c.currentSlide) % c.options.slidesToScroll, i.data.message) {
        case "previous":
          E = g === 0 ? c.options.slidesToScroll : c.options.slidesToShow - g, c.slideCount > c.options.slidesToShow && c.slideHandler(c.currentSlide - E, !1, o);
          break;
        case "next":
          E = g === 0 ? c.options.slidesToScroll : g, c.slideCount > c.options.slidesToShow && c.slideHandler(c.currentSlide + E, !1, o);
          break;
        case "index":
          var V = i.data.index === 0 ? 0 : i.data.index || p.index() * c.options.slidesToScroll;
          c.slideHandler(c.checkNavigable(V), !1, o), p.children().trigger("focus");
          break;
        default:
          return;
      }
    }, x.prototype.checkNavigable = function(i) {
      var o = this, c, p;
      if (c = o.getNavigableIndexes(), p = 0, i > c[c.length - 1])
        i = c[c.length - 1];
      else
        for (var g in c) {
          if (i < c[g]) {
            i = p;
            break;
          }
          p = c[g];
        }
      return i;
    }, x.prototype.cleanUpEvents = function() {
      var i = this;
      i.options.dots && i.$dots !== null && (C("li", i.$dots).off("click.slick", i.changeSlide).off("mouseenter.slick", C.proxy(i.interrupt, i, !0)).off("mouseleave.slick", C.proxy(i.interrupt, i, !1)), i.options.accessibility === !0 && i.$dots.off("keydown.slick", i.keyHandler)), i.$slider.off("focus.slick blur.slick"), i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow && i.$prevArrow.off("click.slick", i.changeSlide), i.$nextArrow && i.$nextArrow.off("click.slick", i.changeSlide), i.options.accessibility === !0 && (i.$prevArrow && i.$prevArrow.off("keydown.slick", i.keyHandler), i.$nextArrow && i.$nextArrow.off("keydown.slick", i.keyHandler))), i.$list.off("touchstart.slick mousedown.slick", i.swipeHandler), i.$list.off("touchmove.slick mousemove.slick", i.swipeHandler), i.$list.off("touchend.slick mouseup.slick", i.swipeHandler), i.$list.off("touchcancel.slick mouseleave.slick", i.swipeHandler), i.$list.off("click.slick", i.clickHandler), C(document).off(i.visibilityChange, i.visibility), i.cleanUpSlideEvents(), i.options.accessibility === !0 && i.$list.off("keydown.slick", i.keyHandler), i.options.focusOnSelect === !0 && C(i.$slideTrack).children().off("click.slick", i.selectHandler), C(window).off("orientationchange.slick.slick-" + i.instanceUid, i.orientationChange), C(window).off("resize.slick.slick-" + i.instanceUid, i.resize), C("[draggable!=true]", i.$slideTrack).off("dragstart", i.preventDefault), C(window).off("load.slick.slick-" + i.instanceUid, i.setPosition);
    }, x.prototype.cleanUpSlideEvents = function() {
      var i = this;
      i.$list.off("mouseenter.slick", C.proxy(i.interrupt, i, !0)), i.$list.off("mouseleave.slick", C.proxy(i.interrupt, i, !1));
    }, x.prototype.cleanUpRows = function() {
      var i = this, o;
      i.options.rows > 0 && (o = i.$slides.children().children(), o.removeAttr("style"), i.$slider.empty().append(o));
    }, x.prototype.clickHandler = function(i) {
      var o = this;
      o.shouldClick === !1 && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }, x.prototype.destroy = function(i) {
      var o = this;
      o.autoPlayClear(), o.touchObject = {}, o.cleanUpEvents(), C(".slick-cloned", o.$slider).detach(), o.$dots && o.$dots.remove(), o.$prevArrow && o.$prevArrow.length && (o.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), o.htmlExpr.test(o.options.prevArrow) && o.$prevArrow.remove()), o.$nextArrow && o.$nextArrow.length && (o.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), o.htmlExpr.test(o.options.nextArrow) && o.$nextArrow.remove()), o.$slides && (o.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
        C(this).attr("style", C(this).data("originalStyling"));
      }), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.detach(), o.$list.detach(), o.$slider.append(o.$slides)), o.cleanUpRows(), o.$slider.removeClass("slick-slider"), o.$slider.removeClass("slick-initialized"), o.$slider.removeClass("slick-dotted"), o.unslicked = !0, i || o.$slider.trigger("destroy", [o]);
    }, x.prototype.disableTransition = function(i) {
      var o = this, c = {};
      c[o.transitionType] = "", o.options.fade === !1 ? o.$slideTrack.css(c) : o.$slides.eq(i).css(c);
    }, x.prototype.fadeSlide = function(i, o) {
      var c = this;
      c.cssTransitions === !1 ? (c.$slides.eq(i).css({
        zIndex: c.options.zIndex
      }), c.$slides.eq(i).animate({
        opacity: 1
      }, c.options.speed, c.options.easing, o)) : (c.applyTransition(i), c.$slides.eq(i).css({
        opacity: 1,
        zIndex: c.options.zIndex
      }), o && setTimeout(function() {
        c.disableTransition(i), o.call();
      }, c.options.speed));
    }, x.prototype.fadeSlideOut = function(i) {
      var o = this;
      o.cssTransitions === !1 ? o.$slides.eq(i).animate({
        opacity: 0,
        zIndex: o.options.zIndex - 2
      }, o.options.speed, o.options.easing) : (o.applyTransition(i), o.$slides.eq(i).css({
        opacity: 0,
        zIndex: o.options.zIndex - 2
      }));
    }, x.prototype.filterSlides = x.prototype.slickFilter = function(i) {
      var o = this;
      i !== null && (o.$slidesCache = o.$slides, o.unload(), o.$slideTrack.children(this.options.slide).detach(), o.$slidesCache.filter(i).appendTo(o.$slideTrack), o.reinit());
    }, x.prototype.focusHandler = function() {
      var i = this;
      i.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(o) {
        o.stopImmediatePropagation();
        var c = C(this);
        setTimeout(function() {
          i.options.pauseOnFocus && (i.focussed = c.is(":focus"), i.autoPlay());
        }, 0);
      });
    }, x.prototype.getCurrent = x.prototype.slickCurrentSlide = function() {
      var i = this;
      return i.currentSlide;
    }, x.prototype.getDotCount = function() {
      var i = this, o = 0, c = 0, p = 0;
      if (i.options.infinite === !0)
        if (i.slideCount <= i.options.slidesToShow)
          ++p;
        else
          for (; o < i.slideCount; )
            ++p, o = c + i.options.slidesToScroll, c += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
      else if (i.options.centerMode === !0)
        p = i.slideCount;
      else if (!i.options.asNavFor)
        p = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
      else
        for (; o < i.slideCount; )
          ++p, o = c + i.options.slidesToScroll, c += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
      return p - 1;
    }, x.prototype.getLeft = function(i) {
      var o = this, c, p, g = 0, E, _;
      return o.slideOffset = 0, p = o.$slides.first().outerHeight(!0), o.options.infinite === !0 ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, _ = -1, o.options.vertical === !0 && o.options.centerMode === !0 && (o.options.slidesToShow === 2 ? _ = -1.5 : o.options.slidesToShow === 1 && (_ = -2)), g = p * o.options.slidesToShow * _), o.slideCount % o.options.slidesToScroll !== 0 && i + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (i > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (i - o.slideCount)) * o.slideWidth * -1, g = (o.options.slidesToShow - (i - o.slideCount)) * p * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, g = o.slideCount % o.options.slidesToScroll * p * -1))) : i + o.options.slidesToShow > o.slideCount && (o.slideOffset = (i + o.options.slidesToShow - o.slideCount) * o.slideWidth, g = (i + o.options.slidesToShow - o.slideCount) * p), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, g = 0), o.options.centerMode === !0 && o.slideCount <= o.options.slidesToShow ? o.slideOffset = o.slideWidth * Math.floor(o.options.slidesToShow) / 2 - o.slideWidth * o.slideCount / 2 : o.options.centerMode === !0 && o.options.infinite === !0 ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : o.options.centerMode === !0 && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), o.options.vertical === !1 ? c = i * o.slideWidth * -1 + o.slideOffset : c = i * p * -1 + g, o.options.variableWidth === !0 && (o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? E = o.$slideTrack.children(".slick-slide").eq(i) : E = o.$slideTrack.children(".slick-slide").eq(i + o.options.slidesToShow), o.options.rtl === !0 ? E[0] ? c = (o.$slideTrack.width() - E[0].offsetLeft - E.width()) * -1 : c = 0 : c = E[0] ? E[0].offsetLeft * -1 : 0, o.options.centerMode === !0 && (o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? E = o.$slideTrack.children(".slick-slide").eq(i) : E = o.$slideTrack.children(".slick-slide").eq(i + o.options.slidesToShow + 1), o.options.rtl === !0 ? E[0] ? c = (o.$slideTrack.width() - E[0].offsetLeft - E.width()) * -1 : c = 0 : c = E[0] ? E[0].offsetLeft * -1 : 0, c += (o.$list.width() - E.outerWidth()) / 2)), c;
    }, x.prototype.getOption = x.prototype.slickGetOption = function(i) {
      var o = this;
      return o.options[i];
    }, x.prototype.getNavigableIndexes = function() {
      var i = this, o = 0, c = 0, p = [], g;
      for (i.options.infinite === !1 ? g = i.slideCount : (o = i.options.slidesToScroll * -1, c = i.options.slidesToScroll * -1, g = i.slideCount * 2); o < g; )
        p.push(o), o = c + i.options.slidesToScroll, c += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
      return p;
    }, x.prototype.getSlick = function() {
      return this;
    }, x.prototype.getSlideCount = function() {
      var i = this, o, c, p;
      return p = i.options.centerMode === !0 ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0, i.options.swipeToSlide === !0 ? (i.$slideTrack.find(".slick-slide").each(function(g, E) {
        if (E.offsetLeft - p + C(E).outerWidth() / 2 > i.swipeLeft * -1)
          return c = E, !1;
      }), o = Math.abs(C(c).attr("data-slick-index") - i.currentSlide) || 1, o) : i.options.slidesToScroll;
    }, x.prototype.goTo = x.prototype.slickGoTo = function(i, o) {
      var c = this;
      c.changeSlide({
        data: {
          message: "index",
          index: parseInt(i)
        }
      }, o);
    }, x.prototype.init = function(i) {
      var o = this;
      C(o.$slider).hasClass("slick-initialized") || (C(o.$slider).addClass("slick-initialized"), o.buildRows(), o.buildOut(), o.setProps(), o.startLoad(), o.loadSlider(), o.initializeEvents(), o.updateArrows(), o.updateDots(), o.checkResponsive(!0), o.focusHandler()), i && o.$slider.trigger("init", [o]), o.options.accessibility === !0 && o.initADA(), o.options.autoplay && (o.paused = !1, o.autoPlay());
    }, x.prototype.initADA = function() {
      var i = this, o = Math.ceil(i.slideCount / i.options.slidesToShow), c = i.getNavigableIndexes().filter(function(E) {
        return E >= 0 && E < i.slideCount;
      });
      i.$slides.add(i.$slideTrack.find(".slick-cloned")).attr({
        "aria-hidden": "true",
        tabindex: "-1"
      }).find("a, input, button, select").attr({
        tabindex: "-1"
      }), i.$dots !== null && (i.$slides.not(i.$slideTrack.find(".slick-cloned")).each(function(E) {
        var _ = c.indexOf(E);
        if (C(this).attr({
          role: "tabpanel",
          id: "slick-slide" + i.instanceUid + E,
          tabindex: -1
        }), _ !== -1) {
          var V = "slick-slide-control" + i.instanceUid + _;
          C("#" + V).length && C(this).attr({
            "aria-describedby": V
          });
        }
      }), i.$dots.attr("role", "tablist").find("li").each(function(E) {
        var _ = c[E];
        C(this).attr({
          role: "presentation"
        }), C(this).find("button").first().attr({
          role: "tab",
          id: "slick-slide-control" + i.instanceUid + E,
          "aria-controls": "slick-slide" + i.instanceUid + _,
          "aria-label": E + 1 + " of " + o,
          "aria-selected": null,
          tabindex: "-1"
        });
      }).eq(i.currentSlide).find("button").attr({
        "aria-selected": "true",
        tabindex: "0"
      }).end());
      for (var p = i.currentSlide, g = p + i.options.slidesToShow; p < g; p++)
        i.options.focusOnChange ? i.$slides.eq(p).attr({ tabindex: "0" }) : i.$slides.eq(p).removeAttr("tabindex");
      i.activateADA();
    }, x.prototype.initArrowEvents = function() {
      var i = this;
      i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
        message: "previous"
      }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
        message: "next"
      }, i.changeSlide), i.options.accessibility === !0 && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)));
    }, x.prototype.initDotEvents = function() {
      var i = this;
      i.options.dots === !0 && i.slideCount > i.options.slidesToShow && (C("li", i.$dots).on("click.slick", {
        message: "index"
      }, i.changeSlide), i.options.accessibility === !0 && i.$dots.on("keydown.slick", i.keyHandler)), i.options.dots === !0 && i.options.pauseOnDotsHover === !0 && i.slideCount > i.options.slidesToShow && C("li", i.$dots).on("mouseenter.slick", C.proxy(i.interrupt, i, !0)).on("mouseleave.slick", C.proxy(i.interrupt, i, !1));
    }, x.prototype.initSlideEvents = function() {
      var i = this;
      i.options.pauseOnHover && (i.$list.on("mouseenter.slick", C.proxy(i.interrupt, i, !0)), i.$list.on("mouseleave.slick", C.proxy(i.interrupt, i, !1)));
    }, x.prototype.initializeEvents = function() {
      var i = this;
      i.initArrowEvents(), i.initDotEvents(), i.initSlideEvents(), i.$list.on("touchstart.slick mousedown.slick", {
        action: "start"
      }, i.swipeHandler), i.$list.on("touchmove.slick mousemove.slick", {
        action: "move"
      }, i.swipeHandler), i.$list.on("touchend.slick mouseup.slick", {
        action: "end"
      }, i.swipeHandler), i.$list.on("touchcancel.slick mouseleave.slick", {
        action: "end"
      }, i.swipeHandler), i.$list.on("click.slick", i.clickHandler), C(document).on(i.visibilityChange, C.proxy(i.visibility, i)), i.options.accessibility === !0 && i.$list.on("keydown.slick", i.keyHandler), i.options.focusOnSelect === !0 && C(i.$slideTrack).children().on("click.slick", i.selectHandler), C(window).on("orientationchange.slick.slick-" + i.instanceUid, C.proxy(i.orientationChange, i)), C(window).on("resize.slick.slick-" + i.instanceUid, C.proxy(i.resize, i)), C("[draggable!=true]", i.$slideTrack).on("dragstart", i.preventDefault), C(window).on("load.slick.slick-" + i.instanceUid, i.setPosition), C(i.setPosition);
    }, x.prototype.initUI = function() {
      var i = this;
      i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.show();
    }, x.prototype.keyHandler = function(i) {
      var o = this;
      i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (i.keyCode === 37 && o.options.accessibility === !0 ? o.changeSlide({
        data: {
          message: o.options.rtl === !0 ? "next" : "previous"
        }
      }) : i.keyCode === 39 && o.options.accessibility === !0 && o.changeSlide({
        data: {
          message: o.options.rtl === !0 ? "previous" : "next"
        }
      }));
    }, x.prototype.lazyLoad = function() {
      var i = this, o, c, p, g;
      function E(q) {
        C("img[data-lazy]", q).each(function() {
          var L = C(this), he = C(this).attr("data-lazy"), I = C(this).attr("data-srcset"), st = C(this).attr("data-sizes") || i.$slider.attr("data-sizes"), Me = document.createElement("img");
          Me.onload = function() {
            L.animate({ opacity: 0 }, 100, function() {
              I && (L.attr("srcset", I), st && L.attr("sizes", st)), L.attr("src", he).animate({ opacity: 1 }, 200, function() {
                L.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
              }), i.$slider.trigger("lazyLoaded", [i, L, he]);
            });
          }, Me.onerror = function() {
            L.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), i.$slider.trigger("lazyLoadError", [i, L, he]);
          }, Me.src = he;
        });
      }
      if (i.options.centerMode === !0 ? i.options.infinite === !0 ? (p = i.currentSlide + (i.options.slidesToShow / 2 + 1), g = p + i.options.slidesToShow + 2) : (p = Math.max(0, i.currentSlide - (i.options.slidesToShow / 2 + 1)), g = 2 + (i.options.slidesToShow / 2 + 1) + i.currentSlide) : (p = i.options.infinite ? i.options.slidesToShow + i.currentSlide : i.currentSlide, g = Math.ceil(p + i.options.slidesToShow), i.options.fade === !0 && (p > 0 && p--, g <= i.slideCount && g++)), o = i.$slider.find(".slick-slide").slice(p, g), i.options.lazyLoad === "anticipated")
        for (var _ = p - 1, V = g, $ = i.$slider.find(".slick-slide"), se = 0; se < i.options.slidesToScroll; se++)
          _ < 0 && (_ = i.slideCount - 1), o = o.add($.eq(_)), o = o.add($.eq(V)), _--, V++;
      E(o), i.slideCount <= i.options.slidesToShow ? (c = i.$slider.find(".slick-slide"), E(c)) : i.currentSlide >= i.slideCount - i.options.slidesToShow ? (c = i.$slider.find(".slick-cloned").slice(0, i.options.slidesToShow), E(c)) : i.currentSlide === 0 && (c = i.$slider.find(".slick-cloned").slice(i.options.slidesToShow * -1), E(c));
    }, x.prototype.loadSlider = function() {
      var i = this;
      i.setPosition(), i.$slideTrack.css({
        opacity: 1
      }), i.$slider.removeClass("slick-loading"), i.initUI(), i.options.lazyLoad === "progressive" && i.progressiveLazyLoad();
    }, x.prototype.next = x.prototype.slickNext = function() {
      var i = this;
      i.changeSlide({
        data: {
          message: "next"
        }
      });
    }, x.prototype.orientationChange = function() {
      var i = this;
      i.checkResponsive(), i.setPosition();
    }, x.prototype.pause = x.prototype.slickPause = function() {
      var i = this;
      i.autoPlayClear(), i.paused = !0;
    }, x.prototype.play = x.prototype.slickPlay = function() {
      var i = this;
      i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1;
    }, x.prototype.postSlide = function(i) {
      var o = this;
      if (!o.unslicked && (o.$slider.trigger("afterChange", [o, i]), o.animating = !1, o.slideCount > o.options.slidesToShow && o.setPosition(), o.swipeLeft = null, o.options.autoplay && o.autoPlay(), o.options.accessibility === !0 && (o.initADA(), o.options.focusOnChange))) {
        var c = C(o.$slides.get(o.currentSlide));
        c.attr("tabindex", 0).focus();
      }
    }, x.prototype.prev = x.prototype.slickPrev = function() {
      var i = this;
      i.changeSlide({
        data: {
          message: "previous"
        }
      });
    }, x.prototype.preventDefault = function(i) {
      i.preventDefault();
    }, x.prototype.progressiveLazyLoad = function(i) {
      i = i || 1;
      var o = this, c = C("img[data-lazy]", o.$slider), p, g, E, _, V;
      c.length ? (p = c.first(), g = p.attr("data-lazy"), E = p.attr("data-srcset"), _ = p.attr("data-sizes") || o.$slider.attr("data-sizes"), V = document.createElement("img"), V.onload = function() {
        E && (p.attr("srcset", E), _ && p.attr("sizes", _)), p.attr("src", g).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), o.options.adaptiveHeight === !0 && o.setPosition(), o.$slider.trigger("lazyLoaded", [o, p, g]), o.progressiveLazyLoad();
      }, V.onerror = function() {
        i < 3 ? setTimeout(function() {
          o.progressiveLazyLoad(i + 1);
        }, 500) : (p.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, p, g]), o.progressiveLazyLoad());
      }, V.src = g) : o.$slider.trigger("allImagesLoaded", [o]);
    }, x.prototype.refresh = function(i) {
      var o = this, c, p;
      p = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > p && (o.currentSlide = p), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), c = o.currentSlide, o.destroy(!0), C.extend(o, o.initials, { currentSlide: c }), o.init(), i || o.changeSlide({
        data: {
          message: "index",
          index: c
        }
      }, !1);
    }, x.prototype.registerBreakpoints = function() {
      var i = this, o, c, p, g = i.options.responsive || null;
      if (C.type(g) === "array" && g.length) {
        i.respondTo = i.options.respondTo || "window";
        for (o in g)
          if (p = i.breakpoints.length - 1, g.hasOwnProperty(o)) {
            for (c = g[o].breakpoint; p >= 0; )
              i.breakpoints[p] && i.breakpoints[p] === c && i.breakpoints.splice(p, 1), p--;
            i.breakpoints.push(c), i.breakpointSettings[c] = g[o].settings;
          }
        i.breakpoints.sort(function(E, _) {
          return i.options.mobileFirst ? E - _ : _ - E;
        });
      }
    }, x.prototype.reinit = function() {
      var i = this;
      i.$slides = i.$slideTrack.children(i.options.slide).addClass("slick-slide"), i.slideCount = i.$slides.length, i.currentSlide >= i.slideCount && i.currentSlide !== 0 && (i.currentSlide = i.currentSlide - i.options.slidesToScroll), i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0), i.registerBreakpoints(), i.setProps(), i.setupInfinite(), i.buildArrows(), i.updateArrows(), i.initArrowEvents(), i.buildDots(), i.updateDots(), i.initDotEvents(), i.cleanUpSlideEvents(), i.initSlideEvents(), i.checkResponsive(!1, !0), i.options.focusOnSelect === !0 && C(i.$slideTrack).children().on("click.slick", i.selectHandler), i.setSlideClasses(typeof i.currentSlide == "number" ? i.currentSlide : 0), i.setPosition(), i.focusHandler(), i.paused = !i.options.autoplay, i.autoPlay(), i.$slider.trigger("reInit", [i]);
    }, x.prototype.resize = function() {
      var i = this;
      C(window).width() !== i.windowWidth && (clearTimeout(i.windowDelay), i.windowDelay = window.setTimeout(function() {
        i.windowWidth = C(window).width(), i.checkResponsive(), i.unslicked || i.setPosition();
      }, 50));
    }, x.prototype.removeSlide = x.prototype.slickRemove = function(i, o, c) {
      var p = this;
      if (typeof i == "boolean" ? (o = i, i = o === !0 ? 0 : p.slideCount - 1) : i = o === !0 ? --i : i, p.slideCount < 1 || i < 0 || i > p.slideCount - 1)
        return !1;
      p.unload(), c === !0 ? p.$slideTrack.children().remove() : p.$slideTrack.children(this.options.slide).eq(i).remove(), p.$slides = p.$slideTrack.children(this.options.slide), p.$slideTrack.children(this.options.slide).detach(), p.$slideTrack.append(p.$slides), p.$slidesCache = p.$slides, p.reinit();
    }, x.prototype.setCSS = function(i) {
      var o = this, c = {}, p, g;
      o.options.rtl === !0 && (i = -i), p = o.positionProp == "left" ? Math.ceil(i) + "px" : "0px", g = o.positionProp == "top" ? Math.ceil(i) + "px" : "0px", c[o.positionProp] = i, o.transformsEnabled === !1 ? o.$slideTrack.css(c) : (c = {}, o.cssTransitions === !1 ? (c[o.animType] = "translate(" + p + ", " + g + ")", o.$slideTrack.css(c)) : (c[o.animType] = "translate3d(" + p + ", " + g + ", 0px)", o.$slideTrack.css(c)));
    }, x.prototype.setDimensions = function() {
      var i = this;
      i.options.vertical === !1 ? i.options.centerMode === !0 && i.$list.css({
        padding: "0px " + i.options.centerPadding
      }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), i.options.centerMode === !0 && i.$list.css({
        padding: i.options.centerPadding + " 0px"
      })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), i.options.vertical === !1 && i.options.variableWidth === !1 ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : i.options.variableWidth === !0 ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
      var o = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
      i.options.variableWidth === !1 && i.$slideTrack.children(".slick-slide").width(i.slideWidth - o);
    }, x.prototype.setFade = function() {
      var i = this, o;
      i.$slides.each(function(c, p) {
        o = i.slideWidth * c * -1, i.options.rtl === !0 ? C(p).css({
          position: "relative",
          right: o,
          top: 0,
          zIndex: i.options.zIndex - 2,
          opacity: 0
        }) : C(p).css({
          position: "relative",
          left: o,
          top: 0,
          zIndex: i.options.zIndex - 2,
          opacity: 0
        });
      }), i.$slides.eq(i.currentSlide).css({
        zIndex: i.options.zIndex - 1,
        opacity: 1
      });
    }, x.prototype.setHeight = function() {
      var i = this;
      if (i.options.slidesToShow === 1 && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
        var o = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.css("height", o);
      }
    }, x.prototype.setOption = x.prototype.slickSetOption = function() {
      var i = this, o, c, p, g, E = !1, _;
      if (C.type(arguments[0]) === "object" ? (p = arguments[0], E = arguments[1], _ = "multiple") : C.type(arguments[0]) === "string" && (p = arguments[0], g = arguments[1], E = arguments[2], arguments[0] === "responsive" && C.type(arguments[1]) === "array" ? _ = "responsive" : typeof arguments[1] < "u" && (_ = "single")), _ === "single")
        i.options[p] = g;
      else if (_ === "multiple")
        C.each(p, function(V, $) {
          i.options[V] = $;
        });
      else if (_ === "responsive")
        for (c in g)
          if (C.type(i.options.responsive) !== "array")
            i.options.responsive = [g[c]];
          else {
            for (o = i.options.responsive.length - 1; o >= 0; )
              i.options.responsive[o].breakpoint === g[c].breakpoint && i.options.responsive.splice(o, 1), o--;
            i.options.responsive.push(g[c]);
          }
      E && (i.unload(), i.reinit());
    }, x.prototype.setPosition = function() {
      var i = this;
      i.setDimensions(), i.setHeight(), i.options.fade === !1 ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i]);
    }, x.prototype.setProps = function() {
      var i = this, o = document.body.style;
      i.positionProp = i.options.vertical === !0 ? "top" : "left", i.positionProp === "top" ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), (o.WebkitTransition !== void 0 || o.MozTransition !== void 0 || o.msTransition !== void 0) && i.options.useCSS === !0 && (i.cssTransitions = !0), i.options.fade && (typeof i.options.zIndex == "number" ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), o.OTransform !== void 0 && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", o.perspectiveProperty === void 0 && o.webkitPerspective === void 0 && (i.animType = !1)), o.MozTransform !== void 0 && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", o.perspectiveProperty === void 0 && o.MozPerspective === void 0 && (i.animType = !1)), o.webkitTransform !== void 0 && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", o.perspectiveProperty === void 0 && o.webkitPerspective === void 0 && (i.animType = !1)), o.msTransform !== void 0 && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", o.msTransform === void 0 && (i.animType = !1)), o.transform !== void 0 && i.animType !== !1 && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && i.animType !== null && i.animType !== !1;
    }, x.prototype.setSlideClasses = function(i) {
      var o = this, c, p, g, E;
      if (p = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), o.$slides.eq(i).addClass("slick-current"), o.options.centerMode === !0) {
        var _ = o.options.slidesToShow % 2 === 0 ? 1 : 0;
        c = Math.floor(o.options.slidesToShow / 2), o.options.infinite === !0 && (i >= c && i <= o.slideCount - 1 - c ? o.$slides.slice(i - c + _, i + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (g = o.options.slidesToShow + i, p.slice(g - c + 1 + _, g + c + 2).addClass("slick-active").attr("aria-hidden", "false")), i === 0 ? p.eq(p.length - 1 - o.options.slidesToShow).addClass("slick-center") : i === o.slideCount - 1 && p.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(i).addClass("slick-center");
      } else
        i >= 0 && i <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(i, i + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : p.length <= o.options.slidesToShow ? p.addClass("slick-active").attr("aria-hidden", "false") : (E = o.slideCount % o.options.slidesToShow, g = o.options.infinite === !0 ? o.options.slidesToShow + i : i, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - i < o.options.slidesToShow ? p.slice(g - (o.options.slidesToShow - E), g + E).addClass("slick-active").attr("aria-hidden", "false") : p.slice(g, g + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
      (o.options.lazyLoad === "ondemand" || o.options.lazyLoad === "anticipated") && o.lazyLoad();
    }, x.prototype.setupInfinite = function() {
      var i = this, o, c, p;
      if (i.options.fade === !0 && (i.options.centerMode = !1), i.options.infinite === !0 && i.options.fade === !1 && (c = null, i.slideCount > i.options.slidesToShow)) {
        for (i.options.centerMode === !0 ? p = i.options.slidesToShow + 1 : p = i.options.slidesToShow, o = i.slideCount; o > i.slideCount - p; o -= 1)
          c = o - 1, C(i.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c - i.slideCount).prependTo(i.$slideTrack).addClass("slick-cloned");
        for (o = 0; o < p + i.slideCount; o += 1)
          c = o, C(i.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c + i.slideCount).appendTo(i.$slideTrack).addClass("slick-cloned");
        i.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
          C(this).attr("id", "");
        });
      }
    }, x.prototype.interrupt = function(i) {
      var o = this;
      i || o.autoPlay(), o.interrupted = i;
    }, x.prototype.selectHandler = function(i) {
      var o = this, c = C(i.target).is(".slick-slide") ? C(i.target) : C(i.target).parents(".slick-slide"), p = parseInt(c.attr("data-slick-index"));
      if (p || (p = 0), o.slideCount <= o.options.slidesToShow) {
        o.slideHandler(p, !1, !0);
        return;
      }
      o.slideHandler(p);
    }, x.prototype.slideHandler = function(i, o, c) {
      var p, g, E, _, V = null, $ = this, se;
      if (o = o || !1, !($.animating === !0 && $.options.waitForAnimate === !0) && !($.options.fade === !0 && $.currentSlide === i)) {
        if (o === !1 && $.asNavFor(i), p = i, V = $.getLeft(p), _ = $.getLeft($.currentSlide), $.currentLeft = $.swipeLeft === null ? _ : $.swipeLeft, $.options.infinite === !1 && $.options.centerMode === !1 && (i < 0 || i > $.getDotCount() * $.options.slidesToScroll)) {
          $.options.fade === !1 && (p = $.currentSlide, c !== !0 && $.slideCount > $.options.slidesToShow ? $.animateSlide(_, function() {
            $.postSlide(p);
          }) : $.postSlide(p));
          return;
        } else if ($.options.infinite === !1 && $.options.centerMode === !0 && (i < 0 || i > $.slideCount - $.options.slidesToScroll)) {
          $.options.fade === !1 && (p = $.currentSlide, c !== !0 && $.slideCount > $.options.slidesToShow ? $.animateSlide(_, function() {
            $.postSlide(p);
          }) : $.postSlide(p));
          return;
        }
        if ($.options.autoplay && clearInterval($.autoPlayTimer), p < 0 ? $.slideCount % $.options.slidesToScroll !== 0 ? g = $.slideCount - $.slideCount % $.options.slidesToScroll : g = $.slideCount + p : p >= $.slideCount ? $.slideCount % $.options.slidesToScroll !== 0 ? g = 0 : g = p - $.slideCount : g = p, $.animating = !0, $.$slider.trigger("beforeChange", [$, $.currentSlide, g]), E = $.currentSlide, $.currentSlide = g, $.setSlideClasses($.currentSlide), $.options.asNavFor && (se = $.getNavTarget(), se = se.slick("getSlick"), se.slideCount <= se.options.slidesToShow && se.setSlideClasses($.currentSlide)), $.updateDots(), $.updateArrows(), $.options.fade === !0) {
          c !== !0 ? ($.fadeSlideOut(E), $.fadeSlide(g, function() {
            $.postSlide(g);
          })) : $.postSlide(g), $.animateHeight();
          return;
        }
        c !== !0 && $.slideCount > $.options.slidesToShow ? $.animateSlide(V, function() {
          $.postSlide(g);
        }) : $.postSlide(g);
      }
    }, x.prototype.startLoad = function() {
      var i = this;
      i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading");
    }, x.prototype.swipeDirection = function() {
      var i, o, c, p, g = this;
      return i = g.touchObject.startX - g.touchObject.curX, o = g.touchObject.startY - g.touchObject.curY, c = Math.atan2(o, i), p = Math.round(c * 180 / Math.PI), p < 0 && (p = 360 - Math.abs(p)), p <= 45 && p >= 0 || p <= 360 && p >= 315 ? g.options.rtl === !1 ? "left" : "right" : p >= 135 && p <= 225 ? g.options.rtl === !1 ? "right" : "left" : g.options.verticalSwiping === !0 ? p >= 35 && p <= 135 ? "down" : "up" : "vertical";
    }, x.prototype.swipeEnd = function(i) {
      var o = this, c, p;
      if (o.dragging = !1, o.swiping = !1, o.scrolling)
        return o.scrolling = !1, !1;
      if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), o.touchObject.curX === void 0)
        return !1;
      if (o.touchObject.edgeHit === !0 && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
        switch (p = o.swipeDirection(), p) {
          case "left":
          case "down":
            c = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
            break;
          case "right":
          case "up":
            c = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1;
            break;
        }
        p != "vertical" && (o.slideHandler(c), o.touchObject = {}, o.$slider.trigger("swipe", [o, p]));
      } else
        o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {});
    }, x.prototype.swipeHandler = function(i) {
      var o = this;
      if (!(o.options.swipe === !1 || "ontouchend" in document && o.options.swipe === !1) && !(o.options.draggable === !1 && i.type.indexOf("mouse") !== -1))
        switch (o.touchObject.fingerCount = i.originalEvent && i.originalEvent.touches !== void 0 ? i.originalEvent.touches.length : 1, o.touchObject.minSwipe = o.listWidth / o.options.touchThreshold, o.options.verticalSwiping === !0 && (o.touchObject.minSwipe = o.listHeight / o.options.touchThreshold), i.data.action) {
          case "start":
            o.swipeStart(i);
            break;
          case "move":
            o.swipeMove(i);
            break;
          case "end":
            o.swipeEnd(i);
            break;
        }
    }, x.prototype.swipeMove = function(i) {
      var o = this, c, p, g, E, _, V;
      if (_ = i.originalEvent !== void 0 ? i.originalEvent.touches : null, !o.dragging || o.scrolling || _ && _.length !== 1)
        return !1;
      if (c = o.getLeft(o.currentSlide), o.touchObject.curX = _ !== void 0 ? _[0].pageX : i.clientX, o.touchObject.curY = _ !== void 0 ? _[0].pageY : i.clientY, o.touchObject.swipeLength = Math.round(Math.sqrt(
        Math.pow(o.touchObject.curX - o.touchObject.startX, 2)
      )), V = Math.round(Math.sqrt(
        Math.pow(o.touchObject.curY - o.touchObject.startY, 2)
      )), !o.options.verticalSwiping && !o.swiping && V > 4)
        return o.scrolling = !0, !1;
      if (o.options.verticalSwiping === !0 && (o.touchObject.swipeLength = V), p = o.swipeDirection(), i.originalEvent !== void 0 && o.touchObject.swipeLength > 4 && (o.swiping = !0, i.preventDefault()), E = (o.options.rtl === !1 ? 1 : -1) * (o.touchObject.curX > o.touchObject.startX ? 1 : -1), o.options.verticalSwiping === !0 && (E = o.touchObject.curY > o.touchObject.startY ? 1 : -1), g = o.touchObject.swipeLength, o.touchObject.edgeHit = !1, o.options.infinite === !1 && (o.currentSlide === 0 && p === "right" || o.currentSlide >= o.getDotCount() && p === "left") && (g = o.touchObject.swipeLength * o.options.edgeFriction, o.touchObject.edgeHit = !0), o.options.vertical === !1 ? o.swipeLeft = c + g * E : o.swipeLeft = c + g * (o.$list.height() / o.listWidth) * E, o.options.verticalSwiping === !0 && (o.swipeLeft = c + g * E), o.options.fade === !0 || o.options.touchMove === !1)
        return !1;
      if (o.animating === !0)
        return o.swipeLeft = null, !1;
      o.setCSS(o.swipeLeft);
    }, x.prototype.swipeStart = function(i) {
      var o = this, c;
      if (o.interrupted = !0, o.touchObject.fingerCount !== 1 || o.slideCount <= o.options.slidesToShow)
        return o.touchObject = {}, !1;
      i.originalEvent !== void 0 && i.originalEvent.touches !== void 0 && (c = i.originalEvent.touches[0]), o.touchObject.startX = o.touchObject.curX = c !== void 0 ? c.pageX : i.clientX, o.touchObject.startY = o.touchObject.curY = c !== void 0 ? c.pageY : i.clientY, o.dragging = !0;
    }, x.prototype.unfilterSlides = x.prototype.slickUnfilter = function() {
      var i = this;
      i.$slidesCache !== null && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit());
    }, x.prototype.unload = function() {
      var i = this;
      C(".slick-cloned", i.$slider).remove(), i.$dots && i.$dots.remove(), i.$prevArrow && i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove(), i.$nextArrow && i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove(), i.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
    }, x.prototype.unslick = function(i) {
      var o = this;
      o.$slider.trigger("unslick", [o, i]), o.destroy();
    }, x.prototype.updateArrows = function() {
      var i = this;
      Math.floor(i.options.slidesToShow / 2), i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.currentSlide === 0 ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (i.currentSlide >= i.slideCount - i.options.slidesToShow && i.options.centerMode === !1 || i.currentSlide >= i.slideCount - 1 && i.options.centerMode === !0) && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
    }, x.prototype.updateDots = function() {
      var i = this;
      i.$dots !== null && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"));
    }, x.prototype.visibility = function() {
      var i = this;
      i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1);
    }, C.fn.slick = function() {
      var i = this, o = arguments[0], c = Array.prototype.slice.call(arguments, 1), p = i.length, g, E;
      for (g = 0; g < p; g++)
        if (typeof o == "object" || typeof o > "u" ? i[g].slick = new x(i[g], o) : E = i[g].slick[o].apply(i[g].slick, c), typeof E < "u")
          return E;
      return i;
    };
  });
})(er);
var bt = /* @__PURE__ */ ((J) => (J.SLICK_EVENTS_INIT = "init", J.SLICK_EVENTS_REINIT = "reInit", J.SLICK_EVENTS_DESTROY = "destroy", J.SLICK_EVENTS_SET_POSITION = "setPosition", J.SLICK_EVENTS_AFTER_CHANGE = "afterChange", J.SLICK_EVENTS_BEFORE_CHANGE = "beforeChange", J.SLICK_EVENTS_BREAKPOINT = "breakpoint", J.SLICK_EVENTS_EDGE = "edge", J.SLICK_EVENTS_SWIPE = "swipe", J.SLICK_EVENTS_LAZY_LOADED = "lazyLoaded", J.SLICK_EVENTS_LAZY_LOAD_ERROR = "lazyLoadError", J))(bt || {});
const tr = {
  class: /* @__PURE__ */ Gn(["vue-slick__carousel"])
}, ir = /* @__PURE__ */ Fn({
  __name: "VueSlickCarousel",
  props: {
    options: { default: () => ({}) }
  },
  setup(J, { emit: R }) {
    const C = J, x = (o) => {
      Object.keys(bt).forEach((c) => {
        o.on(bt[c], (...p) => {
          R(bt[c], ...p);
        });
      });
    }, i = Bn("vue-slick__carousel");
    return Un(() => {
      const o = Zn(`.${i.value}`).slick(C.options);
      x(o);
    }), (o, c) => (Vn(), Xn("div", tr, [
      Yn(o.$slots, "default")
    ]));
  }
});
function nr(J) {
  J.component("VueSlickCarousel", ir);
}
const or = {
  install: nr
};
export {
  ir as VueSlickCarousel,
  or as default,
  nr as install
};
