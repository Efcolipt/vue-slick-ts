import { defineComponent as Bn, onMounted as Fn, openBlock as Un, createElementBlock as Xn, renderSlot as Vn } from "vue";
var Yn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Gn(K) {
  return K && K.__esModule && Object.prototype.hasOwnProperty.call(K, "default") ? K.default : K;
}
var Ft = { exports: {} };
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
function Pi() {
  return Hi || (Hi = 1, function(K) {
    (function(W, $) {
      K.exports = W.document ? $(W, !0) : function(C) {
        if (!C.document)
          throw new Error("jQuery requires a window with a document");
        return $(C);
      };
    })(typeof window < "u" ? window : Yn, function(W, $) {
      var C = [], i = Object.getPrototypeOf, u = C.slice, v = C.flat ? function(e) {
        return C.flat.call(e);
      } : function(e) {
        return C.concat.apply([], e);
      }, d = C.push, g = C.indexOf, p = {}, H = p.toString, D = p.hasOwnProperty, re = D.toString, j = re.call(Object), M = {}, _ = function(t) {
        return typeof t == "function" && typeof t.nodeType != "number" && typeof t.item != "function";
      }, xe = function(t) {
        return t != null && t === t.window;
      }, z = W.document, Ye = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
      };
      function Ut(e, t, n) {
        n = n || z;
        var r, s, a = n.createElement("script");
        if (a.text = e, t)
          for (r in Ye)
            s = t[r] || t.getAttribute && t.getAttribute(r), s && a.setAttribute(r, s);
        n.head.appendChild(a).parentNode.removeChild(a);
      }
      function qe(e) {
        return e == null ? e + "" : typeof e == "object" || typeof e == "function" ? p[H.call(e)] || "object" : typeof e;
      }
      var Xt = "3.7.0", Li = /HTML$/i, o = function(e, t) {
        return new o.fn.init(e, t);
      };
      o.fn = o.prototype = {
        // The current version of jQuery being used
        jquery: Xt,
        constructor: o,
        // The default length of a jQuery object is 0
        length: 0,
        toArray: function() {
          return u.call(this);
        },
        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function(e) {
          return e == null ? u.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function(e) {
          var t = o.merge(this.constructor(), e);
          return t.prevObject = this, t;
        },
        // Execute a callback for every element in the matched set.
        each: function(e) {
          return o.each(this, e);
        },
        map: function(e) {
          return this.pushStack(o.map(this, function(t, n) {
            return e.call(t, n, t);
          }));
        },
        slice: function() {
          return this.pushStack(u.apply(this, arguments));
        },
        first: function() {
          return this.eq(0);
        },
        last: function() {
          return this.eq(-1);
        },
        even: function() {
          return this.pushStack(o.grep(this, function(e, t) {
            return (t + 1) % 2;
          }));
        },
        odd: function() {
          return this.pushStack(o.grep(this, function(e, t) {
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
        push: d,
        sort: C.sort,
        splice: C.splice
      }, o.extend = o.fn.extend = function() {
        var e, t, n, r, s, a, l = arguments[0] || {}, h = 1, f = arguments.length, m = !1;
        for (typeof l == "boolean" && (m = l, l = arguments[h] || {}, h++), typeof l != "object" && !_(l) && (l = {}), h === f && (l = this, h--); h < f; h++)
          if ((e = arguments[h]) != null)
            for (t in e)
              r = e[t], !(t === "__proto__" || l === r) && (m && r && (o.isPlainObject(r) || (s = Array.isArray(r))) ? (n = l[t], s && !Array.isArray(n) ? a = [] : !s && !o.isPlainObject(n) ? a = {} : a = n, s = !1, l[t] = o.extend(m, a, r)) : r !== void 0 && (l[t] = r));
        return l;
      }, o.extend({
        // Unique for each copy of jQuery on the page
        expando: "jQuery" + (Xt + Math.random()).replace(/\D/g, ""),
        // Assume jQuery is ready without the ready module
        isReady: !0,
        error: function(e) {
          throw new Error(e);
        },
        noop: function() {
        },
        isPlainObject: function(e) {
          var t, n;
          return !e || H.call(e) !== "[object Object]" ? !1 : (t = i(e), t ? (n = D.call(t, "constructor") && t.constructor, typeof n == "function" && re.call(n) === j) : !0);
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
          Ut(e, { nonce: t && t.nonce }, n);
        },
        each: function(e, t) {
          var n, r = 0;
          if (bt(e))
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
          var t, n = "", r = 0, s = e.nodeType;
          if (s) {
            if (s === 1 || s === 9 || s === 11)
              return e.textContent;
            if (s === 3 || s === 4)
              return e.nodeValue;
          } else
            for (; t = e[r++]; )
              n += o.text(t);
          return n;
        },
        // results is for internal usage only
        makeArray: function(e, t) {
          var n = t || [];
          return e != null && (bt(Object(e)) ? o.merge(
            n,
            typeof e == "string" ? [e] : e
          ) : d.call(n, e)), n;
        },
        inArray: function(e, t, n) {
          return t == null ? -1 : g.call(t, e, n);
        },
        isXMLDoc: function(e) {
          var t = e && e.namespaceURI, n = e && (e.ownerDocument || e).documentElement;
          return !Li.test(t || n && n.nodeName || "HTML");
        },
        // Support: Android <=4.0 only, PhantomJS 1 only
        // push.apply(_, arraylike) throws on ancient WebKit
        merge: function(e, t) {
          for (var n = +t.length, r = 0, s = e.length; r < n; r++)
            e[s++] = t[r];
          return e.length = s, e;
        },
        grep: function(e, t, n) {
          for (var r, s = [], a = 0, l = e.length, h = !n; a < l; a++)
            r = !t(e[a], a), r !== h && s.push(e[a]);
          return s;
        },
        // arg is for internal usage only
        map: function(e, t, n) {
          var r, s, a = 0, l = [];
          if (bt(e))
            for (r = e.length; a < r; a++)
              s = t(e[a], a, n), s != null && l.push(s);
          else
            for (a in e)
              s = t(e[a], a, n), s != null && l.push(s);
          return v(l);
        },
        // A global GUID counter for objects
        guid: 1,
        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support: M
      }), typeof Symbol == "function" && (o.fn[Symbol.iterator] = C[Symbol.iterator]), o.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
        function(e, t) {
          p["[object " + t + "]"] = t.toLowerCase();
        }
      );
      function bt(e) {
        var t = !!e && "length" in e && e.length, n = qe(e);
        return _(e) || xe(e) ? !1 : n === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in e;
      }
      function ee(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var Mi = C.pop, qi = C.sort, Ii = C.splice, Q = "[\\x20\\t\\r\\n\\f]", Ge = new RegExp(
        "^" + Q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Q + "+$",
        "g"
      );
      o.contains = function(e, t) {
        var n = t && t.parentNode;
        return e === n || !!(n && n.nodeType === 1 && // Support: IE 9 - 11+
        // IE doesn't have `contains` on SVG.
        (e.contains ? e.contains(n) : e.compareDocumentPosition && e.compareDocumentPosition(n) & 16));
      };
      var _i = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
      function zi(e, t) {
        return t ? e === "\0" ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
      }
      o.escapeSelector = function(e) {
        return (e + "").replace(_i, zi);
      };
      var ke = z, wt = d;
      (function() {
        var e, t, n, r, s, a = wt, l, h, f, m, S, k = o.expando, w = 0, A = 0, R = pt(), Y = pt(), F = pt(), ne = pt(), ie = function(c, y) {
          return c === y && (s = !0), 0;
        }, me = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", be = "(?:\\\\[\\da-fA-F]{1,6}" + Q + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", V = "\\[" + Q + "*(" + be + ")(?:" + Q + // Operator (capture 2)
        "*([*^$|!~]?=)" + Q + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
        `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + be + "))|)" + Q + "*\\]", Le = ":(" + be + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + V + ")*)|.*)\\)|)", G = new RegExp(Q + "+", "g"), te = new RegExp("^" + Q + "*," + Q + "*"), rt = new RegExp("^" + Q + "*([>+~]|" + Q + ")" + Q + "*"), qt = new RegExp(Q + "|>"), we = new RegExp(Le), ot = new RegExp("^" + be + "$"), Te = {
          ID: new RegExp("^#(" + be + ")"),
          CLASS: new RegExp("^\\.(" + be + ")"),
          TAG: new RegExp("^(" + be + "|[*])"),
          ATTR: new RegExp("^" + V),
          PSEUDO: new RegExp("^" + Le),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + Q + "*(even|odd|(([+-]|)(\\d*)n|)" + Q + "*(?:([+-]|)" + Q + "*(\\d+)|))" + Q + "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + me + ")$", "i"),
          // For use in libraries implementing .is()
          // We use this for POS matching in `select`
          needsContext: new RegExp("^" + Q + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + Q + "*((?:-\\d)?\\d*)" + Q + "*\\)|)(?=[^-]|$)", "i")
        }, De = /^(?:input|select|textarea|button)$/i, Oe = /^h\d$/i, fe = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, It = /[+~]/, Ae = new RegExp("\\\\[\\da-fA-F]{1,6}" + Q + "?|\\\\([^\\r\\n\\f])", "g"), Ee = function(c, y) {
          var b = "0x" + c.slice(1) - 65536;
          return y || (b < 0 ? String.fromCharCode(b + 65536) : String.fromCharCode(b >> 10 | 55296, b & 1023 | 56320));
        }, Mn = function() {
          Ne();
        }, qn = yt(
          function(c) {
            return c.disabled === !0 && ee(c, "fieldset");
          },
          { dir: "parentNode", next: "legend" }
        );
        function In() {
          try {
            return l.activeElement;
          } catch {
          }
        }
        try {
          a.apply(
            C = u.call(ke.childNodes),
            ke.childNodes
          ), C[ke.childNodes.length].nodeType;
        } catch {
          a = {
            apply: function(y, b) {
              wt.apply(y, u.call(b));
            },
            call: function(y) {
              wt.apply(y, u.call(arguments, 1));
            }
          };
        }
        function J(c, y, b, T) {
          var x, E, O, P, N, U, I, B = y && y.ownerDocument, X = y ? y.nodeType : 9;
          if (b = b || [], typeof c != "string" || !c || X !== 1 && X !== 9 && X !== 11)
            return b;
          if (!T && (Ne(y), y = y || l, f)) {
            if (X !== 11 && (N = fe.exec(c)))
              if (x = N[1]) {
                if (X === 9)
                  if (O = y.getElementById(x)) {
                    if (O.id === x)
                      return a.call(b, O), b;
                  } else
                    return b;
                else if (B && (O = B.getElementById(x)) && J.contains(y, O) && O.id === x)
                  return a.call(b, O), b;
              } else {
                if (N[2])
                  return a.apply(b, y.getElementsByTagName(c)), b;
                if ((x = N[3]) && y.getElementsByClassName)
                  return a.apply(b, y.getElementsByClassName(x)), b;
              }
            if (!ne[c + " "] && (!m || !m.test(c))) {
              if (I = c, B = y, X === 1 && (qt.test(c) || rt.test(c))) {
                for (B = It.test(c) && _t(y.parentNode) || y, (B != y || !M.scope) && ((P = y.getAttribute("id")) ? P = o.escapeSelector(P) : y.setAttribute("id", P = k)), U = ht(c), E = U.length; E--; )
                  U[E] = (P ? "#" + P : ":scope") + " " + gt(U[E]);
                I = U.join(",");
              }
              try {
                return a.apply(
                  b,
                  B.querySelectorAll(I)
                ), b;
              } catch {
                ne(c, !0);
              } finally {
                P === k && y.removeAttribute("id");
              }
            }
          }
          return ji(c.replace(Ge, "$1"), y, b, T);
        }
        function pt() {
          var c = [];
          function y(b, T) {
            return c.push(b + " ") > t.cacheLength && delete y[c.shift()], y[b + " "] = T;
          }
          return y;
        }
        function ge(c) {
          return c[k] = !0, c;
        }
        function Xe(c) {
          var y = l.createElement("fieldset");
          try {
            return !!c(y);
          } catch {
            return !1;
          } finally {
            y.parentNode && y.parentNode.removeChild(y), y = null;
          }
        }
        function _n(c) {
          return function(y) {
            return ee(y, "input") && y.type === c;
          };
        }
        function zn(c) {
          return function(y) {
            return (ee(y, "input") || ee(y, "button")) && y.type === c;
          };
        }
        function Oi(c) {
          return function(y) {
            return "form" in y ? y.parentNode && y.disabled === !1 ? "label" in y ? "label" in y.parentNode ? y.parentNode.disabled === c : y.disabled === c : y.isDisabled === c || // Where there is no isDisabled, check manually
            y.isDisabled !== !c && qn(y) === c : y.disabled === c : "label" in y ? y.disabled === c : !1;
          };
        }
        function Me(c) {
          return ge(function(y) {
            return y = +y, ge(function(b, T) {
              for (var x, E = c([], b.length, y), O = E.length; O--; )
                b[x = E[O]] && (b[x] = !(T[x] = b[x]));
            });
          });
        }
        function _t(c) {
          return c && typeof c.getElementsByTagName < "u" && c;
        }
        function Ne(c) {
          var y, b = c ? c.ownerDocument || c : ke;
          return b == l || b.nodeType !== 9 || !b.documentElement || (l = b, h = l.documentElement, f = !o.isXMLDoc(l), S = h.matches || h.webkitMatchesSelector || h.msMatchesSelector, ke != l && (y = l.defaultView) && y.top !== y && y.addEventListener("unload", Mn), M.getById = Xe(function(T) {
            return h.appendChild(T).id = o.expando, !l.getElementsByName || !l.getElementsByName(o.expando).length;
          }), M.disconnectedMatch = Xe(function(T) {
            return S.call(T, "*");
          }), M.scope = Xe(function() {
            return l.querySelectorAll(":scope");
          }), M.cssHas = Xe(function() {
            try {
              return l.querySelector(":has(*,:jqfake)"), !1;
            } catch {
              return !0;
            }
          }), M.getById ? (t.filter.ID = function(T) {
            var x = T.replace(Ae, Ee);
            return function(E) {
              return E.getAttribute("id") === x;
            };
          }, t.find.ID = function(T, x) {
            if (typeof x.getElementById < "u" && f) {
              var E = x.getElementById(T);
              return E ? [E] : [];
            }
          }) : (t.filter.ID = function(T) {
            var x = T.replace(Ae, Ee);
            return function(E) {
              var O = typeof E.getAttributeNode < "u" && E.getAttributeNode("id");
              return O && O.value === x;
            };
          }, t.find.ID = function(T, x) {
            if (typeof x.getElementById < "u" && f) {
              var E, O, P, N = x.getElementById(T);
              if (N) {
                if (E = N.getAttributeNode("id"), E && E.value === T)
                  return [N];
                for (P = x.getElementsByName(T), O = 0; N = P[O++]; )
                  if (E = N.getAttributeNode("id"), E && E.value === T)
                    return [N];
              }
              return [];
            }
          }), t.find.TAG = function(T, x) {
            return typeof x.getElementsByTagName < "u" ? x.getElementsByTagName(T) : x.querySelectorAll(T);
          }, t.find.CLASS = function(T, x) {
            if (typeof x.getElementsByClassName < "u" && f)
              return x.getElementsByClassName(T);
          }, m = [], Xe(function(T) {
            var x;
            h.appendChild(T).innerHTML = "<a id='" + k + "' href='' disabled='disabled'></a><select id='" + k + "-\r\\' disabled='disabled'><option selected=''></option></select>", T.querySelectorAll("[selected]").length || m.push("\\[" + Q + "*(?:value|" + me + ")"), T.querySelectorAll("[id~=" + k + "-]").length || m.push("~="), T.querySelectorAll("a#" + k + "+*").length || m.push(".#.+[+~]"), T.querySelectorAll(":checked").length || m.push(":checked"), x = l.createElement("input"), x.setAttribute("type", "hidden"), T.appendChild(x).setAttribute("name", "D"), h.appendChild(T).disabled = !0, T.querySelectorAll(":disabled").length !== 2 && m.push(":enabled", ":disabled"), x = l.createElement("input"), x.setAttribute("name", ""), T.appendChild(x), T.querySelectorAll("[name='']").length || m.push("\\[" + Q + "*name" + Q + "*=" + Q + `*(?:''|"")`);
          }), M.cssHas || m.push(":has"), m = m.length && new RegExp(m.join("|")), ie = function(T, x) {
            if (T === x)
              return s = !0, 0;
            var E = !T.compareDocumentPosition - !x.compareDocumentPosition;
            return E || (E = (T.ownerDocument || T) == (x.ownerDocument || x) ? T.compareDocumentPosition(x) : (
              // Otherwise we know they are disconnected
              1
            ), E & 1 || !M.sortDetached && x.compareDocumentPosition(T) === E ? T === l || T.ownerDocument == ke && J.contains(ke, T) ? -1 : x === l || x.ownerDocument == ke && J.contains(ke, x) ? 1 : r ? g.call(r, T) - g.call(r, x) : 0 : E & 4 ? -1 : 1);
          }), l;
        }
        J.matches = function(c, y) {
          return J(c, null, null, y);
        }, J.matchesSelector = function(c, y) {
          if (Ne(c), f && !ne[y + " "] && (!m || !m.test(y)))
            try {
              var b = S.call(c, y);
              if (b || M.disconnectedMatch || // As well, disconnected nodes are said to be in a document
              // fragment in IE 9
              c.document && c.document.nodeType !== 11)
                return b;
            } catch {
              ne(y, !0);
            }
          return J(y, l, null, [c]).length > 0;
        }, J.contains = function(c, y) {
          return (c.ownerDocument || c) != l && Ne(c), o.contains(c, y);
        }, J.attr = function(c, y) {
          (c.ownerDocument || c) != l && Ne(c);
          var b = t.attrHandle[y.toLowerCase()], T = b && D.call(t.attrHandle, y.toLowerCase()) ? b(c, y, !f) : void 0;
          return T !== void 0 ? T : c.getAttribute(y);
        }, J.error = function(c) {
          throw new Error("Syntax error, unrecognized expression: " + c);
        }, o.uniqueSort = function(c) {
          var y, b = [], T = 0, x = 0;
          if (s = !M.sortStable, r = !M.sortStable && u.call(c, 0), qi.call(c, ie), s) {
            for (; y = c[x++]; )
              y === c[x] && (T = b.push(x));
            for (; T--; )
              Ii.call(c, b[T], 1);
          }
          return r = null, c;
        }, o.fn.uniqueSort = function() {
          return this.pushStack(o.uniqueSort(u.apply(this)));
        }, t = o.expr = {
          // Can be adjusted by the user
          cacheLength: 50,
          createPseudo: ge,
          match: Te,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" }
          },
          preFilter: {
            ATTR: function(c) {
              return c[1] = c[1].replace(Ae, Ee), c[3] = (c[3] || c[4] || c[5] || "").replace(Ae, Ee), c[2] === "~=" && (c[3] = " " + c[3] + " "), c.slice(0, 4);
            },
            CHILD: function(c) {
              return c[1] = c[1].toLowerCase(), c[1].slice(0, 3) === "nth" ? (c[3] || J.error(c[0]), c[4] = +(c[4] ? c[5] + (c[6] || 1) : 2 * (c[3] === "even" || c[3] === "odd")), c[5] = +(c[7] + c[8] || c[3] === "odd")) : c[3] && J.error(c[0]), c;
            },
            PSEUDO: function(c) {
              var y, b = !c[6] && c[2];
              return Te.CHILD.test(c[0]) ? null : (c[3] ? c[2] = c[4] || c[5] || "" : b && we.test(b) && // Get excess from tokenize (recursively)
              (y = ht(b, !0)) && // advance to the next closing parenthesis
              (y = b.indexOf(")", b.length - y) - b.length) && (c[0] = c[0].slice(0, y), c[2] = b.slice(0, y)), c.slice(0, 3));
            }
          },
          filter: {
            TAG: function(c) {
              var y = c.replace(Ae, Ee).toLowerCase();
              return c === "*" ? function() {
                return !0;
              } : function(b) {
                return ee(b, y);
              };
            },
            CLASS: function(c) {
              var y = R[c + " "];
              return y || (y = new RegExp("(^|" + Q + ")" + c + "(" + Q + "|$)")) && R(c, function(b) {
                return y.test(
                  typeof b.className == "string" && b.className || typeof b.getAttribute < "u" && b.getAttribute("class") || ""
                );
              });
            },
            ATTR: function(c, y, b) {
              return function(T) {
                var x = J.attr(T, c);
                return x == null ? y === "!=" : y ? (x += "", y === "=" ? x === b : y === "!=" ? x !== b : y === "^=" ? b && x.indexOf(b) === 0 : y === "*=" ? b && x.indexOf(b) > -1 : y === "$=" ? b && x.slice(-b.length) === b : y === "~=" ? (" " + x.replace(G, " ") + " ").indexOf(b) > -1 : y === "|=" ? x === b || x.slice(0, b.length + 1) === b + "-" : !1) : !0;
              };
            },
            CHILD: function(c, y, b, T, x) {
              var E = c.slice(0, 3) !== "nth", O = c.slice(-4) !== "last", P = y === "of-type";
              return T === 1 && x === 0 ? (
                // Shortcut for :nth-*(n)
                function(N) {
                  return !!N.parentNode;
                }
              ) : function(N, U, I) {
                var B, X, q, Z, de, oe = E !== O ? "nextSibling" : "previousSibling", pe = N.parentNode, Se = P && N.nodeName.toLowerCase(), Ve = !I && !P, se = !1;
                if (pe) {
                  if (E) {
                    for (; oe; ) {
                      for (q = N; q = q[oe]; )
                        if (P ? ee(q, Se) : q.nodeType === 1)
                          return !1;
                      de = oe = c === "only" && !de && "nextSibling";
                    }
                    return !0;
                  }
                  if (de = [O ? pe.firstChild : pe.lastChild], O && Ve) {
                    for (X = pe[k] || (pe[k] = {}), B = X[c] || [], Z = B[0] === w && B[1], se = Z && B[2], q = Z && pe.childNodes[Z]; q = ++Z && q && q[oe] || // Fallback to seeking `elem` from the start
                    (se = Z = 0) || de.pop(); )
                      if (q.nodeType === 1 && ++se && q === N) {
                        X[c] = [w, Z, se];
                        break;
                      }
                  } else if (Ve && (X = N[k] || (N[k] = {}), B = X[c] || [], Z = B[0] === w && B[1], se = Z), se === !1)
                    for (; (q = ++Z && q && q[oe] || (se = Z = 0) || de.pop()) && !((P ? ee(q, Se) : q.nodeType === 1) && ++se && (Ve && (X = q[k] || (q[k] = {}), X[c] = [w, se]), q === N)); )
                      ;
                  return se -= x, se === T || se % T === 0 && se / T >= 0;
                }
              };
            },
            PSEUDO: function(c, y) {
              var b, T = t.pseudos[c] || t.setFilters[c.toLowerCase()] || J.error("unsupported pseudo: " + c);
              return T[k] ? T(y) : T.length > 1 ? (b = [c, c, "", y], t.setFilters.hasOwnProperty(c.toLowerCase()) ? ge(function(x, E) {
                for (var O, P = T(x, y), N = P.length; N--; )
                  O = g.call(x, P[N]), x[O] = !(E[O] = P[N]);
              }) : function(x) {
                return T(x, 0, b);
              }) : T;
            }
          },
          pseudos: {
            // Potentially complex pseudos
            not: ge(function(c) {
              var y = [], b = [], T = Bt(c.replace(Ge, "$1"));
              return T[k] ? ge(function(x, E, O, P) {
                for (var N, U = T(x, null, P, []), I = x.length; I--; )
                  (N = U[I]) && (x[I] = !(E[I] = N));
              }) : function(x, E, O) {
                return y[0] = x, T(y, null, O, b), y[0] = null, !b.pop();
              };
            }),
            has: ge(function(c) {
              return function(y) {
                return J(c, y).length > 0;
              };
            }),
            contains: ge(function(c) {
              return c = c.replace(Ae, Ee), function(y) {
                return (y.textContent || o.text(y)).indexOf(c) > -1;
              };
            }),
            // "Whether an element is represented by a :lang() selector
            // is based solely on the element's language value
            // being equal to the identifier C,
            // or beginning with the identifier C immediately followed by "-".
            // The matching of C against the element's language value is performed case-insensitively.
            // The identifier C does not have to be a valid language name."
            // https://www.w3.org/TR/selectors/#lang-pseudo
            lang: ge(function(c) {
              return ot.test(c || "") || J.error("unsupported lang: " + c), c = c.replace(Ae, Ee).toLowerCase(), function(y) {
                var b;
                do
                  if (b = f ? y.lang : y.getAttribute("xml:lang") || y.getAttribute("lang"))
                    return b = b.toLowerCase(), b === c || b.indexOf(c + "-") === 0;
                while ((y = y.parentNode) && y.nodeType === 1);
                return !1;
              };
            }),
            // Miscellaneous
            target: function(c) {
              var y = W.location && W.location.hash;
              return y && y.slice(1) === c.id;
            },
            root: function(c) {
              return c === h;
            },
            focus: function(c) {
              return c === In() && l.hasFocus() && !!(c.type || c.href || ~c.tabIndex);
            },
            // Boolean properties
            enabled: Oi(!1),
            disabled: Oi(!0),
            checked: function(c) {
              return ee(c, "input") && !!c.checked || ee(c, "option") && !!c.selected;
            },
            selected: function(c) {
              return c.parentNode && c.parentNode.selectedIndex, c.selected === !0;
            },
            // Contents
            empty: function(c) {
              for (c = c.firstChild; c; c = c.nextSibling)
                if (c.nodeType < 6)
                  return !1;
              return !0;
            },
            parent: function(c) {
              return !t.pseudos.empty(c);
            },
            // Element/input types
            header: function(c) {
              return Oe.test(c.nodeName);
            },
            input: function(c) {
              return De.test(c.nodeName);
            },
            button: function(c) {
              return ee(c, "input") && c.type === "button" || ee(c, "button");
            },
            text: function(c) {
              var y;
              return ee(c, "input") && c.type === "text" && // Support: IE <10 only
              // New HTML5 attribute values (e.g., "search") appear
              // with elem.type === "text"
              ((y = c.getAttribute("type")) == null || y.toLowerCase() === "text");
            },
            // Position-in-collection
            first: Me(function() {
              return [0];
            }),
            last: Me(function(c, y) {
              return [y - 1];
            }),
            eq: Me(function(c, y, b) {
              return [b < 0 ? b + y : b];
            }),
            even: Me(function(c, y) {
              for (var b = 0; b < y; b += 2)
                c.push(b);
              return c;
            }),
            odd: Me(function(c, y) {
              for (var b = 1; b < y; b += 2)
                c.push(b);
              return c;
            }),
            lt: Me(function(c, y, b) {
              var T;
              for (b < 0 ? T = b + y : b > y ? T = y : T = b; --T >= 0; )
                c.push(T);
              return c;
            }),
            gt: Me(function(c, y, b) {
              for (var T = b < 0 ? b + y : b; ++T < y; )
                c.push(T);
              return c;
            })
          }
        }, t.pseudos.nth = t.pseudos.eq;
        for (e in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
          t.pseudos[e] = _n(e);
        for (e in { submit: !0, reset: !0 })
          t.pseudos[e] = zn(e);
        function Ni() {
        }
        Ni.prototype = t.filters = t.pseudos, t.setFilters = new Ni();
        function ht(c, y) {
          var b, T, x, E, O, P, N, U = Y[c + " "];
          if (U)
            return y ? 0 : U.slice(0);
          for (O = c, P = [], N = t.preFilter; O; ) {
            (!b || (T = te.exec(O))) && (T && (O = O.slice(T[0].length) || O), P.push(x = [])), b = !1, (T = rt.exec(O)) && (b = T.shift(), x.push({
              value: b,
              // Cast descendant combinators to space
              type: T[0].replace(Ge, " ")
            }), O = O.slice(b.length));
            for (E in t.filter)
              (T = Te[E].exec(O)) && (!N[E] || (T = N[E](T))) && (b = T.shift(), x.push({
                value: b,
                type: E,
                matches: T
              }), O = O.slice(b.length));
            if (!b)
              break;
          }
          return y ? O.length : O ? J.error(c) : (
            // Cache the tokens
            Y(c, P).slice(0)
          );
        }
        function gt(c) {
          for (var y = 0, b = c.length, T = ""; y < b; y++)
            T += c[y].value;
          return T;
        }
        function yt(c, y, b) {
          var T = y.dir, x = y.next, E = x || T, O = b && E === "parentNode", P = A++;
          return y.first ? (
            // Check against closest ancestor/preceding element
            function(N, U, I) {
              for (; N = N[T]; )
                if (N.nodeType === 1 || O)
                  return c(N, U, I);
              return !1;
            }
          ) : (
            // Check against all ancestor/preceding elements
            function(N, U, I) {
              var B, X, q = [w, P];
              if (I) {
                for (; N = N[T]; )
                  if ((N.nodeType === 1 || O) && c(N, U, I))
                    return !0;
              } else
                for (; N = N[T]; )
                  if (N.nodeType === 1 || O)
                    if (X = N[k] || (N[k] = {}), x && ee(N, x))
                      N = N[T] || N;
                    else {
                      if ((B = X[E]) && B[0] === w && B[1] === P)
                        return q[2] = B[2];
                      if (X[E] = q, q[2] = c(N, U, I))
                        return !0;
                    }
              return !1;
            }
          );
        }
        function zt(c) {
          return c.length > 1 ? function(y, b, T) {
            for (var x = c.length; x--; )
              if (!c[x](y, b, T))
                return !1;
            return !0;
          } : c[0];
        }
        function Rn(c, y, b) {
          for (var T = 0, x = y.length; T < x; T++)
            J(c, y[T], b);
          return b;
        }
        function vt(c, y, b, T, x) {
          for (var E, O = [], P = 0, N = c.length, U = y != null; P < N; P++)
            (E = c[P]) && (!b || b(E, T, x)) && (O.push(E), U && y.push(P));
          return O;
        }
        function Rt(c, y, b, T, x, E) {
          return T && !T[k] && (T = Rt(T)), x && !x[k] && (x = Rt(x, E)), ge(function(O, P, N, U) {
            var I, B, X, q, Z = [], de = [], oe = P.length, pe = O || Rn(
              y || "*",
              N.nodeType ? [N] : N,
              []
            ), Se = c && (O || !y) ? vt(pe, Z, c, N, U) : pe;
            if (b ? (q = x || (O ? c : oe || T) ? (
              // ...intermediate processing is necessary
              []
            ) : (
              // ...otherwise use results directly
              P
            ), b(Se, q, N, U)) : q = Se, T)
              for (I = vt(q, de), T(I, [], N, U), B = I.length; B--; )
                (X = I[B]) && (q[de[B]] = !(Se[de[B]] = X));
            if (O) {
              if (x || c) {
                if (x) {
                  for (I = [], B = q.length; B--; )
                    (X = q[B]) && I.push(Se[B] = X);
                  x(null, q = [], I, U);
                }
                for (B = q.length; B--; )
                  (X = q[B]) && (I = x ? g.call(O, X) : Z[B]) > -1 && (O[I] = !(P[I] = X));
              }
            } else
              q = vt(
                q === P ? q.splice(oe, q.length) : q
              ), x ? x(null, P, q, U) : a.apply(P, q);
          });
        }
        function Wt(c) {
          for (var y, b, T, x = c.length, E = t.relative[c[0].type], O = E || t.relative[" "], P = E ? 1 : 0, N = yt(function(B) {
            return B === y;
          }, O, !0), U = yt(function(B) {
            return g.call(y, B) > -1;
          }, O, !0), I = [function(B, X, q) {
            var Z = !E && (q || X != n) || ((y = X).nodeType ? N(B, X, q) : U(B, X, q));
            return y = null, Z;
          }]; P < x; P++)
            if (b = t.relative[c[P].type])
              I = [yt(zt(I), b)];
            else {
              if (b = t.filter[c[P].type].apply(null, c[P].matches), b[k]) {
                for (T = ++P; T < x && !t.relative[c[T].type]; T++)
                  ;
                return Rt(
                  P > 1 && zt(I),
                  P > 1 && gt(
                    // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                    c.slice(0, P - 1).concat({ value: c[P - 2].type === " " ? "*" : "" })
                  ).replace(Ge, "$1"),
                  b,
                  P < T && Wt(c.slice(P, T)),
                  T < x && Wt(c = c.slice(T)),
                  T < x && gt(c)
                );
              }
              I.push(b);
            }
          return zt(I);
        }
        function Wn(c, y) {
          var b = y.length > 0, T = c.length > 0, x = function(E, O, P, N, U) {
            var I, B, X, q = 0, Z = "0", de = E && [], oe = [], pe = n, Se = E || T && t.find.TAG("*", U), Ve = w += pe == null ? 1 : Math.random() || 0.1, se = Se.length;
            for (U && (n = O == l || O || U); Z !== se && (I = Se[Z]) != null; Z++) {
              if (T && I) {
                for (B = 0, !O && I.ownerDocument != l && (Ne(I), P = !f); X = c[B++]; )
                  if (X(I, O || l, P)) {
                    a.call(N, I);
                    break;
                  }
                U && (w = Ve);
              }
              b && ((I = !X && I) && q--, E && de.push(I));
            }
            if (q += Z, b && Z !== q) {
              for (B = 0; X = y[B++]; )
                X(de, oe, O, P);
              if (E) {
                if (q > 0)
                  for (; Z--; )
                    de[Z] || oe[Z] || (oe[Z] = Mi.call(N));
                oe = vt(oe);
              }
              a.apply(N, oe), U && !E && oe.length > 0 && q + y.length > 1 && o.uniqueSort(N);
            }
            return U && (w = Ve, n = pe), de;
          };
          return b ? ge(x) : x;
        }
        function Bt(c, y) {
          var b, T = [], x = [], E = F[c + " "];
          if (!E) {
            for (y || (y = ht(c)), b = y.length; b--; )
              E = Wt(y[b]), E[k] ? T.push(E) : x.push(E);
            E = F(
              c,
              Wn(x, T)
            ), E.selector = c;
          }
          return E;
        }
        function ji(c, y, b, T) {
          var x, E, O, P, N, U = typeof c == "function" && c, I = !T && ht(c = U.selector || c);
          if (b = b || [], I.length === 1) {
            if (E = I[0] = I[0].slice(0), E.length > 2 && (O = E[0]).type === "ID" && y.nodeType === 9 && f && t.relative[E[1].type]) {
              if (y = (t.find.ID(
                O.matches[0].replace(Ae, Ee),
                y
              ) || [])[0], y)
                U && (y = y.parentNode);
              else
                return b;
              c = c.slice(E.shift().value.length);
            }
            for (x = Te.needsContext.test(c) ? 0 : E.length; x-- && (O = E[x], !t.relative[P = O.type]); )
              if ((N = t.find[P]) && (T = N(
                O.matches[0].replace(Ae, Ee),
                It.test(E[0].type) && _t(y.parentNode) || y
              ))) {
                if (E.splice(x, 1), c = T.length && gt(E), !c)
                  return a.apply(b, T), b;
                break;
              }
          }
          return (U || Bt(c, I))(
            T,
            y,
            !f,
            b,
            !y || It.test(c) && _t(y.parentNode) || y
          ), b;
        }
        M.sortStable = k.split("").sort(ie).join("") === k, Ne(), M.sortDetached = Xe(function(c) {
          return c.compareDocumentPosition(l.createElement("fieldset")) & 1;
        }), o.find = J, o.expr[":"] = o.expr.pseudos, o.unique = o.uniqueSort, J.compile = Bt, J.select = ji, J.setDocument = Ne, J.escape = o.escapeSelector, J.getText = o.text, J.isXML = o.isXMLDoc, J.selectors = o.expr, J.support = o.support, J.uniqueSort = o.uniqueSort;
      })();
      var Ie = function(e, t, n) {
        for (var r = [], s = n !== void 0; (e = e[t]) && e.nodeType !== 9; )
          if (e.nodeType === 1) {
            if (s && o(e).is(n))
              break;
            r.push(e);
          }
        return r;
      }, Vt = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
          e.nodeType === 1 && e !== t && n.push(e);
        return n;
      }, Yt = o.expr.match.needsContext, Gt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function Tt(e, t, n) {
        return _(t) ? o.grep(e, function(r, s) {
          return !!t.call(r, s, r) !== n;
        }) : t.nodeType ? o.grep(e, function(r) {
          return r === t !== n;
        }) : typeof t != "string" ? o.grep(e, function(r) {
          return g.call(t, r) > -1 !== n;
        }) : o.filter(t, e, n);
      }
      o.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), t.length === 1 && r.nodeType === 1 ? o.find.matchesSelector(r, e) ? [r] : [] : o.find.matches(e, o.grep(t, function(s) {
          return s.nodeType === 1;
        }));
      }, o.fn.extend({
        find: function(e) {
          var t, n, r = this.length, s = this;
          if (typeof e != "string")
            return this.pushStack(o(e).filter(function() {
              for (t = 0; t < r; t++)
                if (o.contains(s[t], this))
                  return !0;
            }));
          for (n = this.pushStack([]), t = 0; t < r; t++)
            o.find(e, s[t], n);
          return r > 1 ? o.uniqueSort(n) : n;
        },
        filter: function(e) {
          return this.pushStack(Tt(this, e || [], !1));
        },
        not: function(e) {
          return this.pushStack(Tt(this, e || [], !0));
        },
        is: function(e) {
          return !!Tt(
            this,
            // If this is a positional/relative selector, check membership in the returned set
            // so $("p:first").is("p:last") won't return true for a doc with two "p".
            typeof e == "string" && Yt.test(e) ? o(e) : e || [],
            !1
          ).length;
        }
      });
      var Kt, Ri = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, Wi = o.fn.init = function(e, t, n) {
        var r, s;
        if (!e)
          return this;
        if (n = n || Kt, typeof e == "string")
          if (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3 ? r = [null, e, null] : r = Ri.exec(e), r && (r[1] || !t))
            if (r[1]) {
              if (t = t instanceof o ? t[0] : t, o.merge(this, o.parseHTML(
                r[1],
                t && t.nodeType ? t.ownerDocument || t : z,
                !0
              )), Gt.test(r[1]) && o.isPlainObject(t))
                for (r in t)
                  _(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
              return this;
            } else
              return s = z.getElementById(r[2]), s && (this[0] = s, this.length = 1), this;
          else
            return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        else {
          if (e.nodeType)
            return this[0] = e, this.length = 1, this;
          if (_(e))
            return n.ready !== void 0 ? n.ready(e) : (
              // Execute immediately if ready is not present
              e(o)
            );
        }
        return o.makeArray(e, this);
      };
      Wi.prototype = o.fn, Kt = o(z);
      var Bi = /^(?:parents|prev(?:Until|All))/, Fi = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };
      o.fn.extend({
        has: function(e) {
          var t = o(e, this), n = t.length;
          return this.filter(function() {
            for (var r = 0; r < n; r++)
              if (o.contains(this, t[r]))
                return !0;
          });
        },
        closest: function(e, t) {
          var n, r = 0, s = this.length, a = [], l = typeof e != "string" && o(e);
          if (!Yt.test(e)) {
            for (; r < s; r++)
              for (n = this[r]; n && n !== t; n = n.parentNode)
                if (n.nodeType < 11 && (l ? l.index(n) > -1 : (
                  // Don't pass non-elements to jQuery#find
                  n.nodeType === 1 && o.find.matchesSelector(n, e)
                ))) {
                  a.push(n);
                  break;
                }
          }
          return this.pushStack(a.length > 1 ? o.uniqueSort(a) : a);
        },
        // Determine the position of an element within the set
        index: function(e) {
          return e ? typeof e == "string" ? g.call(o(e), this[0]) : g.call(
            this,
            // If it receives a jQuery object, the first element is used
            e.jquery ? e[0] : e
          ) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
          return this.pushStack(
            o.uniqueSort(
              o.merge(this.get(), o(e, t))
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
      o.each({
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
          return Vt((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
          return Vt(e.firstChild);
        },
        contents: function(e) {
          return e.contentDocument != null && // Support: IE 11+
          // <object> elements with no `data` attribute has an object
          // `contentDocument` with a `null` prototype.
          i(e.contentDocument) ? e.contentDocument : (ee(e, "template") && (e = e.content || e), o.merge([], e.childNodes));
        }
      }, function(e, t) {
        o.fn[e] = function(n, r) {
          var s = o.map(this, t, n);
          return e.slice(-5) !== "Until" && (r = n), r && typeof r == "string" && (s = o.filter(r, s)), this.length > 1 && (Fi[e] || o.uniqueSort(s), Bi.test(e) && s.reverse()), this.pushStack(s);
        };
      });
      var ye = /[^\x20\t\r\n\f]+/g;
      function Ui(e) {
        var t = {};
        return o.each(e.match(ye) || [], function(n, r) {
          t[r] = !0;
        }), t;
      }
      o.Callbacks = function(e) {
        e = typeof e == "string" ? Ui(e) : o.extend({}, e);
        var t, n, r, s, a = [], l = [], h = -1, f = function() {
          for (s = s || e.once, r = t = !0; l.length; h = -1)
            for (n = l.shift(); ++h < a.length; )
              a[h].apply(n[0], n[1]) === !1 && e.stopOnFalse && (h = a.length, n = !1);
          e.memory || (n = !1), t = !1, s && (n ? a = [] : a = "");
        }, m = {
          // Add a callback or a collection of callbacks to the list
          add: function() {
            return a && (n && !t && (h = a.length - 1, l.push(n)), function S(k) {
              o.each(k, function(w, A) {
                _(A) ? (!e.unique || !m.has(A)) && a.push(A) : A && A.length && qe(A) !== "string" && S(A);
              });
            }(arguments), n && !t && f()), this;
          },
          // Remove a callback from the list
          remove: function() {
            return o.each(arguments, function(S, k) {
              for (var w; (w = o.inArray(k, a, w)) > -1; )
                a.splice(w, 1), w <= h && h--;
            }), this;
          },
          // Check if a given callback is in the list.
          // If no argument is given, return whether or not list has callbacks attached.
          has: function(S) {
            return S ? o.inArray(S, a) > -1 : a.length > 0;
          },
          // Remove all callbacks from the list
          empty: function() {
            return a && (a = []), this;
          },
          // Disable .fire and .add
          // Abort any current/pending executions
          // Clear all callbacks and values
          disable: function() {
            return s = l = [], a = n = "", this;
          },
          disabled: function() {
            return !a;
          },
          // Disable .fire
          // Also disable .add unless we have memory (since it would have no effect)
          // Abort any pending executions
          lock: function() {
            return s = l = [], !n && !t && (a = n = ""), this;
          },
          locked: function() {
            return !!s;
          },
          // Call all callbacks with the given context and arguments
          fireWith: function(S, k) {
            return s || (k = k || [], k = [S, k.slice ? k.slice() : k], l.push(k), t || f()), this;
          },
          // Call all the callbacks with the given arguments
          fire: function() {
            return m.fireWith(this, arguments), this;
          },
          // To know if the callbacks have already been called at least once
          fired: function() {
            return !!r;
          }
        };
        return m;
      };
      function _e(e) {
        return e;
      }
      function st(e) {
        throw e;
      }
      function Jt(e, t, n, r) {
        var s;
        try {
          e && _(s = e.promise) ? s.call(e).done(t).fail(n) : e && _(s = e.then) ? s.call(e, t, n) : t.apply(void 0, [e].slice(r));
        } catch (a) {
          n.apply(void 0, [a]);
        }
      }
      o.extend({
        Deferred: function(e) {
          var t = [
            // action, add listener, callbacks,
            // ... .then handlers, argument index, [final state]
            [
              "notify",
              "progress",
              o.Callbacks("memory"),
              o.Callbacks("memory"),
              2
            ],
            [
              "resolve",
              "done",
              o.Callbacks("once memory"),
              o.Callbacks("once memory"),
              0,
              "resolved"
            ],
            [
              "reject",
              "fail",
              o.Callbacks("once memory"),
              o.Callbacks("once memory"),
              1,
              "rejected"
            ]
          ], n = "pending", r = {
            state: function() {
              return n;
            },
            always: function() {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function(a) {
              return r.then(null, a);
            },
            // Keep pipe for back-compat
            pipe: function() {
              var a = arguments;
              return o.Deferred(function(l) {
                o.each(t, function(h, f) {
                  var m = _(a[f[4]]) && a[f[4]];
                  s[f[1]](function() {
                    var S = m && m.apply(this, arguments);
                    S && _(S.promise) ? S.promise().progress(l.notify).done(l.resolve).fail(l.reject) : l[f[0] + "With"](
                      this,
                      m ? [S] : arguments
                    );
                  });
                }), a = null;
              }).promise();
            },
            then: function(a, l, h) {
              var f = 0;
              function m(S, k, w, A) {
                return function() {
                  var R = this, Y = arguments, F = function() {
                    var ie, me;
                    if (!(S < f)) {
                      if (ie = w.apply(R, Y), ie === k.promise())
                        throw new TypeError("Thenable self-resolution");
                      me = ie && // Support: Promises/A+ section 2.3.4
                      // https://promisesaplus.com/#point-64
                      // Only check objects and functions for thenability
                      (typeof ie == "object" || typeof ie == "function") && ie.then, _(me) ? A ? me.call(
                        ie,
                        m(f, k, _e, A),
                        m(f, k, st, A)
                      ) : (f++, me.call(
                        ie,
                        m(f, k, _e, A),
                        m(f, k, st, A),
                        m(
                          f,
                          k,
                          _e,
                          k.notifyWith
                        )
                      )) : (w !== _e && (R = void 0, Y = [ie]), (A || k.resolveWith)(R, Y));
                    }
                  }, ne = A ? F : function() {
                    try {
                      F();
                    } catch (ie) {
                      o.Deferred.exceptionHook && o.Deferred.exceptionHook(
                        ie,
                        ne.error
                      ), S + 1 >= f && (w !== st && (R = void 0, Y = [ie]), k.rejectWith(R, Y));
                    }
                  };
                  S ? ne() : (o.Deferred.getErrorHook ? ne.error = o.Deferred.getErrorHook() : o.Deferred.getStackHook && (ne.error = o.Deferred.getStackHook()), W.setTimeout(ne));
                };
              }
              return o.Deferred(function(S) {
                t[0][3].add(
                  m(
                    0,
                    S,
                    _(h) ? h : _e,
                    S.notifyWith
                  )
                ), t[1][3].add(
                  m(
                    0,
                    S,
                    _(a) ? a : _e
                  )
                ), t[2][3].add(
                  m(
                    0,
                    S,
                    _(l) ? l : st
                  )
                );
              }).promise();
            },
            // Get a promise for this deferred
            // If obj is provided, the promise aspect is added to the object
            promise: function(a) {
              return a != null ? o.extend(a, r) : r;
            }
          }, s = {};
          return o.each(t, function(a, l) {
            var h = l[2], f = l[5];
            r[l[1]] = h.add, f && h.add(
              function() {
                n = f;
              },
              // rejected_callbacks.disable
              // fulfilled_callbacks.disable
              t[3 - a][2].disable,
              // rejected_handlers.disable
              // fulfilled_handlers.disable
              t[3 - a][3].disable,
              // progress_callbacks.lock
              t[0][2].lock,
              // progress_handlers.lock
              t[0][3].lock
            ), h.add(l[3].fire), s[l[0]] = function() {
              return s[l[0] + "With"](this === s ? void 0 : this, arguments), this;
            }, s[l[0] + "With"] = h.fireWith;
          }), r.promise(s), e && e.call(s, s), s;
        },
        // Deferred helper
        when: function(e) {
          var t = arguments.length, n = t, r = Array(n), s = u.call(arguments), a = o.Deferred(), l = function(h) {
            return function(f) {
              r[h] = this, s[h] = arguments.length > 1 ? u.call(arguments) : f, --t || a.resolveWith(r, s);
            };
          };
          if (t <= 1 && (Jt(
            e,
            a.done(l(n)).resolve,
            a.reject,
            !t
          ), a.state() === "pending" || _(s[n] && s[n].then)))
            return a.then();
          for (; n--; )
            Jt(s[n], l(n), a.reject);
          return a.promise();
        }
      });
      var Xi = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      o.Deferred.exceptionHook = function(e, t) {
        W.console && W.console.warn && e && Xi.test(e.name) && W.console.warn(
          "jQuery.Deferred exception: " + e.message,
          e.stack,
          t
        );
      }, o.readyException = function(e) {
        W.setTimeout(function() {
          throw e;
        });
      };
      var St = o.Deferred();
      o.fn.ready = function(e) {
        return St.then(e).catch(function(t) {
          o.readyException(t);
        }), this;
      }, o.extend({
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: !1,
        // A counter to track how many items to wait for before
        // the ready event fires. See trac-6781
        readyWait: 1,
        // Handle when the DOM is ready
        ready: function(e) {
          (e === !0 ? --o.readyWait : o.isReady) || (o.isReady = !0, !(e !== !0 && --o.readyWait > 0) && St.resolveWith(z, [o]));
        }
      }), o.ready.then = St.then;
      function at() {
        z.removeEventListener("DOMContentLoaded", at), W.removeEventListener("load", at), o.ready();
      }
      z.readyState === "complete" || z.readyState !== "loading" && !z.documentElement.doScroll ? W.setTimeout(o.ready) : (z.addEventListener("DOMContentLoaded", at), W.addEventListener("load", at));
      var Ce = function(e, t, n, r, s, a, l) {
        var h = 0, f = e.length, m = n == null;
        if (qe(n) === "object") {
          s = !0;
          for (h in n)
            Ce(e, t, h, n[h], !0, a, l);
        } else if (r !== void 0 && (s = !0, _(r) || (l = !0), m && (l ? (t.call(e, r), t = null) : (m = t, t = function(S, k, w) {
          return m.call(o(S), w);
        })), t))
          for (; h < f; h++)
            t(
              e[h],
              n,
              l ? r : r.call(e[h], h, t(e[h], n))
            );
        return s ? e : m ? t.call(e) : f ? t(e[0], n) : a;
      }, Vi = /^-ms-/, Yi = /-([a-z])/g;
      function Gi(e, t) {
        return t.toUpperCase();
      }
      function ve(e) {
        return e.replace(Vi, "ms-").replace(Yi, Gi);
      }
      var Ke = function(e) {
        return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType;
      };
      function Qe() {
        this.expando = o.expando + Qe.uid++;
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
          var r, s = this.cache(e);
          if (typeof t == "string")
            s[ve(t)] = n;
          else
            for (r in t)
              s[ve(r)] = t[r];
          return s;
        },
        get: function(e, t) {
          return t === void 0 ? this.cache(e) : (
            // Always use camelCase key (gh-2257)
            e[this.expando] && e[this.expando][ve(t)]
          );
        },
        access: function(e, t, n) {
          return t === void 0 || t && typeof t == "string" && n === void 0 ? this.get(e, t) : (this.set(e, t, n), n !== void 0 ? n : t);
        },
        remove: function(e, t) {
          var n, r = e[this.expando];
          if (r !== void 0) {
            if (t !== void 0)
              for (Array.isArray(t) ? t = t.map(ve) : (t = ve(t), t = t in r ? [t] : t.match(ye) || []), n = t.length; n--; )
                delete r[t[n]];
            (t === void 0 || o.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
          }
        },
        hasData: function(e) {
          var t = e[this.expando];
          return t !== void 0 && !o.isEmptyObject(t);
        }
      };
      var L = new Qe(), ae = new Qe(), Ki = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Qi = /[A-Z]/g;
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
      o.extend({
        hasData: function(e) {
          return ae.hasData(e) || L.hasData(e);
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
          return L.access(e, t, n);
        },
        _removeData: function(e, t) {
          L.remove(e, t);
        }
      }), o.fn.extend({
        data: function(e, t) {
          var n, r, s, a = this[0], l = a && a.attributes;
          if (e === void 0) {
            if (this.length && (s = ae.get(a), a.nodeType === 1 && !L.get(a, "hasDataAttrs"))) {
              for (n = l.length; n--; )
                l[n] && (r = l[n].name, r.indexOf("data-") === 0 && (r = ve(r.slice(5)), Zt(a, r, s[r])));
              L.set(a, "hasDataAttrs", !0);
            }
            return s;
          }
          return typeof e == "object" ? this.each(function() {
            ae.set(this, e);
          }) : Ce(this, function(h) {
            var f;
            if (a && h === void 0)
              return f = ae.get(a, e), f !== void 0 || (f = Zt(a, e), f !== void 0) ? f : void 0;
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
      }), o.extend({
        queue: function(e, t, n) {
          var r;
          if (e)
            return t = (t || "fx") + "queue", r = L.get(e, t), n && (!r || Array.isArray(n) ? r = L.access(e, t, o.makeArray(n)) : r.push(n)), r || [];
        },
        dequeue: function(e, t) {
          t = t || "fx";
          var n = o.queue(e, t), r = n.length, s = n.shift(), a = o._queueHooks(e, t), l = function() {
            o.dequeue(e, t);
          };
          s === "inprogress" && (s = n.shift(), r--), s && (t === "fx" && n.unshift("inprogress"), delete a.stop, s.call(e, l, a)), !r && a && a.empty.fire();
        },
        // Not public - generate a queueHooks object, or return the current one
        _queueHooks: function(e, t) {
          var n = t + "queueHooks";
          return L.get(e, n) || L.access(e, n, {
            empty: o.Callbacks("once memory").add(function() {
              L.remove(e, [t + "queue", n]);
            })
          });
        }
      }), o.fn.extend({
        queue: function(e, t) {
          var n = 2;
          return typeof e != "string" && (t = e, e = "fx", n--), arguments.length < n ? o.queue(this[0], e) : t === void 0 ? this : this.each(function() {
            var r = o.queue(this, e, t);
            o._queueHooks(this, e), e === "fx" && r[0] !== "inprogress" && o.dequeue(this, e);
          });
        },
        dequeue: function(e) {
          return this.each(function() {
            o.dequeue(this, e);
          });
        },
        clearQueue: function(e) {
          return this.queue(e || "fx", []);
        },
        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function(e, t) {
          var n, r = 1, s = o.Deferred(), a = this, l = this.length, h = function() {
            --r || s.resolveWith(a, [a]);
          };
          for (typeof e != "string" && (t = e, e = void 0), e = e || "fx"; l--; )
            n = L.get(a[l], e + "queueHooks"), n && n.empty && (r++, n.empty.add(h));
          return h(), s.promise(t);
        }
      });
      var ei = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Je = new RegExp("^(?:([+-])=|)(" + ei + ")([a-z%]*)$", "i"), $e = ["Top", "Right", "Bottom", "Left"], je = z.documentElement, ze = function(e) {
        return o.contains(e.ownerDocument, e);
      }, Zi = { composed: !0 };
      je.getRootNode && (ze = function(e) {
        return o.contains(e.ownerDocument, e) || e.getRootNode(Zi) === e.ownerDocument;
      });
      var lt = function(e, t) {
        return e = t || e, e.style.display === "none" || e.style.display === "" && // Otherwise, check computed style
        // Support: Firefox <=43 - 45
        // Disconnected elements can have computed display: none, so first confirm that elem is
        // in the document.
        ze(e) && o.css(e, "display") === "none";
      };
      function ti(e, t, n, r) {
        var s, a, l = 20, h = r ? function() {
          return r.cur();
        } : function() {
          return o.css(e, t, "");
        }, f = h(), m = n && n[3] || (o.cssNumber[t] ? "" : "px"), S = e.nodeType && (o.cssNumber[t] || m !== "px" && +f) && Je.exec(o.css(e, t));
        if (S && S[3] !== m) {
          for (f = f / 2, m = m || S[3], S = +f || 1; l--; )
            o.style(e, t, S + m), (1 - a) * (1 - (a = h() / f || 0.5)) <= 0 && (l = 0), S = S / a;
          S = S * 2, o.style(e, t, S + m), n = n || [];
        }
        return n && (S = +S || +f || 0, s = n[1] ? S + (n[1] + 1) * n[2] : +n[2], r && (r.unit = m, r.start = S, r.end = s)), s;
      }
      var ii = {};
      function en(e) {
        var t, n = e.ownerDocument, r = e.nodeName, s = ii[r];
        return s || (t = n.body.appendChild(n.createElement(r)), s = o.css(t, "display"), t.parentNode.removeChild(t), s === "none" && (s = "block"), ii[r] = s, s);
      }
      function Re(e, t) {
        for (var n, r, s = [], a = 0, l = e.length; a < l; a++)
          r = e[a], r.style && (n = r.style.display, t ? (n === "none" && (s[a] = L.get(r, "display") || null, s[a] || (r.style.display = "")), r.style.display === "" && lt(r) && (s[a] = en(r))) : n !== "none" && (s[a] = "none", L.set(r, "display", n)));
        for (a = 0; a < l; a++)
          s[a] != null && (e[a].style.display = s[a]);
        return e;
      }
      o.fn.extend({
        show: function() {
          return Re(this, !0);
        },
        hide: function() {
          return Re(this);
        },
        toggle: function(e) {
          return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function() {
            lt(this) ? o(this).show() : o(this).hide();
          });
        }
      });
      var Ze = /^(?:checkbox|radio)$/i, ni = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, ri = /^$|^module$|\/(?:java|ecma)script/i;
      (function() {
        var e = z.createDocumentFragment(), t = e.appendChild(z.createElement("div")), n = z.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), M.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", M.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, t.innerHTML = "<option></option>", M.option = !!t.lastChild;
      })();
      var ce = {
        // XHTML parsers do not magically insert elements in the
        // same way that tag soup parsers do. So we cannot shorten
        // this by omitting <tbody> or other required elements.
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
      ce.tbody = ce.tfoot = ce.colgroup = ce.caption = ce.thead, ce.th = ce.td, M.option || (ce.optgroup = ce.option = [1, "<select multiple='multiple'>", "</select>"]);
      function le(e, t) {
        var n;
        return typeof e.getElementsByTagName < "u" ? n = e.getElementsByTagName(t || "*") : typeof e.querySelectorAll < "u" ? n = e.querySelectorAll(t || "*") : n = [], t === void 0 || t && ee(e, t) ? o.merge([e], n) : n;
      }
      function xt(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          L.set(
            e[n],
            "globalEval",
            !t || L.get(t[n], "globalEval")
          );
      }
      var tn = /<|&#?\w+;/;
      function oi(e, t, n, r, s) {
        for (var a, l, h, f, m, S, k = t.createDocumentFragment(), w = [], A = 0, R = e.length; A < R; A++)
          if (a = e[A], a || a === 0)
            if (qe(a) === "object")
              o.merge(w, a.nodeType ? [a] : a);
            else if (!tn.test(a))
              w.push(t.createTextNode(a));
            else {
              for (l = l || k.appendChild(t.createElement("div")), h = (ni.exec(a) || ["", ""])[1].toLowerCase(), f = ce[h] || ce._default, l.innerHTML = f[1] + o.htmlPrefilter(a) + f[2], S = f[0]; S--; )
                l = l.lastChild;
              o.merge(w, l.childNodes), l = k.firstChild, l.textContent = "";
            }
        for (k.textContent = "", A = 0; a = w[A++]; ) {
          if (r && o.inArray(a, r) > -1) {
            s && s.push(a);
            continue;
          }
          if (m = ze(a), l = le(k.appendChild(a), "script"), m && xt(l), n)
            for (S = 0; a = l[S++]; )
              ri.test(a.type || "") && n.push(a);
        }
        return k;
      }
      var si = /^([^.]*)(?:\.(.+)|)/;
      function We() {
        return !0;
      }
      function Be() {
        return !1;
      }
      function kt(e, t, n, r, s, a) {
        var l, h;
        if (typeof t == "object") {
          typeof n != "string" && (r = r || n, n = void 0);
          for (h in t)
            kt(e, h, n, r, t[h], a);
          return e;
        }
        if (r == null && s == null ? (s = n, r = n = void 0) : s == null && (typeof n == "string" ? (s = r, r = void 0) : (s = r, r = n, n = void 0)), s === !1)
          s = Be;
        else if (!s)
          return e;
        return a === 1 && (l = s, s = function(f) {
          return o().off(f), l.apply(this, arguments);
        }, s.guid = l.guid || (l.guid = o.guid++)), e.each(function() {
          o.event.add(this, t, s, r, n);
        });
      }
      o.event = {
        global: {},
        add: function(e, t, n, r, s) {
          var a, l, h, f, m, S, k, w, A, R, Y, F = L.get(e);
          if (Ke(e))
            for (n.handler && (a = n, n = a.handler, s = a.selector), s && o.find.matchesSelector(je, s), n.guid || (n.guid = o.guid++), (f = F.events) || (f = F.events = /* @__PURE__ */ Object.create(null)), (l = F.handle) || (l = F.handle = function(ne) {
              return typeof o < "u" && o.event.triggered !== ne.type ? o.event.dispatch.apply(e, arguments) : void 0;
            }), t = (t || "").match(ye) || [""], m = t.length; m--; )
              h = si.exec(t[m]) || [], A = Y = h[1], R = (h[2] || "").split(".").sort(), A && (k = o.event.special[A] || {}, A = (s ? k.delegateType : k.bindType) || A, k = o.event.special[A] || {}, S = o.extend({
                type: A,
                origType: Y,
                data: r,
                handler: n,
                guid: n.guid,
                selector: s,
                needsContext: s && o.expr.match.needsContext.test(s),
                namespace: R.join(".")
              }, a), (w = f[A]) || (w = f[A] = [], w.delegateCount = 0, (!k.setup || k.setup.call(e, r, R, l) === !1) && e.addEventListener && e.addEventListener(A, l)), k.add && (k.add.call(e, S), S.handler.guid || (S.handler.guid = n.guid)), s ? w.splice(w.delegateCount++, 0, S) : w.push(S), o.event.global[A] = !0);
        },
        // Detach an event or set of events from an element
        remove: function(e, t, n, r, s) {
          var a, l, h, f, m, S, k, w, A, R, Y, F = L.hasData(e) && L.get(e);
          if (!(!F || !(f = F.events))) {
            for (t = (t || "").match(ye) || [""], m = t.length; m--; ) {
              if (h = si.exec(t[m]) || [], A = Y = h[1], R = (h[2] || "").split(".").sort(), !A) {
                for (A in f)
                  o.event.remove(e, A + t[m], n, r, !0);
                continue;
              }
              for (k = o.event.special[A] || {}, A = (r ? k.delegateType : k.bindType) || A, w = f[A] || [], h = h[2] && new RegExp("(^|\\.)" + R.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = a = w.length; a--; )
                S = w[a], (s || Y === S.origType) && (!n || n.guid === S.guid) && (!h || h.test(S.namespace)) && (!r || r === S.selector || r === "**" && S.selector) && (w.splice(a, 1), S.selector && w.delegateCount--, k.remove && k.remove.call(e, S));
              l && !w.length && ((!k.teardown || k.teardown.call(e, R, F.handle) === !1) && o.removeEvent(e, A, F.handle), delete f[A]);
            }
            o.isEmptyObject(f) && L.remove(e, "handle events");
          }
        },
        dispatch: function(e) {
          var t, n, r, s, a, l, h = new Array(arguments.length), f = o.event.fix(e), m = (L.get(this, "events") || /* @__PURE__ */ Object.create(null))[f.type] || [], S = o.event.special[f.type] || {};
          for (h[0] = f, t = 1; t < arguments.length; t++)
            h[t] = arguments[t];
          if (f.delegateTarget = this, !(S.preDispatch && S.preDispatch.call(this, f) === !1)) {
            for (l = o.event.handlers.call(this, f, m), t = 0; (s = l[t++]) && !f.isPropagationStopped(); )
              for (f.currentTarget = s.elem, n = 0; (a = s.handlers[n++]) && !f.isImmediatePropagationStopped(); )
                (!f.rnamespace || a.namespace === !1 || f.rnamespace.test(a.namespace)) && (f.handleObj = a, f.data = a.data, r = ((o.event.special[a.origType] || {}).handle || a.handler).apply(s.elem, h), r !== void 0 && (f.result = r) === !1 && (f.preventDefault(), f.stopPropagation()));
            return S.postDispatch && S.postDispatch.call(this, f), f.result;
          }
        },
        handlers: function(e, t) {
          var n, r, s, a, l, h = [], f = t.delegateCount, m = e.target;
          if (f && // Support: IE <=9
          // Black-hole SVG <use> instance trees (trac-13180)
          m.nodeType && // Support: Firefox <=42
          // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
          // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
          // Support: IE 11 only
          // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
          !(e.type === "click" && e.button >= 1)) {
            for (; m !== this; m = m.parentNode || this)
              if (m.nodeType === 1 && !(e.type === "click" && m.disabled === !0)) {
                for (a = [], l = {}, n = 0; n < f; n++)
                  r = t[n], s = r.selector + " ", l[s] === void 0 && (l[s] = r.needsContext ? o(s, this).index(m) > -1 : o.find(s, this, null, [m]).length), l[s] && a.push(r);
                a.length && h.push({ elem: m, handlers: a });
              }
          }
          return m = this, f < t.length && h.push({ elem: m, handlers: t.slice(f) }), h;
        },
        addProp: function(e, t) {
          Object.defineProperty(o.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: _(t) ? function() {
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
          return e[o.expando] ? e : new o.Event(e);
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
              return Ze.test(t.type) && t.click && ee(t, "input") && ut(t, "click", !0), !1;
            },
            trigger: function(e) {
              var t = this || e;
              return Ze.test(t.type) && t.click && ee(t, "input") && ut(t, "click"), !0;
            },
            // For cross-browser consistency, suppress native .click() on links
            // Also prevent it if we're currently inside a leveraged native-event stack
            _default: function(e) {
              var t = e.target;
              return Ze.test(t.type) && t.click && ee(t, "input") && L.get(t, "click") || ee(t, "a");
            }
          },
          beforeunload: {
            postDispatch: function(e) {
              e.result !== void 0 && e.originalEvent && (e.originalEvent.returnValue = e.result);
            }
          }
        }
      };
      function ut(e, t, n) {
        if (!n) {
          L.get(e, t) === void 0 && o.event.add(e, t, We);
          return;
        }
        L.set(e, t, !1), o.event.add(e, t, {
          namespace: !1,
          handler: function(r) {
            var s, a = L.get(this, t);
            if (r.isTrigger & 1 && this[t]) {
              if (a)
                (o.event.special[t] || {}).delegateType && r.stopPropagation();
              else if (a = u.call(arguments), L.set(this, t, a), this[t](), s = L.get(this, t), L.set(this, t, !1), a !== s)
                return r.stopImmediatePropagation(), r.preventDefault(), s;
            } else
              a && (L.set(this, t, o.event.trigger(
                a[0],
                a.slice(1),
                this
              )), r.stopPropagation(), r.isImmediatePropagationStopped = We);
          }
        });
      }
      o.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
      }, o.Event = function(e, t) {
        if (!(this instanceof o.Event))
          return new o.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === void 0 && // Support: Android <=2.3 only
        e.returnValue === !1 ? We : Be, this.target = e.target && e.target.nodeType === 3 ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && o.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[o.expando] = !0;
      }, o.Event.prototype = {
        constructor: o.Event,
        isDefaultPrevented: Be,
        isPropagationStopped: Be,
        isImmediatePropagationStopped: Be,
        isSimulated: !1,
        preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = We, e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = We, e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = We, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
        }
      }, o.each({
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
      }, o.event.addProp), o.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
        function n(r) {
          if (z.documentMode) {
            var s = L.get(this, "handle"), a = o.event.fix(r);
            a.type = r.type === "focusin" ? "focus" : "blur", a.isSimulated = !0, s(r), a.target === a.currentTarget && s(a);
          } else
            o.event.simulate(
              t,
              r.target,
              o.event.fix(r)
            );
        }
        o.event.special[e] = {
          // Utilize native event if possible so blur/focus sequence is correct
          setup: function() {
            var r;
            if (ut(this, e, !0), z.documentMode)
              r = L.get(this, t), r || this.addEventListener(t, n), L.set(this, t, (r || 0) + 1);
            else
              return !1;
          },
          trigger: function() {
            return ut(this, e), !0;
          },
          teardown: function() {
            var r;
            if (z.documentMode)
              r = L.get(this, t) - 1, r ? L.set(this, t, r) : (this.removeEventListener(t, n), L.remove(this, t));
            else
              return !1;
          },
          // Suppress native focus or blur if we're currently inside
          // a leveraged native-event stack
          _default: function(r) {
            return L.get(r.target, e);
          },
          delegateType: t
        }, o.event.special[t] = {
          setup: function() {
            var r = this.ownerDocument || this.document || this, s = z.documentMode ? this : r, a = L.get(s, t);
            a || (z.documentMode ? this.addEventListener(t, n) : r.addEventListener(e, n, !0)), L.set(s, t, (a || 0) + 1);
          },
          teardown: function() {
            var r = this.ownerDocument || this.document || this, s = z.documentMode ? this : r, a = L.get(s, t) - 1;
            a ? L.set(s, t, a) : (z.documentMode ? this.removeEventListener(t, n) : r.removeEventListener(e, n, !0), L.remove(s, t));
          }
        };
      }), o.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function(e, t) {
        o.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function(n) {
            var r, s = this, a = n.relatedTarget, l = n.handleObj;
            return (!a || a !== s && !o.contains(s, a)) && (n.type = l.origType, r = l.handler.apply(this, arguments), n.type = t), r;
          }
        };
      }), o.fn.extend({
        on: function(e, t, n, r) {
          return kt(this, e, t, n, r);
        },
        one: function(e, t, n, r) {
          return kt(this, e, t, n, r, 1);
        },
        off: function(e, t, n) {
          var r, s;
          if (e && e.preventDefault && e.handleObj)
            return r = e.handleObj, o(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ), this;
          if (typeof e == "object") {
            for (s in e)
              this.off(s, t, e[s]);
            return this;
          }
          return (t === !1 || typeof t == "function") && (n = t, t = void 0), n === !1 && (n = Be), this.each(function() {
            o.event.remove(this, e, n, t);
          });
        }
      });
      var nn = /<script|<style|<link/i, rn = /checked\s*(?:[^=]|=\s*.checked.)/i, on = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
      function ai(e, t) {
        return ee(e, "table") && ee(t.nodeType !== 11 ? t : t.firstChild, "tr") && o(e).children("tbody")[0] || e;
      }
      function sn(e) {
        return e.type = (e.getAttribute("type") !== null) + "/" + e.type, e;
      }
      function an(e) {
        return (e.type || "").slice(0, 5) === "true/" ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
      }
      function li(e, t) {
        var n, r, s, a, l, h, f;
        if (t.nodeType === 1) {
          if (L.hasData(e) && (a = L.get(e), f = a.events, f)) {
            L.remove(t, "handle events");
            for (s in f)
              for (n = 0, r = f[s].length; n < r; n++)
                o.event.add(t, s, f[s][n]);
          }
          ae.hasData(e) && (l = ae.access(e), h = o.extend({}, l), ae.set(t, h));
        }
      }
      function ln(e, t) {
        var n = t.nodeName.toLowerCase();
        n === "input" && Ze.test(e.type) ? t.checked = e.checked : (n === "input" || n === "textarea") && (t.defaultValue = e.defaultValue);
      }
      function Fe(e, t, n, r) {
        t = v(t);
        var s, a, l, h, f, m, S = 0, k = e.length, w = k - 1, A = t[0], R = _(A);
        if (R || k > 1 && typeof A == "string" && !M.checkClone && rn.test(A))
          return e.each(function(Y) {
            var F = e.eq(Y);
            R && (t[0] = A.call(this, Y, F.html())), Fe(F, t, n, r);
          });
        if (k && (s = oi(t, e[0].ownerDocument, !1, e, r), a = s.firstChild, s.childNodes.length === 1 && (s = a), a || r)) {
          for (l = o.map(le(s, "script"), sn), h = l.length; S < k; S++)
            f = s, S !== w && (f = o.clone(f, !0, !0), h && o.merge(l, le(f, "script"))), n.call(e[S], f, S);
          if (h)
            for (m = l[l.length - 1].ownerDocument, o.map(l, an), S = 0; S < h; S++)
              f = l[S], ri.test(f.type || "") && !L.access(f, "globalEval") && o.contains(m, f) && (f.src && (f.type || "").toLowerCase() !== "module" ? o._evalUrl && !f.noModule && o._evalUrl(f.src, {
                nonce: f.nonce || f.getAttribute("nonce")
              }, m) : Ut(f.textContent.replace(on, ""), f, m));
        }
        return e;
      }
      function ui(e, t, n) {
        for (var r, s = t ? o.filter(t, e) : e, a = 0; (r = s[a]) != null; a++)
          !n && r.nodeType === 1 && o.cleanData(le(r)), r.parentNode && (n && ze(r) && xt(le(r, "script")), r.parentNode.removeChild(r));
        return e;
      }
      o.extend({
        htmlPrefilter: function(e) {
          return e;
        },
        clone: function(e, t, n) {
          var r, s, a, l, h = e.cloneNode(!0), f = ze(e);
          if (!M.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !o.isXMLDoc(e))
            for (l = le(h), a = le(e), r = 0, s = a.length; r < s; r++)
              ln(a[r], l[r]);
          if (t)
            if (n)
              for (a = a || le(e), l = l || le(h), r = 0, s = a.length; r < s; r++)
                li(a[r], l[r]);
            else
              li(e, h);
          return l = le(h, "script"), l.length > 0 && xt(l, !f && le(e, "script")), h;
        },
        cleanData: function(e) {
          for (var t, n, r, s = o.event.special, a = 0; (n = e[a]) !== void 0; a++)
            if (Ke(n)) {
              if (t = n[L.expando]) {
                if (t.events)
                  for (r in t.events)
                    s[r] ? o.event.remove(n, r) : o.removeEvent(n, r, t.handle);
                n[L.expando] = void 0;
              }
              n[ae.expando] && (n[ae.expando] = void 0);
            }
        }
      }), o.fn.extend({
        detach: function(e) {
          return ui(this, e, !0);
        },
        remove: function(e) {
          return ui(this, e);
        },
        text: function(e) {
          return Ce(this, function(t) {
            return t === void 0 ? o.text(this) : this.empty().each(function() {
              (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = t);
            });
          }, null, e, arguments.length);
        },
        append: function() {
          return Fe(this, arguments, function(e) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var t = ai(this, e);
              t.appendChild(e);
            }
          });
        },
        prepend: function() {
          return Fe(this, arguments, function(e) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var t = ai(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function() {
          return Fe(this, arguments, function(e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function() {
          return Fe(this, arguments, function(e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function() {
          for (var e, t = 0; (e = this[t]) != null; t++)
            e.nodeType === 1 && (o.cleanData(le(e, !1)), e.textContent = "");
          return this;
        },
        clone: function(e, t) {
          return e = e ?? !1, t = t ?? e, this.map(function() {
            return o.clone(this, e, t);
          });
        },
        html: function(e) {
          return Ce(this, function(t) {
            var n = this[0] || {}, r = 0, s = this.length;
            if (t === void 0 && n.nodeType === 1)
              return n.innerHTML;
            if (typeof t == "string" && !nn.test(t) && !ce[(ni.exec(t) || ["", ""])[1].toLowerCase()]) {
              t = o.htmlPrefilter(t);
              try {
                for (; r < s; r++)
                  n = this[r] || {}, n.nodeType === 1 && (o.cleanData(le(n, !1)), n.innerHTML = t);
                n = 0;
              } catch {
              }
            }
            n && this.empty().append(t);
          }, null, e, arguments.length);
        },
        replaceWith: function() {
          var e = [];
          return Fe(this, arguments, function(t) {
            var n = this.parentNode;
            o.inArray(this, e) < 0 && (o.cleanData(le(this)), n && n.replaceChild(t, this));
          }, e);
        }
      }), o.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function(e, t) {
        o.fn[e] = function(n) {
          for (var r, s = [], a = o(n), l = a.length - 1, h = 0; h <= l; h++)
            r = h === l ? this : this.clone(!0), o(a[h])[t](r), d.apply(s, r.get());
          return this.pushStack(s);
        };
      });
      var Ct = new RegExp("^(" + ei + ")(?!px)[a-z%]+$", "i"), $t = /^--/, dt = function(e) {
        var t = e.ownerDocument.defaultView;
        return (!t || !t.opener) && (t = W), t.getComputedStyle(e);
      }, di = function(e, t, n) {
        var r, s, a = {};
        for (s in t)
          a[s] = e.style[s], e.style[s] = t[s];
        r = n.call(e);
        for (s in t)
          e.style[s] = a[s];
        return r;
      }, un = new RegExp($e.join("|"), "i");
      (function() {
        function e() {
          if (m) {
            f.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", m.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", je.appendChild(f).appendChild(m);
            var S = W.getComputedStyle(m);
            n = S.top !== "1%", h = t(S.marginLeft) === 12, m.style.right = "60%", a = t(S.right) === 36, r = t(S.width) === 36, m.style.position = "absolute", s = t(m.offsetWidth / 3) === 12, je.removeChild(f), m = null;
          }
        }
        function t(S) {
          return Math.round(parseFloat(S));
        }
        var n, r, s, a, l, h, f = z.createElement("div"), m = z.createElement("div");
        m.style && (m.style.backgroundClip = "content-box", m.cloneNode(!0).style.backgroundClip = "", M.clearCloneStyle = m.style.backgroundClip === "content-box", o.extend(M, {
          boxSizingReliable: function() {
            return e(), r;
          },
          pixelBoxStyles: function() {
            return e(), a;
          },
          pixelPosition: function() {
            return e(), n;
          },
          reliableMarginLeft: function() {
            return e(), h;
          },
          scrollboxSize: function() {
            return e(), s;
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
            var S, k, w, A;
            return l == null && (S = z.createElement("table"), k = z.createElement("tr"), w = z.createElement("div"), S.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", k.style.cssText = "border:1px solid", k.style.height = "1px", w.style.height = "9px", w.style.display = "block", je.appendChild(S).appendChild(k).appendChild(w), A = W.getComputedStyle(k), l = parseInt(A.height, 10) + parseInt(A.borderTopWidth, 10) + parseInt(A.borderBottomWidth, 10) === k.offsetHeight, je.removeChild(S)), l;
          }
        }));
      })();
      function et(e, t, n) {
        var r, s, a, l, h = $t.test(t), f = e.style;
        return n = n || dt(e), n && (l = n.getPropertyValue(t) || n[t], h && l && (l = l.replace(Ge, "$1") || void 0), l === "" && !ze(e) && (l = o.style(e, t)), !M.pixelBoxStyles() && Ct.test(l) && un.test(t) && (r = f.width, s = f.minWidth, a = f.maxWidth, f.minWidth = f.maxWidth = f.width = l, l = n.width, f.width = r, f.minWidth = s, f.maxWidth = a)), l !== void 0 ? (
          // Support: IE <=9 - 11 only
          // IE returns zIndex value as an integer.
          l + ""
        ) : l;
      }
      function ci(e, t) {
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
      var fi = ["Webkit", "Moz", "ms"], pi = z.createElement("div").style, hi = {};
      function dn(e) {
        for (var t = e[0].toUpperCase() + e.slice(1), n = fi.length; n--; )
          if (e = fi[n] + t, e in pi)
            return e;
      }
      function At(e) {
        var t = o.cssProps[e] || hi[e];
        return t || (e in pi ? e : hi[e] = dn(e) || e);
      }
      var cn = /^(none|table(?!-c[ea]).+)/, fn = { position: "absolute", visibility: "hidden", display: "block" }, gi = {
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
      function Et(e, t, n, r, s, a) {
        var l = t === "width" ? 1 : 0, h = 0, f = 0, m = 0;
        if (n === (r ? "border" : "content"))
          return 0;
        for (; l < 4; l += 2)
          n === "margin" && (m += o.css(e, n + $e[l], !0, s)), r ? (n === "content" && (f -= o.css(e, "padding" + $e[l], !0, s)), n !== "margin" && (f -= o.css(e, "border" + $e[l] + "Width", !0, s))) : (f += o.css(e, "padding" + $e[l], !0, s), n !== "padding" ? f += o.css(e, "border" + $e[l] + "Width", !0, s) : h += o.css(e, "border" + $e[l] + "Width", !0, s));
        return !r && a >= 0 && (f += Math.max(0, Math.ceil(
          e["offset" + t[0].toUpperCase() + t.slice(1)] - a - f - h - 0.5
          // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
          // Use an explicit zero to avoid NaN (gh-3964)
        )) || 0), f + m;
      }
      function vi(e, t, n) {
        var r = dt(e), s = !M.boxSizingReliable() || n, a = s && o.css(e, "boxSizing", !1, r) === "border-box", l = a, h = et(e, t, r), f = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Ct.test(h)) {
          if (!n)
            return h;
          h = "auto";
        }
        return (!M.boxSizingReliable() && a || // Support: IE 10 - 11+, Edge 15 - 18+
        // IE/Edge misreport `getComputedStyle` of table rows with width/height
        // set in CSS while `offset*` properties report correct values.
        // Interestingly, in some cases IE 9 doesn't suffer from this issue.
        !M.reliableTrDimensions() && ee(e, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
        // This happens for inline elements with no explicit setting (gh-3571)
        h === "auto" || // Support: Android <=4.1 - 4.3 only
        // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
        !parseFloat(h) && o.css(e, "display", !1, r) === "inline") && // Make sure the element is visible & connected
        e.getClientRects().length && (a = o.css(e, "boxSizing", !1, r) === "border-box", l = f in e, l && (h = e[f])), h = parseFloat(h) || 0, h + Et(
          e,
          t,
          n || (a ? "border" : "content"),
          l,
          r,
          // Provide the current computed size to request scroll gutter calculation (gh-3589)
          h
        ) + "px";
      }
      o.extend({
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
            var s, a, l, h = ve(t), f = $t.test(t), m = e.style;
            if (f || (t = At(h)), l = o.cssHooks[t] || o.cssHooks[h], n !== void 0) {
              if (a = typeof n, a === "string" && (s = Je.exec(n)) && s[1] && (n = ti(e, t, s), a = "number"), n == null || n !== n)
                return;
              a === "number" && !f && (n += s && s[3] || (o.cssNumber[h] ? "" : "px")), !M.clearCloneStyle && n === "" && t.indexOf("background") === 0 && (m[t] = "inherit"), (!l || !("set" in l) || (n = l.set(e, n, r)) !== void 0) && (f ? m.setProperty(t, n) : m[t] = n);
            } else
              return l && "get" in l && (s = l.get(e, !1, r)) !== void 0 ? s : m[t];
          }
        },
        css: function(e, t, n, r) {
          var s, a, l, h = ve(t), f = $t.test(t);
          return f || (t = At(h)), l = o.cssHooks[t] || o.cssHooks[h], l && "get" in l && (s = l.get(e, !0, n)), s === void 0 && (s = et(e, t, r)), s === "normal" && t in gi && (s = gi[t]), n === "" || n ? (a = parseFloat(s), n === !0 || isFinite(a) ? a || 0 : s) : s;
        }
      }), o.each(["height", "width"], function(e, t) {
        o.cssHooks[t] = {
          get: function(n, r, s) {
            if (r)
              return cn.test(o.css(n, "display")) && // Support: Safari 8+
              // Table columns in Safari have non-zero offsetWidth & zero
              // getBoundingClientRect().width unless display is changed.
              // Support: IE <=11 only
              // Running getBoundingClientRect on a disconnected node
              // in IE throws an error.
              (!n.getClientRects().length || !n.getBoundingClientRect().width) ? di(n, fn, function() {
                return vi(n, t, s);
              }) : vi(n, t, s);
          },
          set: function(n, r, s) {
            var a, l = dt(n), h = !M.scrollboxSize() && l.position === "absolute", f = h || s, m = f && o.css(n, "boxSizing", !1, l) === "border-box", S = s ? Et(
              n,
              t,
              s,
              m,
              l
            ) : 0;
            return m && h && (S -= Math.ceil(
              n["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(l[t]) - Et(n, t, "border", !1, l) - 0.5
            )), S && (a = Je.exec(r)) && (a[3] || "px") !== "px" && (n.style[t] = r, r = o.css(n, t)), yi(n, r, S);
          }
        };
      }), o.cssHooks.marginLeft = ci(
        M.reliableMarginLeft,
        function(e, t) {
          if (t)
            return (parseFloat(et(e, "marginLeft")) || e.getBoundingClientRect().left - di(e, { marginLeft: 0 }, function() {
              return e.getBoundingClientRect().left;
            })) + "px";
        }
      ), o.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function(e, t) {
        o.cssHooks[e + t] = {
          expand: function(n) {
            for (var r = 0, s = {}, a = typeof n == "string" ? n.split(" ") : [n]; r < 4; r++)
              s[e + $e[r] + t] = a[r] || a[r - 2] || a[0];
            return s;
          }
        }, e !== "margin" && (o.cssHooks[e + t].set = yi);
      }), o.fn.extend({
        css: function(e, t) {
          return Ce(this, function(n, r, s) {
            var a, l, h = {}, f = 0;
            if (Array.isArray(r)) {
              for (a = dt(n), l = r.length; f < l; f++)
                h[r[f]] = o.css(n, r[f], !1, a);
              return h;
            }
            return s !== void 0 ? o.style(n, r, s) : o.css(n, r);
          }, e, t, arguments.length > 1);
        }
      });
      function ue(e, t, n, r, s) {
        return new ue.prototype.init(e, t, n, r, s);
      }
      o.Tween = ue, ue.prototype = {
        constructor: ue,
        init: function(e, t, n, r, s, a) {
          this.elem = e, this.prop = n, this.easing = s || o.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = a || (o.cssNumber[n] ? "" : "px");
        },
        cur: function() {
          var e = ue.propHooks[this.prop];
          return e && e.get ? e.get(this) : ue.propHooks._default.get(this);
        },
        run: function(e) {
          var t, n = ue.propHooks[this.prop];
          return this.options.duration ? this.pos = t = o.easing[this.easing](
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
            return e.elem.nodeType !== 1 || e.elem[e.prop] != null && e.elem.style[e.prop] == null ? e.elem[e.prop] : (t = o.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t);
          },
          set: function(e) {
            o.fx.step[e.prop] ? o.fx.step[e.prop](e) : e.elem.nodeType === 1 && (o.cssHooks[e.prop] || e.elem.style[At(e.prop)] != null) ? o.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
          }
        }
      }, ue.propHooks.scrollTop = ue.propHooks.scrollLeft = {
        set: function(e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
      }, o.easing = {
        linear: function(e) {
          return e;
        },
        swing: function(e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing"
      }, o.fx = ue.prototype.init, o.fx.step = {};
      var Ue, ct, pn = /^(?:toggle|show|hide)$/, hn = /queueHooks$/;
      function Dt() {
        ct && (z.hidden === !1 && W.requestAnimationFrame ? W.requestAnimationFrame(Dt) : W.setTimeout(Dt, o.fx.interval), o.fx.tick());
      }
      function mi() {
        return W.setTimeout(function() {
          Ue = void 0;
        }), Ue = Date.now();
      }
      function ft(e, t) {
        var n, r = 0, s = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
          n = $e[r], s["margin" + n] = s["padding" + n] = e;
        return t && (s.opacity = s.width = e), s;
      }
      function bi(e, t, n) {
        for (var r, s = (he.tweeners[t] || []).concat(he.tweeners["*"]), a = 0, l = s.length; a < l; a++)
          if (r = s[a].call(n, t, e))
            return r;
      }
      function gn(e, t, n) {
        var r, s, a, l, h, f, m, S, k = "width" in t || "height" in t, w = this, A = {}, R = e.style, Y = e.nodeType && lt(e), F = L.get(e, "fxshow");
        n.queue || (l = o._queueHooks(e, "fx"), l.unqueued == null && (l.unqueued = 0, h = l.empty.fire, l.empty.fire = function() {
          l.unqueued || h();
        }), l.unqueued++, w.always(function() {
          w.always(function() {
            l.unqueued--, o.queue(e, "fx").length || l.empty.fire();
          });
        }));
        for (r in t)
          if (s = t[r], pn.test(s)) {
            if (delete t[r], a = a || s === "toggle", s === (Y ? "hide" : "show"))
              if (s === "show" && F && F[r] !== void 0)
                Y = !0;
              else
                continue;
            A[r] = F && F[r] || o.style(e, r);
          }
        if (f = !o.isEmptyObject(t), !(!f && o.isEmptyObject(A))) {
          k && e.nodeType === 1 && (n.overflow = [R.overflow, R.overflowX, R.overflowY], m = F && F.display, m == null && (m = L.get(e, "display")), S = o.css(e, "display"), S === "none" && (m ? S = m : (Re([e], !0), m = e.style.display || m, S = o.css(e, "display"), Re([e]))), (S === "inline" || S === "inline-block" && m != null) && o.css(e, "float") === "none" && (f || (w.done(function() {
            R.display = m;
          }), m == null && (S = R.display, m = S === "none" ? "" : S)), R.display = "inline-block")), n.overflow && (R.overflow = "hidden", w.always(function() {
            R.overflow = n.overflow[0], R.overflowX = n.overflow[1], R.overflowY = n.overflow[2];
          })), f = !1;
          for (r in A)
            f || (F ? "hidden" in F && (Y = F.hidden) : F = L.access(e, "fxshow", { display: m }), a && (F.hidden = !Y), Y && Re([e], !0), w.done(function() {
              Y || Re([e]), L.remove(e, "fxshow");
              for (r in A)
                o.style(e, r, A[r]);
            })), f = bi(Y ? F[r] : 0, r, w), r in F || (F[r] = f.start, Y && (f.end = f.start, f.start = 0));
        }
      }
      function yn(e, t) {
        var n, r, s, a, l;
        for (n in e)
          if (r = ve(n), s = t[r], a = e[n], Array.isArray(a) && (s = a[1], a = e[n] = a[0]), n !== r && (e[r] = a, delete e[n]), l = o.cssHooks[r], l && "expand" in l) {
            a = l.expand(a), delete e[r];
            for (n in a)
              n in e || (e[n] = a[n], t[n] = s);
          } else
            t[r] = s;
      }
      function he(e, t, n) {
        var r, s, a = 0, l = he.prefilters.length, h = o.Deferred().always(function() {
          delete f.elem;
        }), f = function() {
          if (s)
            return !1;
          for (var k = Ue || mi(), w = Math.max(0, m.startTime + m.duration - k), A = w / m.duration || 0, R = 1 - A, Y = 0, F = m.tweens.length; Y < F; Y++)
            m.tweens[Y].run(R);
          return h.notifyWith(e, [m, R, w]), R < 1 && F ? w : (F || h.notifyWith(e, [m, 1, 0]), h.resolveWith(e, [m]), !1);
        }, m = h.promise({
          elem: e,
          props: o.extend({}, t),
          opts: o.extend(!0, {
            specialEasing: {},
            easing: o.easing._default
          }, n),
          originalProperties: t,
          originalOptions: n,
          startTime: Ue || mi(),
          duration: n.duration,
          tweens: [],
          createTween: function(k, w) {
            var A = o.Tween(
              e,
              m.opts,
              k,
              w,
              m.opts.specialEasing[k] || m.opts.easing
            );
            return m.tweens.push(A), A;
          },
          stop: function(k) {
            var w = 0, A = k ? m.tweens.length : 0;
            if (s)
              return this;
            for (s = !0; w < A; w++)
              m.tweens[w].run(1);
            return k ? (h.notifyWith(e, [m, 1, 0]), h.resolveWith(e, [m, k])) : h.rejectWith(e, [m, k]), this;
          }
        }), S = m.props;
        for (yn(S, m.opts.specialEasing); a < l; a++)
          if (r = he.prefilters[a].call(m, e, S, m.opts), r)
            return _(r.stop) && (o._queueHooks(m.elem, m.opts.queue).stop = r.stop.bind(r)), r;
        return o.map(S, bi, m), _(m.opts.start) && m.opts.start.call(e, m), m.progress(m.opts.progress).done(m.opts.done, m.opts.complete).fail(m.opts.fail).always(m.opts.always), o.fx.timer(
          o.extend(f, {
            elem: e,
            anim: m,
            queue: m.opts.queue
          })
        ), m;
      }
      o.Animation = o.extend(he, {
        tweeners: {
          "*": [function(e, t) {
            var n = this.createTween(e, t);
            return ti(n.elem, e, Je.exec(t), n), n;
          }]
        },
        tweener: function(e, t) {
          _(e) ? (t = e, e = ["*"]) : e = e.match(ye);
          for (var n, r = 0, s = e.length; r < s; r++)
            n = e[r], he.tweeners[n] = he.tweeners[n] || [], he.tweeners[n].unshift(t);
        },
        prefilters: [gn],
        prefilter: function(e, t) {
          t ? he.prefilters.unshift(e) : he.prefilters.push(e);
        }
      }), o.speed = function(e, t, n) {
        var r = e && typeof e == "object" ? o.extend({}, e) : {
          complete: n || !n && t || _(e) && e,
          duration: e,
          easing: n && t || t && !_(t) && t
        };
        return o.fx.off ? r.duration = 0 : typeof r.duration != "number" && (r.duration in o.fx.speeds ? r.duration = o.fx.speeds[r.duration] : r.duration = o.fx.speeds._default), (r.queue == null || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
          _(r.old) && r.old.call(this), r.queue && o.dequeue(this, r.queue);
        }, r;
      }, o.fn.extend({
        fadeTo: function(e, t, n, r) {
          return this.filter(lt).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
        },
        animate: function(e, t, n, r) {
          var s = o.isEmptyObject(e), a = o.speed(t, n, r), l = function() {
            var h = he(this, o.extend({}, e), a);
            (s || L.get(this, "finish")) && h.stop(!0);
          };
          return l.finish = l, s || a.queue === !1 ? this.each(l) : this.queue(a.queue, l);
        },
        stop: function(e, t, n) {
          var r = function(s) {
            var a = s.stop;
            delete s.stop, a(n);
          };
          return typeof e != "string" && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function() {
            var s = !0, a = e != null && e + "queueHooks", l = o.timers, h = L.get(this);
            if (a)
              h[a] && h[a].stop && r(h[a]);
            else
              for (a in h)
                h[a] && h[a].stop && hn.test(a) && r(h[a]);
            for (a = l.length; a--; )
              l[a].elem === this && (e == null || l[a].queue === e) && (l[a].anim.stop(n), s = !1, l.splice(a, 1));
            (s || !n) && o.dequeue(this, e);
          });
        },
        finish: function(e) {
          return e !== !1 && (e = e || "fx"), this.each(function() {
            var t, n = L.get(this), r = n[e + "queue"], s = n[e + "queueHooks"], a = o.timers, l = r ? r.length : 0;
            for (n.finish = !0, o.queue(this, e, []), s && s.stop && s.stop.call(this, !0), t = a.length; t--; )
              a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
            for (t = 0; t < l; t++)
              r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish;
          });
        }
      }), o.each(["toggle", "show", "hide"], function(e, t) {
        var n = o.fn[t];
        o.fn[t] = function(r, s, a) {
          return r == null || typeof r == "boolean" ? n.apply(this, arguments) : this.animate(ft(t, !0), r, s, a);
        };
      }), o.each({
        slideDown: ft("show"),
        slideUp: ft("hide"),
        slideToggle: ft("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
      }, function(e, t) {
        o.fn[e] = function(n, r, s) {
          return this.animate(t, n, r, s);
        };
      }), o.timers = [], o.fx.tick = function() {
        var e, t = 0, n = o.timers;
        for (Ue = Date.now(); t < n.length; t++)
          e = n[t], !e() && n[t] === e && n.splice(t--, 1);
        n.length || o.fx.stop(), Ue = void 0;
      }, o.fx.timer = function(e) {
        o.timers.push(e), o.fx.start();
      }, o.fx.interval = 13, o.fx.start = function() {
        ct || (ct = !0, Dt());
      }, o.fx.stop = function() {
        ct = null;
      }, o.fx.speeds = {
        slow: 600,
        fast: 200,
        // Default speed
        _default: 400
      }, o.fn.delay = function(e, t) {
        return e = o.fx && o.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(n, r) {
          var s = W.setTimeout(n, e);
          r.stop = function() {
            W.clearTimeout(s);
          };
        });
      }, function() {
        var e = z.createElement("input"), t = z.createElement("select"), n = t.appendChild(z.createElement("option"));
        e.type = "checkbox", M.checkOn = e.value !== "", M.optSelected = n.selected, e = z.createElement("input"), e.value = "t", e.type = "radio", M.radioValue = e.value === "t";
      }();
      var wi, tt = o.expr.attrHandle;
      o.fn.extend({
        attr: function(e, t) {
          return Ce(this, o.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
          return this.each(function() {
            o.removeAttr(this, e);
          });
        }
      }), o.extend({
        attr: function(e, t, n) {
          var r, s, a = e.nodeType;
          if (!(a === 3 || a === 8 || a === 2)) {
            if (typeof e.getAttribute > "u")
              return o.prop(e, t, n);
            if ((a !== 1 || !o.isXMLDoc(e)) && (s = o.attrHooks[t.toLowerCase()] || (o.expr.match.bool.test(t) ? wi : void 0)), n !== void 0) {
              if (n === null) {
                o.removeAttr(e, t);
                return;
              }
              return s && "set" in s && (r = s.set(e, n, t)) !== void 0 ? r : (e.setAttribute(t, n + ""), n);
            }
            return s && "get" in s && (r = s.get(e, t)) !== null ? r : (r = o.find.attr(e, t), r ?? void 0);
          }
        },
        attrHooks: {
          type: {
            set: function(e, t) {
              if (!M.radioValue && t === "radio" && ee(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t;
              }
            }
          }
        },
        removeAttr: function(e, t) {
          var n, r = 0, s = t && t.match(ye);
          if (s && e.nodeType === 1)
            for (; n = s[r++]; )
              e.removeAttribute(n);
        }
      }), wi = {
        set: function(e, t, n) {
          return t === !1 ? o.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
      }, o.each(o.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = tt[t] || o.find.attr;
        tt[t] = function(r, s, a) {
          var l, h, f = s.toLowerCase();
          return a || (h = tt[f], tt[f] = l, l = n(r, s, a) != null ? f : null, tt[f] = h), l;
        };
      });
      var vn = /^(?:input|select|textarea|button)$/i, mn = /^(?:a|area)$/i;
      o.fn.extend({
        prop: function(e, t) {
          return Ce(this, o.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
          return this.each(function() {
            delete this[o.propFix[e] || e];
          });
        }
      }), o.extend({
        prop: function(e, t, n) {
          var r, s, a = e.nodeType;
          if (!(a === 3 || a === 8 || a === 2))
            return (a !== 1 || !o.isXMLDoc(e)) && (t = o.propFix[t] || t, s = o.propHooks[t]), n !== void 0 ? s && "set" in s && (r = s.set(e, n, t)) !== void 0 ? r : e[t] = n : s && "get" in s && (r = s.get(e, t)) !== null ? r : e[t];
        },
        propHooks: {
          tabIndex: {
            get: function(e) {
              var t = o.find.attr(e, "tabindex");
              return t ? parseInt(t, 10) : vn.test(e.nodeName) || mn.test(e.nodeName) && e.href ? 0 : -1;
            }
          }
        },
        propFix: {
          for: "htmlFor",
          class: "className"
        }
      }), M.optSelected || (o.propHooks.selected = {
        get: function(e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function(e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
      }), o.each([
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
        o.propFix[this.toLowerCase()] = this;
      });
      function He(e) {
        var t = e.match(ye) || [];
        return t.join(" ");
      }
      function Pe(e) {
        return e.getAttribute && e.getAttribute("class") || "";
      }
      function Ot(e) {
        return Array.isArray(e) ? e : typeof e == "string" ? e.match(ye) || [] : [];
      }
      o.fn.extend({
        addClass: function(e) {
          var t, n, r, s, a, l;
          return _(e) ? this.each(function(h) {
            o(this).addClass(e.call(this, h, Pe(this)));
          }) : (t = Ot(e), t.length ? this.each(function() {
            if (r = Pe(this), n = this.nodeType === 1 && " " + He(r) + " ", n) {
              for (a = 0; a < t.length; a++)
                s = t[a], n.indexOf(" " + s + " ") < 0 && (n += s + " ");
              l = He(n), r !== l && this.setAttribute("class", l);
            }
          }) : this);
        },
        removeClass: function(e) {
          var t, n, r, s, a, l;
          return _(e) ? this.each(function(h) {
            o(this).removeClass(e.call(this, h, Pe(this)));
          }) : arguments.length ? (t = Ot(e), t.length ? this.each(function() {
            if (r = Pe(this), n = this.nodeType === 1 && " " + He(r) + " ", n) {
              for (a = 0; a < t.length; a++)
                for (s = t[a]; n.indexOf(" " + s + " ") > -1; )
                  n = n.replace(" " + s + " ", " ");
              l = He(n), r !== l && this.setAttribute("class", l);
            }
          }) : this) : this.attr("class", "");
        },
        toggleClass: function(e, t) {
          var n, r, s, a, l = typeof e, h = l === "string" || Array.isArray(e);
          return _(e) ? this.each(function(f) {
            o(this).toggleClass(
              e.call(this, f, Pe(this), t),
              t
            );
          }) : typeof t == "boolean" && h ? t ? this.addClass(e) : this.removeClass(e) : (n = Ot(e), this.each(function() {
            if (h)
              for (a = o(this), s = 0; s < n.length; s++)
                r = n[s], a.hasClass(r) ? a.removeClass(r) : a.addClass(r);
            else
              (e === void 0 || l === "boolean") && (r = Pe(this), r && L.set(this, "__className__", r), this.setAttribute && this.setAttribute(
                "class",
                r || e === !1 ? "" : L.get(this, "__className__") || ""
              ));
          }));
        },
        hasClass: function(e) {
          var t, n, r = 0;
          for (t = " " + e + " "; n = this[r++]; )
            if (n.nodeType === 1 && (" " + He(Pe(n)) + " ").indexOf(t) > -1)
              return !0;
          return !1;
        }
      });
      var bn = /\r/g;
      o.fn.extend({
        val: function(e) {
          var t, n, r, s = this[0];
          return arguments.length ? (r = _(e), this.each(function(a) {
            var l;
            this.nodeType === 1 && (r ? l = e.call(this, a, o(this).val()) : l = e, l == null ? l = "" : typeof l == "number" ? l += "" : Array.isArray(l) && (l = o.map(l, function(h) {
              return h == null ? "" : h + "";
            })), t = o.valHooks[this.type] || o.valHooks[this.nodeName.toLowerCase()], (!t || !("set" in t) || t.set(this, l, "value") === void 0) && (this.value = l));
          })) : s ? (t = o.valHooks[s.type] || o.valHooks[s.nodeName.toLowerCase()], t && "get" in t && (n = t.get(s, "value")) !== void 0 ? n : (n = s.value, typeof n == "string" ? n.replace(bn, "") : n ?? "")) : void 0;
        }
      }), o.extend({
        valHooks: {
          option: {
            get: function(e) {
              var t = o.find.attr(e, "value");
              return t ?? // Support: IE <=10 - 11 only
              // option.text throws exceptions (trac-14686, trac-14858)
              // Strip and collapse whitespace
              // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
              He(o.text(e));
            }
          },
          select: {
            get: function(e) {
              var t, n, r, s = e.options, a = e.selectedIndex, l = e.type === "select-one", h = l ? null : [], f = l ? a + 1 : s.length;
              for (a < 0 ? r = f : r = l ? a : 0; r < f; r++)
                if (n = s[r], (n.selected || r === a) && // Don't return options that are disabled or in a disabled optgroup
                !n.disabled && (!n.parentNode.disabled || !ee(n.parentNode, "optgroup"))) {
                  if (t = o(n).val(), l)
                    return t;
                  h.push(t);
                }
              return h;
            },
            set: function(e, t) {
              for (var n, r, s = e.options, a = o.makeArray(t), l = s.length; l--; )
                r = s[l], (r.selected = o.inArray(o.valHooks.option.get(r), a) > -1) && (n = !0);
              return n || (e.selectedIndex = -1), a;
            }
          }
        }
      }), o.each(["radio", "checkbox"], function() {
        o.valHooks[this] = {
          set: function(e, t) {
            if (Array.isArray(t))
              return e.checked = o.inArray(o(e).val(), t) > -1;
          }
        }, M.checkOn || (o.valHooks[this].get = function(e) {
          return e.getAttribute("value") === null ? "on" : e.value;
        });
      });
      var it = W.location, Ti = { guid: Date.now() }, Nt = /\?/;
      o.parseXML = function(e) {
        var t, n;
        if (!e || typeof e != "string")
          return null;
        try {
          t = new W.DOMParser().parseFromString(e, "text/xml");
        } catch {
        }
        return n = t && t.getElementsByTagName("parsererror")[0], (!t || n) && o.error("Invalid XML: " + (n ? o.map(n.childNodes, function(r) {
          return r.textContent;
        }).join(`
`) : e)), t;
      };
      var Si = /^(?:focusinfocus|focusoutblur)$/, xi = function(e) {
        e.stopPropagation();
      };
      o.extend(o.event, {
        trigger: function(e, t, n, r) {
          var s, a, l, h, f, m, S, k, w = [n || z], A = D.call(e, "type") ? e.type : e, R = D.call(e, "namespace") ? e.namespace.split(".") : [];
          if (a = k = l = n = n || z, !(n.nodeType === 3 || n.nodeType === 8) && !Si.test(A + o.event.triggered) && (A.indexOf(".") > -1 && (R = A.split("."), A = R.shift(), R.sort()), f = A.indexOf(":") < 0 && "on" + A, e = e[o.expando] ? e : new o.Event(A, typeof e == "object" && e), e.isTrigger = r ? 2 : 3, e.namespace = R.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + R.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = t == null ? [e] : o.makeArray(t, [e]), S = o.event.special[A] || {}, !(!r && S.trigger && S.trigger.apply(n, t) === !1))) {
            if (!r && !S.noBubble && !xe(n)) {
              for (h = S.delegateType || A, Si.test(h + A) || (a = a.parentNode); a; a = a.parentNode)
                w.push(a), l = a;
              l === (n.ownerDocument || z) && w.push(l.defaultView || l.parentWindow || W);
            }
            for (s = 0; (a = w[s++]) && !e.isPropagationStopped(); )
              k = a, e.type = s > 1 ? h : S.bindType || A, m = (L.get(a, "events") || /* @__PURE__ */ Object.create(null))[e.type] && L.get(a, "handle"), m && m.apply(a, t), m = f && a[f], m && m.apply && Ke(a) && (e.result = m.apply(a, t), e.result === !1 && e.preventDefault());
            return e.type = A, !r && !e.isDefaultPrevented() && (!S._default || S._default.apply(w.pop(), t) === !1) && Ke(n) && f && _(n[A]) && !xe(n) && (l = n[f], l && (n[f] = null), o.event.triggered = A, e.isPropagationStopped() && k.addEventListener(A, xi), n[A](), e.isPropagationStopped() && k.removeEventListener(A, xi), o.event.triggered = void 0, l && (n[f] = l)), e.result;
          }
        },
        // Piggyback on a donor event to simulate a different one
        // Used only for `focus(in | out)` events
        simulate: function(e, t, n) {
          var r = o.extend(
            new o.Event(),
            n,
            {
              type: e,
              isSimulated: !0
            }
          );
          o.event.trigger(r, null, t);
        }
      }), o.fn.extend({
        trigger: function(e, t) {
          return this.each(function() {
            o.event.trigger(e, t, this);
          });
        },
        triggerHandler: function(e, t) {
          var n = this[0];
          if (n)
            return o.event.trigger(e, t, n, !0);
        }
      });
      var wn = /\[\]$/, ki = /\r?\n/g, Tn = /^(?:submit|button|image|reset|file)$/i, Sn = /^(?:input|select|textarea|keygen)/i;
      function jt(e, t, n, r) {
        var s;
        if (Array.isArray(t))
          o.each(t, function(a, l) {
            n || wn.test(e) ? r(e, l) : jt(
              e + "[" + (typeof l == "object" && l != null ? a : "") + "]",
              l,
              n,
              r
            );
          });
        else if (!n && qe(t) === "object")
          for (s in t)
            jt(e + "[" + s + "]", t[s], n, r);
        else
          r(e, t);
      }
      o.param = function(e, t) {
        var n, r = [], s = function(a, l) {
          var h = _(l) ? l() : l;
          r[r.length] = encodeURIComponent(a) + "=" + encodeURIComponent(h ?? "");
        };
        if (e == null)
          return "";
        if (Array.isArray(e) || e.jquery && !o.isPlainObject(e))
          o.each(e, function() {
            s(this.name, this.value);
          });
        else
          for (n in e)
            jt(n, e[n], t, s);
        return r.join("&");
      }, o.fn.extend({
        serialize: function() {
          return o.param(this.serializeArray());
        },
        serializeArray: function() {
          return this.map(function() {
            var e = o.prop(this, "elements");
            return e ? o.makeArray(e) : this;
          }).filter(function() {
            var e = this.type;
            return this.name && !o(this).is(":disabled") && Sn.test(this.nodeName) && !Tn.test(e) && (this.checked || !Ze.test(e));
          }).map(function(e, t) {
            var n = o(this).val();
            return n == null ? null : Array.isArray(n) ? o.map(n, function(r) {
              return { name: t.name, value: r.replace(ki, `\r
`) };
            }) : { name: t.name, value: n.replace(ki, `\r
`) };
          }).get();
        }
      });
      var xn = /%20/g, kn = /#.*$/, Cn = /([?&])_=[^&]*/, $n = /^(.*?):[ \t]*([^\r\n]*)$/mg, An = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, En = /^(?:GET|HEAD)$/, Dn = /^\/\//, Ci = {}, Ht = {}, $i = "*/".concat("*"), Pt = z.createElement("a");
      Pt.href = it.href;
      function Ai(e) {
        return function(t, n) {
          typeof t != "string" && (n = t, t = "*");
          var r, s = 0, a = t.toLowerCase().match(ye) || [];
          if (_(n))
            for (; r = a[s++]; )
              r[0] === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        };
      }
      function Ei(e, t, n, r) {
        var s = {}, a = e === Ht;
        function l(h) {
          var f;
          return s[h] = !0, o.each(e[h] || [], function(m, S) {
            var k = S(t, n, r);
            if (typeof k == "string" && !a && !s[k])
              return t.dataTypes.unshift(k), l(k), !1;
            if (a)
              return !(f = k);
          }), f;
        }
        return l(t.dataTypes[0]) || !s["*"] && l("*");
      }
      function Lt(e, t) {
        var n, r, s = o.ajaxSettings.flatOptions || {};
        for (n in t)
          t[n] !== void 0 && ((s[n] ? e : r || (r = {}))[n] = t[n]);
        return r && o.extend(!0, e, r), e;
      }
      function On(e, t, n) {
        for (var r, s, a, l, h = e.contents, f = e.dataTypes; f[0] === "*"; )
          f.shift(), r === void 0 && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r) {
          for (s in h)
            if (h[s] && h[s].test(r)) {
              f.unshift(s);
              break;
            }
        }
        if (f[0] in n)
          a = f[0];
        else {
          for (s in n) {
            if (!f[0] || e.converters[s + " " + f[0]]) {
              a = s;
              break;
            }
            l || (l = s);
          }
          a = a || l;
        }
        if (a)
          return a !== f[0] && f.unshift(a), n[a];
      }
      function Nn(e, t, n, r) {
        var s, a, l, h, f, m = {}, S = e.dataTypes.slice();
        if (S[1])
          for (l in e.converters)
            m[l.toLowerCase()] = e.converters[l];
        for (a = S.shift(); a; )
          if (e.responseFields[a] && (n[e.responseFields[a]] = t), !f && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), f = a, a = S.shift(), a) {
            if (a === "*")
              a = f;
            else if (f !== "*" && f !== a) {
              if (l = m[f + " " + a] || m["* " + a], !l) {
                for (s in m)
                  if (h = s.split(" "), h[1] === a && (l = m[f + " " + h[0]] || m["* " + h[0]], l)) {
                    l === !0 ? l = m[s] : m[s] !== !0 && (a = h[0], S.unshift(h[1]));
                    break;
                  }
              }
              if (l !== !0)
                if (l && e.throws)
                  t = l(t);
                else
                  try {
                    t = l(t);
                  } catch (k) {
                    return {
                      state: "parsererror",
                      error: l ? k : "No conversion from " + f + " to " + a
                    };
                  }
            }
          }
        return { state: "success", data: t };
      }
      o.extend({
        // Counter for holding the number of active queries
        active: 0,
        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: it.href,
          type: "GET",
          isLocal: An.test(it.protocol),
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
            "*": $i,
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
            "text xml": o.parseXML
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
            Lt(Lt(e, o.ajaxSettings), t)
          ) : (
            // Extending ajaxSettings
            Lt(o.ajaxSettings, e)
          );
        },
        ajaxPrefilter: Ai(Ci),
        ajaxTransport: Ai(Ht),
        // Main method
        ajax: function(e, t) {
          typeof e == "object" && (t = e, e = void 0), t = t || {};
          var n, r, s, a, l, h, f, m, S, k, w = o.ajaxSetup({}, t), A = w.context || w, R = w.context && (A.nodeType || A.jquery) ? o(A) : o.event, Y = o.Deferred(), F = o.Callbacks("once memory"), ne = w.statusCode || {}, ie = {}, me = {}, be = "canceled", V = {
            readyState: 0,
            // Builds headers hashtable if needed
            getResponseHeader: function(G) {
              var te;
              if (f) {
                if (!a)
                  for (a = {}; te = $n.exec(s); )
                    a[te[1].toLowerCase() + " "] = (a[te[1].toLowerCase() + " "] || []).concat(te[2]);
                te = a[G.toLowerCase() + " "];
              }
              return te == null ? null : te.join(", ");
            },
            // Raw string
            getAllResponseHeaders: function() {
              return f ? s : null;
            },
            // Caches the header
            setRequestHeader: function(G, te) {
              return f == null && (G = me[G.toLowerCase()] = me[G.toLowerCase()] || G, ie[G] = te), this;
            },
            // Overrides response content-type header
            overrideMimeType: function(G) {
              return f == null && (w.mimeType = G), this;
            },
            // Status-dependent callbacks
            statusCode: function(G) {
              var te;
              if (G)
                if (f)
                  V.always(G[V.status]);
                else
                  for (te in G)
                    ne[te] = [ne[te], G[te]];
              return this;
            },
            // Cancel the request
            abort: function(G) {
              var te = G || be;
              return n && n.abort(te), Le(0, te), this;
            }
          };
          if (Y.promise(V), w.url = ((e || w.url || it.href) + "").replace(Dn, it.protocol + "//"), w.type = t.method || t.type || w.method || w.type, w.dataTypes = (w.dataType || "*").toLowerCase().match(ye) || [""], w.crossDomain == null) {
            h = z.createElement("a");
            try {
              h.href = w.url, h.href = h.href, w.crossDomain = Pt.protocol + "//" + Pt.host != h.protocol + "//" + h.host;
            } catch {
              w.crossDomain = !0;
            }
          }
          if (w.data && w.processData && typeof w.data != "string" && (w.data = o.param(w.data, w.traditional)), Ei(Ci, w, t, V), f)
            return V;
          m = o.event && w.global, m && o.active++ === 0 && o.event.trigger("ajaxStart"), w.type = w.type.toUpperCase(), w.hasContent = !En.test(w.type), r = w.url.replace(kn, ""), w.hasContent ? w.data && w.processData && (w.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (w.data = w.data.replace(xn, "+")) : (k = w.url.slice(r.length), w.data && (w.processData || typeof w.data == "string") && (r += (Nt.test(r) ? "&" : "?") + w.data, delete w.data), w.cache === !1 && (r = r.replace(Cn, "$1"), k = (Nt.test(r) ? "&" : "?") + "_=" + Ti.guid++ + k), w.url = r + k), w.ifModified && (o.lastModified[r] && V.setRequestHeader("If-Modified-Since", o.lastModified[r]), o.etag[r] && V.setRequestHeader("If-None-Match", o.etag[r])), (w.data && w.hasContent && w.contentType !== !1 || t.contentType) && V.setRequestHeader("Content-Type", w.contentType), V.setRequestHeader(
            "Accept",
            w.dataTypes[0] && w.accepts[w.dataTypes[0]] ? w.accepts[w.dataTypes[0]] + (w.dataTypes[0] !== "*" ? ", " + $i + "; q=0.01" : "") : w.accepts["*"]
          );
          for (S in w.headers)
            V.setRequestHeader(S, w.headers[S]);
          if (w.beforeSend && (w.beforeSend.call(A, V, w) === !1 || f))
            return V.abort();
          if (be = "abort", F.add(w.complete), V.done(w.success), V.fail(w.error), n = Ei(Ht, w, t, V), !n)
            Le(-1, "No Transport");
          else {
            if (V.readyState = 1, m && R.trigger("ajaxSend", [V, w]), f)
              return V;
            w.async && w.timeout > 0 && (l = W.setTimeout(function() {
              V.abort("timeout");
            }, w.timeout));
            try {
              f = !1, n.send(ie, Le);
            } catch (G) {
              if (f)
                throw G;
              Le(-1, G);
            }
          }
          function Le(G, te, rt, qt) {
            var we, ot, Te, De, Oe, fe = te;
            f || (f = !0, l && W.clearTimeout(l), n = void 0, s = qt || "", V.readyState = G > 0 ? 4 : 0, we = G >= 200 && G < 300 || G === 304, rt && (De = On(w, V, rt)), !we && o.inArray("script", w.dataTypes) > -1 && o.inArray("json", w.dataTypes) < 0 && (w.converters["text script"] = function() {
            }), De = Nn(w, De, V, we), we ? (w.ifModified && (Oe = V.getResponseHeader("Last-Modified"), Oe && (o.lastModified[r] = Oe), Oe = V.getResponseHeader("etag"), Oe && (o.etag[r] = Oe)), G === 204 || w.type === "HEAD" ? fe = "nocontent" : G === 304 ? fe = "notmodified" : (fe = De.state, ot = De.data, Te = De.error, we = !Te)) : (Te = fe, (G || !fe) && (fe = "error", G < 0 && (G = 0))), V.status = G, V.statusText = (te || fe) + "", we ? Y.resolveWith(A, [ot, fe, V]) : Y.rejectWith(A, [V, fe, Te]), V.statusCode(ne), ne = void 0, m && R.trigger(
              we ? "ajaxSuccess" : "ajaxError",
              [V, w, we ? ot : Te]
            ), F.fireWith(A, [V, fe]), m && (R.trigger("ajaxComplete", [V, w]), --o.active || o.event.trigger("ajaxStop")));
          }
          return V;
        },
        getJSON: function(e, t, n) {
          return o.get(e, t, n, "json");
        },
        getScript: function(e, t) {
          return o.get(e, void 0, t, "script");
        }
      }), o.each(["get", "post"], function(e, t) {
        o[t] = function(n, r, s, a) {
          return _(r) && (a = a || s, s = r, r = void 0), o.ajax(o.extend({
            url: n,
            type: t,
            dataType: a,
            data: r,
            success: s
          }, o.isPlainObject(n) && n));
        };
      }), o.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers)
          t.toLowerCase() === "content-type" && (e.contentType = e.headers[t] || "");
      }), o._evalUrl = function(e, t, n) {
        return o.ajax({
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
            o.globalEval(r, t, n);
          }
        });
      }, o.fn.extend({
        wrapAll: function(e) {
          var t;
          return this[0] && (_(e) && (e = e.call(this[0])), t = o(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
            for (var n = this; n.firstElementChild; )
              n = n.firstElementChild;
            return n;
          }).append(this)), this;
        },
        wrapInner: function(e) {
          return _(e) ? this.each(function(t) {
            o(this).wrapInner(e.call(this, t));
          }) : this.each(function() {
            var t = o(this), n = t.contents();
            n.length ? n.wrapAll(e) : t.append(e);
          });
        },
        wrap: function(e) {
          var t = _(e);
          return this.each(function(n) {
            o(this).wrapAll(t ? e.call(this, n) : e);
          });
        },
        unwrap: function(e) {
          return this.parent(e).not("body").each(function() {
            o(this).replaceWith(this.childNodes);
          }), this;
        }
      }), o.expr.pseudos.hidden = function(e) {
        return !o.expr.pseudos.visible(e);
      }, o.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }, o.ajaxSettings.xhr = function() {
        try {
          return new W.XMLHttpRequest();
        } catch {
        }
      };
      var jn = {
        // File protocol always yields status code 0, assume 200
        0: 200,
        // Support: IE <=9 only
        // trac-1450: sometimes IE returns 1223 when it should be 204
        1223: 204
      }, nt = o.ajaxSettings.xhr();
      M.cors = !!nt && "withCredentials" in nt, M.ajax = nt = !!nt, o.ajaxTransport(function(e) {
        var t, n;
        if (M.cors || nt && !e.crossDomain)
          return {
            send: function(r, s) {
              var a, l = e.xhr();
              if (l.open(
                e.type,
                e.url,
                e.async,
                e.username,
                e.password
              ), e.xhrFields)
                for (a in e.xhrFields)
                  l[a] = e.xhrFields[a];
              e.mimeType && l.overrideMimeType && l.overrideMimeType(e.mimeType), !e.crossDomain && !r["X-Requested-With"] && (r["X-Requested-With"] = "XMLHttpRequest");
              for (a in r)
                l.setRequestHeader(a, r[a]);
              t = function(h) {
                return function() {
                  t && (t = n = l.onload = l.onerror = l.onabort = l.ontimeout = l.onreadystatechange = null, h === "abort" ? l.abort() : h === "error" ? typeof l.status != "number" ? s(0, "error") : s(
                    // File: protocol always yields status 0; see trac-8605, trac-14207
                    l.status,
                    l.statusText
                  ) : s(
                    jn[l.status] || l.status,
                    l.statusText,
                    // Support: IE <=9 only
                    // IE9 has no XHR2 but throws on binary (trac-11426)
                    // For XHR2 non-text, let the caller handle it (gh-2498)
                    (l.responseType || "text") !== "text" || typeof l.responseText != "string" ? { binary: l.response } : { text: l.responseText },
                    l.getAllResponseHeaders()
                  ));
                };
              }, l.onload = t(), n = l.onerror = l.ontimeout = t("error"), l.onabort !== void 0 ? l.onabort = n : l.onreadystatechange = function() {
                l.readyState === 4 && W.setTimeout(function() {
                  t && n();
                });
              }, t = t("abort");
              try {
                l.send(e.hasContent && e.data || null);
              } catch (h) {
                if (t)
                  throw h;
              }
            },
            abort: function() {
              t && t();
            }
          };
      }), o.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1);
      }), o.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function(e) {
            return o.globalEval(e), e;
          }
        }
      }), o.ajaxPrefilter("script", function(e) {
        e.cache === void 0 && (e.cache = !1), e.crossDomain && (e.type = "GET");
      }), o.ajaxTransport("script", function(e) {
        if (e.crossDomain || e.scriptAttrs) {
          var t, n;
          return {
            send: function(r, s) {
              t = o("<script>").attr(e.scriptAttrs || {}).prop({ charset: e.scriptCharset, src: e.url }).on("load error", n = function(a) {
                t.remove(), n = null, a && s(a.type === "error" ? 404 : 200, a.type);
              }), z.head.appendChild(t[0]);
            },
            abort: function() {
              n && n();
            }
          };
        }
      });
      var Di = [], Mt = /(=)\?(?=&|$)|\?\?/;
      o.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
          var e = Di.pop() || o.expando + "_" + Ti.guid++;
          return this[e] = !0, e;
        }
      }), o.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, s, a, l = e.jsonp !== !1 && (Mt.test(e.url) ? "url" : typeof e.data == "string" && (e.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && Mt.test(e.data) && "data");
        if (l || e.dataTypes[0] === "jsonp")
          return r = e.jsonpCallback = _(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, l ? e[l] = e[l].replace(Mt, "$1" + r) : e.jsonp !== !1 && (e.url += (Nt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return a || o.error(r + " was not called"), a[0];
          }, e.dataTypes[0] = "json", s = W[r], W[r] = function() {
            a = arguments;
          }, n.always(function() {
            s === void 0 ? o(W).removeProp(r) : W[r] = s, e[r] && (e.jsonpCallback = t.jsonpCallback, Di.push(r)), a && _(s) && s(a[0]), a = s = void 0;
          }), "script";
      }), M.createHTMLDocument = function() {
        var e = z.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", e.childNodes.length === 2;
      }(), o.parseHTML = function(e, t, n) {
        if (typeof e != "string")
          return [];
        typeof t == "boolean" && (n = t, t = !1);
        var r, s, a;
        return t || (M.createHTMLDocument ? (t = z.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = z.location.href, t.head.appendChild(r)) : t = z), s = Gt.exec(e), a = !n && [], s ? [t.createElement(s[1])] : (s = oi([e], t, a), a && a.length && o(a).remove(), o.merge([], s.childNodes));
      }, o.fn.load = function(e, t, n) {
        var r, s, a, l = this, h = e.indexOf(" ");
        return h > -1 && (r = He(e.slice(h)), e = e.slice(0, h)), _(t) ? (n = t, t = void 0) : t && typeof t == "object" && (s = "POST"), l.length > 0 && o.ajax({
          url: e,
          // If "type" variable is undefined, then "GET" method will be used.
          // Make value of this field explicit since
          // user can override it through ajaxSetup method
          type: s || "GET",
          dataType: "html",
          data: t
        }).done(function(f) {
          a = arguments, l.html(r ? (
            // If a selector was specified, locate the right elements in a dummy div
            // Exclude scripts to avoid IE 'Permission Denied' errors
            o("<div>").append(o.parseHTML(f)).find(r)
          ) : (
            // Otherwise use the full result
            f
          ));
        }).always(n && function(f, m) {
          l.each(function() {
            n.apply(this, a || [f.responseText, m, f]);
          });
        }), this;
      }, o.expr.pseudos.animated = function(e) {
        return o.grep(o.timers, function(t) {
          return e === t.elem;
        }).length;
      }, o.offset = {
        setOffset: function(e, t, n) {
          var r, s, a, l, h, f, m, S = o.css(e, "position"), k = o(e), w = {};
          S === "static" && (e.style.position = "relative"), h = k.offset(), a = o.css(e, "top"), f = o.css(e, "left"), m = (S === "absolute" || S === "fixed") && (a + f).indexOf("auto") > -1, m ? (r = k.position(), l = r.top, s = r.left) : (l = parseFloat(a) || 0, s = parseFloat(f) || 0), _(t) && (t = t.call(e, n, o.extend({}, h))), t.top != null && (w.top = t.top - h.top + l), t.left != null && (w.left = t.left - h.left + s), "using" in t ? t.using.call(e, w) : k.css(w);
        }
      }, o.fn.extend({
        // offset() relates an element's border box to the document origin
        offset: function(e) {
          if (arguments.length)
            return e === void 0 ? this : this.each(function(s) {
              o.offset.setOffset(this, e, s);
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
            var e, t, n, r = this[0], s = { top: 0, left: 0 };
            if (o.css(r, "position") === "fixed")
              t = r.getBoundingClientRect();
            else {
              for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && o.css(e, "position") === "static"; )
                e = e.parentNode;
              e && e !== r && e.nodeType === 1 && (s = o(e).offset(), s.top += o.css(e, "borderTopWidth", !0), s.left += o.css(e, "borderLeftWidth", !0));
            }
            return {
              top: t.top - s.top - o.css(r, "marginTop", !0),
              left: t.left - s.left - o.css(r, "marginLeft", !0)
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
            for (var e = this.offsetParent; e && o.css(e, "position") === "static"; )
              e = e.offsetParent;
            return e || je;
          });
        }
      }), o.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) {
        var n = t === "pageYOffset";
        o.fn[e] = function(r) {
          return Ce(this, function(s, a, l) {
            var h;
            if (xe(s) ? h = s : s.nodeType === 9 && (h = s.defaultView), l === void 0)
              return h ? h[t] : s[a];
            h ? h.scrollTo(
              n ? h.pageXOffset : l,
              n ? l : h.pageYOffset
            ) : s[a] = l;
          }, e, r, arguments.length);
        };
      }), o.each(["top", "left"], function(e, t) {
        o.cssHooks[t] = ci(
          M.pixelPosition,
          function(n, r) {
            if (r)
              return r = et(n, t), Ct.test(r) ? o(n).position()[t] + "px" : r;
          }
        );
      }), o.each({ Height: "height", Width: "width" }, function(e, t) {
        o.each({
          padding: "inner" + e,
          content: t,
          "": "outer" + e
        }, function(n, r) {
          o.fn[r] = function(s, a) {
            var l = arguments.length && (n || typeof s != "boolean"), h = n || (s === !0 || a === !0 ? "margin" : "border");
            return Ce(this, function(f, m, S) {
              var k;
              return xe(f) ? r.indexOf("outer") === 0 ? f["inner" + e] : f.document.documentElement["client" + e] : f.nodeType === 9 ? (k = f.documentElement, Math.max(
                f.body["scroll" + e],
                k["scroll" + e],
                f.body["offset" + e],
                k["offset" + e],
                k["client" + e]
              )) : S === void 0 ? (
                // Get width or height on the element, requesting but not forcing parseFloat
                o.css(f, m, h)
              ) : (
                // Set width or height on the element
                o.style(f, m, S, h)
              );
            }, t, l ? s : void 0, l);
          };
        });
      }), o.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
      ], function(e, t) {
        o.fn[t] = function(n) {
          return this.on(t, n);
        };
      }), o.fn.extend({
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
      }), o.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
        function(e, t) {
          o.fn[t] = function(n, r) {
            return arguments.length > 0 ? this.on(t, null, n, r) : this.trigger(t);
          };
        }
      );
      var Hn = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
      o.proxy = function(e, t) {
        var n, r, s;
        if (typeof t == "string" && (n = e[t], t = e, e = n), !!_(e))
          return r = u.call(arguments, 2), s = function() {
            return e.apply(t || this, r.concat(u.call(arguments)));
          }, s.guid = e.guid = e.guid || o.guid++, s;
      }, o.holdReady = function(e) {
        e ? o.readyWait++ : o.ready(!0);
      }, o.isArray = Array.isArray, o.parseJSON = JSON.parse, o.nodeName = ee, o.isFunction = _, o.isWindow = xe, o.camelCase = ve, o.type = qe, o.now = Date.now, o.isNumeric = function(e) {
        var t = o.type(e);
        return (t === "number" || t === "string") && // parseFloat NaNs numeric-cast false positives ("")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        !isNaN(e - parseFloat(e));
      }, o.trim = function(e) {
        return e == null ? "" : (e + "").replace(Hn, "$1");
      };
      var Pn = W.jQuery, Ln = W.$;
      return o.noConflict = function(e) {
        return W.$ === o && (W.$ = Ln), e && W.jQuery === o && (W.jQuery = Pn), o;
      }, typeof $ > "u" && (W.jQuery = W.$ = o), o;
    });
  }(Ft)), Ft.exports;
}
var Kn = Pi();
const Qn = /* @__PURE__ */ Gn(Kn);
var Jn = { exports: {} };
(function(K, W) {
  (function($) {
    K.exports = $(Pi());
  })(function($) {
    var C = window.Slick || {};
    (C = function() {
      var i = 0;
      return function(u, v) {
        var d, g = this;
        g.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: $(u), appendDots: $(u), arrows: !0, asNavFor: null, prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>', nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function(p, H) {
          return $('<button type="button" />').text(H + 1);
        }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: 0.35, fade: !1, focusOnSelect: !1, focusOnChange: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, g.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, scrolling: !1, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, swiping: !1, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, $.extend(g, g.initials), g.activeBreakpoint = null, g.animType = null, g.animProp = null, g.breakpoints = [], g.breakpointSettings = [], g.cssTransitions = !1, g.focussed = !1, g.interrupted = !1, g.hidden = "hidden", g.paused = !0, g.positionProp = null, g.respondTo = null, g.rowCount = 1, g.shouldClick = !0, g.$slider = $(u), g.$slidesCache = null, g.transformType = null, g.transitionType = null, g.visibilityChange = "visibilitychange", g.windowWidth = 0, g.windowTimer = null, d = $(u).data("slick") || {}, g.options = $.extend({}, g.defaults, v, d), g.currentSlide = g.options.initialSlide, g.originalSettings = g.options, document.mozHidden !== void 0 ? (g.hidden = "mozHidden", g.visibilityChange = "mozvisibilitychange") : document.webkitHidden !== void 0 && (g.hidden = "webkitHidden", g.visibilityChange = "webkitvisibilitychange"), g.autoPlay = $.proxy(g.autoPlay, g), g.autoPlayClear = $.proxy(g.autoPlayClear, g), g.autoPlayIterator = $.proxy(g.autoPlayIterator, g), g.changeSlide = $.proxy(g.changeSlide, g), g.clickHandler = $.proxy(g.clickHandler, g), g.selectHandler = $.proxy(g.selectHandler, g), g.setPosition = $.proxy(g.setPosition, g), g.swipeHandler = $.proxy(g.swipeHandler, g), g.dragHandler = $.proxy(g.dragHandler, g), g.keyHandler = $.proxy(g.keyHandler, g), g.instanceUid = i++, g.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, g.registerBreakpoints(), g.init(!0);
      };
    }()).prototype.activateADA = function() {
      this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
    }, C.prototype.addSlide = C.prototype.slickAdd = function(i, u, v) {
      var d = this;
      if (typeof u == "boolean")
        v = u, u = null;
      else if (u < 0 || u >= d.slideCount)
        return !1;
      d.unload(), typeof u == "number" ? u === 0 && d.$slides.length === 0 ? $(i).appendTo(d.$slideTrack) : v ? $(i).insertBefore(d.$slides.eq(u)) : $(i).insertAfter(d.$slides.eq(u)) : v === !0 ? $(i).prependTo(d.$slideTrack) : $(i).appendTo(d.$slideTrack), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slides.each(function(g, p) {
        $(p).attr("data-slick-index", g);
      }), d.$slidesCache = d.$slides, d.reinit();
    }, C.prototype.animateHeight = function() {
      var i = this;
      if (i.options.slidesToShow === 1 && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
        var u = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.animate({ height: u }, i.options.speed);
      }
    }, C.prototype.animateSlide = function(i, u) {
      var v = {}, d = this;
      d.animateHeight(), d.options.rtl === !0 && d.options.vertical === !1 && (i = -i), d.transformsEnabled === !1 ? d.options.vertical === !1 ? d.$slideTrack.animate({ left: i }, d.options.speed, d.options.easing, u) : d.$slideTrack.animate({ top: i }, d.options.speed, d.options.easing, u) : d.cssTransitions === !1 ? (d.options.rtl === !0 && (d.currentLeft = -d.currentLeft), $({ animStart: d.currentLeft }).animate({ animStart: i }, { duration: d.options.speed, easing: d.options.easing, step: function(g) {
        g = Math.ceil(g), d.options.vertical === !1 ? (v[d.animType] = "translate(" + g + "px, 0px)", d.$slideTrack.css(v)) : (v[d.animType] = "translate(0px," + g + "px)", d.$slideTrack.css(v));
      }, complete: function() {
        u && u.call();
      } })) : (d.applyTransition(), i = Math.ceil(i), d.options.vertical === !1 ? v[d.animType] = "translate3d(" + i + "px, 0px, 0px)" : v[d.animType] = "translate3d(0px," + i + "px, 0px)", d.$slideTrack.css(v), u && setTimeout(function() {
        d.disableTransition(), u.call();
      }, d.options.speed));
    }, C.prototype.getNavTarget = function() {
      var i = this, u = i.options.asNavFor;
      return u && u !== null && (u = $(u).not(i.$slider)), u;
    }, C.prototype.asNavFor = function(i) {
      var u = this.getNavTarget();
      u !== null && typeof u == "object" && u.each(function() {
        var v = $(this).slick("getSlick");
        v.unslicked || v.slideHandler(i, !0);
      });
    }, C.prototype.applyTransition = function(i) {
      var u = this, v = {};
      u.options.fade === !1 ? v[u.transitionType] = u.transformType + " " + u.options.speed + "ms " + u.options.cssEase : v[u.transitionType] = "opacity " + u.options.speed + "ms " + u.options.cssEase, u.options.fade === !1 ? u.$slideTrack.css(v) : u.$slides.eq(i).css(v);
    }, C.prototype.autoPlay = function() {
      var i = this;
      i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
    }, C.prototype.autoPlayClear = function() {
      var i = this;
      i.autoPlayTimer && clearInterval(i.autoPlayTimer);
    }, C.prototype.autoPlayIterator = function() {
      var i = this, u = i.currentSlide + i.options.slidesToScroll;
      i.paused || i.interrupted || i.focussed || (i.options.infinite === !1 && (i.direction === 1 && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : i.direction === 0 && (u = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(u));
    }, C.prototype.buildArrows = function() {
      var i = this;
      i.options.arrows === !0 && (i.$prevArrow = $(i.options.prevArrow).addClass("slick-arrow"), i.$nextArrow = $(i.options.nextArrow).addClass("slick-arrow"), i.slideCount > i.options.slidesToShow ? (i.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), i.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.prependTo(i.options.appendArrows), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.appendTo(i.options.appendArrows), i.options.infinite !== !0 && i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : i.$prevArrow.add(i.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
    }, C.prototype.buildDots = function() {
      var i, u, v = this;
      if (v.options.dots === !0) {
        for (v.$slider.addClass("slick-dotted"), u = $("<ul />").addClass(v.options.dotsClass), i = 0; i <= v.getDotCount(); i += 1)
          u.append($("<li />").append(v.options.customPaging.call(this, v, i)));
        v.$dots = u.appendTo(v.options.appendDots), v.$dots.find("li").first().addClass("slick-active");
      }
    }, C.prototype.buildOut = function() {
      var i = this;
      i.$slides = i.$slider.children(i.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), i.slideCount = i.$slides.length, i.$slides.each(function(u, v) {
        $(v).attr("data-slick-index", u).data("originalStyling", $(v).attr("style") || "");
      }), i.$slider.addClass("slick-slider"), i.$slideTrack = i.slideCount === 0 ? $('<div class="slick-track"/>').appendTo(i.$slider) : i.$slides.wrapAll('<div class="slick-track"/>').parent(), i.$list = i.$slideTrack.wrap('<div class="slick-list"/>').parent(), i.$slideTrack.css("opacity", 0), i.options.centerMode !== !0 && i.options.swipeToSlide !== !0 || (i.options.slidesToScroll = 1), $("img[data-lazy]", i.$slider).not("[src]").addClass("slick-loading"), i.setupInfinite(), i.buildArrows(), i.buildDots(), i.updateDots(), i.setSlideClasses(typeof i.currentSlide == "number" ? i.currentSlide : 0), i.options.draggable === !0 && i.$list.addClass("draggable");
    }, C.prototype.buildRows = function() {
      var i, u, v, d, g, p, H, D = this;
      if (d = document.createDocumentFragment(), p = D.$slider.children(), D.options.rows > 1) {
        for (H = D.options.slidesPerRow * D.options.rows, g = Math.ceil(p.length / H), i = 0; i < g; i++) {
          var re = document.createElement("div");
          for (u = 0; u < D.options.rows; u++) {
            var j = document.createElement("div");
            for (v = 0; v < D.options.slidesPerRow; v++) {
              var M = i * H + (u * D.options.slidesPerRow + v);
              p.get(M) && j.appendChild(p.get(M));
            }
            re.appendChild(j);
          }
          d.appendChild(re);
        }
        D.$slider.empty().append(d), D.$slider.children().children().children().css({ width: 100 / D.options.slidesPerRow + "%", display: "inline-block" });
      }
    }, C.prototype.checkResponsive = function(i, u) {
      var v, d, g, p = this, H = !1, D = p.$slider.width(), re = window.innerWidth || $(window).width();
      if (p.respondTo === "window" ? g = re : p.respondTo === "slider" ? g = D : p.respondTo === "min" && (g = Math.min(re, D)), p.options.responsive && p.options.responsive.length && p.options.responsive !== null) {
        d = null;
        for (v in p.breakpoints)
          p.breakpoints.hasOwnProperty(v) && (p.originalSettings.mobileFirst === !1 ? g < p.breakpoints[v] && (d = p.breakpoints[v]) : g > p.breakpoints[v] && (d = p.breakpoints[v]));
        d !== null ? p.activeBreakpoint !== null ? (d !== p.activeBreakpoint || u) && (p.activeBreakpoint = d, p.breakpointSettings[d] === "unslick" ? p.unslick(d) : (p.options = $.extend({}, p.originalSettings, p.breakpointSettings[d]), i === !0 && (p.currentSlide = p.options.initialSlide), p.refresh(i)), H = d) : (p.activeBreakpoint = d, p.breakpointSettings[d] === "unslick" ? p.unslick(d) : (p.options = $.extend({}, p.originalSettings, p.breakpointSettings[d]), i === !0 && (p.currentSlide = p.options.initialSlide), p.refresh(i)), H = d) : p.activeBreakpoint !== null && (p.activeBreakpoint = null, p.options = p.originalSettings, i === !0 && (p.currentSlide = p.options.initialSlide), p.refresh(i), H = d), i || H === !1 || p.$slider.trigger("breakpoint", [p, H]);
      }
    }, C.prototype.changeSlide = function(i, u) {
      var v, d, g, p = this, H = $(i.currentTarget);
      switch (H.is("a") && i.preventDefault(), H.is("li") || (H = H.closest("li")), g = p.slideCount % p.options.slidesToScroll != 0, v = g ? 0 : (p.slideCount - p.currentSlide) % p.options.slidesToScroll, i.data.message) {
        case "previous":
          d = v === 0 ? p.options.slidesToScroll : p.options.slidesToShow - v, p.slideCount > p.options.slidesToShow && p.slideHandler(p.currentSlide - d, !1, u);
          break;
        case "next":
          d = v === 0 ? p.options.slidesToScroll : v, p.slideCount > p.options.slidesToShow && p.slideHandler(p.currentSlide + d, !1, u);
          break;
        case "index":
          var D = i.data.index === 0 ? 0 : i.data.index || H.index() * p.options.slidesToScroll;
          p.slideHandler(p.checkNavigable(D), !1, u), H.children().trigger("focus");
          break;
        default:
          return;
      }
    }, C.prototype.checkNavigable = function(i) {
      var u, v;
      if (u = this.getNavigableIndexes(), v = 0, i > u[u.length - 1])
        i = u[u.length - 1];
      else
        for (var d in u) {
          if (i < u[d]) {
            i = v;
            break;
          }
          v = u[d];
        }
      return i;
    }, C.prototype.cleanUpEvents = function() {
      var i = this;
      i.options.dots && i.$dots !== null && ($("li", i.$dots).off("click.slick", i.changeSlide).off("mouseenter.slick", $.proxy(i.interrupt, i, !0)).off("mouseleave.slick", $.proxy(i.interrupt, i, !1)), i.options.accessibility === !0 && i.$dots.off("keydown.slick", i.keyHandler)), i.$slider.off("focus.slick blur.slick"), i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow && i.$prevArrow.off("click.slick", i.changeSlide), i.$nextArrow && i.$nextArrow.off("click.slick", i.changeSlide), i.options.accessibility === !0 && (i.$prevArrow && i.$prevArrow.off("keydown.slick", i.keyHandler), i.$nextArrow && i.$nextArrow.off("keydown.slick", i.keyHandler))), i.$list.off("touchstart.slick mousedown.slick", i.swipeHandler), i.$list.off("touchmove.slick mousemove.slick", i.swipeHandler), i.$list.off("touchend.slick mouseup.slick", i.swipeHandler), i.$list.off("touchcancel.slick mouseleave.slick", i.swipeHandler), i.$list.off("click.slick", i.clickHandler), $(document).off(i.visibilityChange, i.visibility), i.cleanUpSlideEvents(), i.options.accessibility === !0 && i.$list.off("keydown.slick", i.keyHandler), i.options.focusOnSelect === !0 && $(i.$slideTrack).children().off("click.slick", i.selectHandler), $(window).off("orientationchange.slick.slick-" + i.instanceUid, i.orientationChange), $(window).off("resize.slick.slick-" + i.instanceUid, i.resize), $("[draggable!=true]", i.$slideTrack).off("dragstart", i.preventDefault), $(window).off("load.slick.slick-" + i.instanceUid, i.setPosition);
    }, C.prototype.cleanUpSlideEvents = function() {
      var i = this;
      i.$list.off("mouseenter.slick", $.proxy(i.interrupt, i, !0)), i.$list.off("mouseleave.slick", $.proxy(i.interrupt, i, !1));
    }, C.prototype.cleanUpRows = function() {
      var i, u = this;
      u.options.rows > 1 && ((i = u.$slides.children().children()).removeAttr("style"), u.$slider.empty().append(i));
    }, C.prototype.clickHandler = function(i) {
      this.shouldClick === !1 && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }, C.prototype.destroy = function(i) {
      var u = this;
      u.autoPlayClear(), u.touchObject = {}, u.cleanUpEvents(), $(".slick-cloned", u.$slider).detach(), u.$dots && u.$dots.remove(), u.$prevArrow && u.$prevArrow.length && (u.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), u.htmlExpr.test(u.options.prevArrow) && u.$prevArrow.remove()), u.$nextArrow && u.$nextArrow.length && (u.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), u.htmlExpr.test(u.options.nextArrow) && u.$nextArrow.remove()), u.$slides && (u.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
        $(this).attr("style", $(this).data("originalStyling"));
      }), u.$slideTrack.children(this.options.slide).detach(), u.$slideTrack.detach(), u.$list.detach(), u.$slider.append(u.$slides)), u.cleanUpRows(), u.$slider.removeClass("slick-slider"), u.$slider.removeClass("slick-initialized"), u.$slider.removeClass("slick-dotted"), u.unslicked = !0, i || u.$slider.trigger("destroy", [u]);
    }, C.prototype.disableTransition = function(i) {
      var u = this, v = {};
      v[u.transitionType] = "", u.options.fade === !1 ? u.$slideTrack.css(v) : u.$slides.eq(i).css(v);
    }, C.prototype.fadeSlide = function(i, u) {
      var v = this;
      v.cssTransitions === !1 ? (v.$slides.eq(i).css({ zIndex: v.options.zIndex }), v.$slides.eq(i).animate({ opacity: 1 }, v.options.speed, v.options.easing, u)) : (v.applyTransition(i), v.$slides.eq(i).css({ opacity: 1, zIndex: v.options.zIndex }), u && setTimeout(function() {
        v.disableTransition(i), u.call();
      }, v.options.speed));
    }, C.prototype.fadeSlideOut = function(i) {
      var u = this;
      u.cssTransitions === !1 ? u.$slides.eq(i).animate({ opacity: 0, zIndex: u.options.zIndex - 2 }, u.options.speed, u.options.easing) : (u.applyTransition(i), u.$slides.eq(i).css({ opacity: 0, zIndex: u.options.zIndex - 2 }));
    }, C.prototype.filterSlides = C.prototype.slickFilter = function(i) {
      var u = this;
      i !== null && (u.$slidesCache = u.$slides, u.unload(), u.$slideTrack.children(this.options.slide).detach(), u.$slidesCache.filter(i).appendTo(u.$slideTrack), u.reinit());
    }, C.prototype.focusHandler = function() {
      var i = this;
      i.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(u) {
        u.stopImmediatePropagation();
        var v = $(this);
        setTimeout(function() {
          i.options.pauseOnFocus && (i.focussed = v.is(":focus"), i.autoPlay());
        }, 0);
      });
    }, C.prototype.getCurrent = C.prototype.slickCurrentSlide = function() {
      return this.currentSlide;
    }, C.prototype.getDotCount = function() {
      var i = this, u = 0, v = 0, d = 0;
      if (i.options.infinite === !0)
        if (i.slideCount <= i.options.slidesToShow)
          ++d;
        else
          for (; u < i.slideCount; )
            ++d, u = v + i.options.slidesToScroll, v += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
      else if (i.options.centerMode === !0)
        d = i.slideCount;
      else if (i.options.asNavFor)
        for (; u < i.slideCount; )
          ++d, u = v + i.options.slidesToScroll, v += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
      else
        d = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
      return d - 1;
    }, C.prototype.getLeft = function(i) {
      var u, v, d, g, p = this, H = 0;
      return p.slideOffset = 0, v = p.$slides.first().outerHeight(!0), p.options.infinite === !0 ? (p.slideCount > p.options.slidesToShow && (p.slideOffset = p.slideWidth * p.options.slidesToShow * -1, g = -1, p.options.vertical === !0 && p.options.centerMode === !0 && (p.options.slidesToShow === 2 ? g = -1.5 : p.options.slidesToShow === 1 && (g = -2)), H = v * p.options.slidesToShow * g), p.slideCount % p.options.slidesToScroll != 0 && i + p.options.slidesToScroll > p.slideCount && p.slideCount > p.options.slidesToShow && (i > p.slideCount ? (p.slideOffset = (p.options.slidesToShow - (i - p.slideCount)) * p.slideWidth * -1, H = (p.options.slidesToShow - (i - p.slideCount)) * v * -1) : (p.slideOffset = p.slideCount % p.options.slidesToScroll * p.slideWidth * -1, H = p.slideCount % p.options.slidesToScroll * v * -1))) : i + p.options.slidesToShow > p.slideCount && (p.slideOffset = (i + p.options.slidesToShow - p.slideCount) * p.slideWidth, H = (i + p.options.slidesToShow - p.slideCount) * v), p.slideCount <= p.options.slidesToShow && (p.slideOffset = 0, H = 0), p.options.centerMode === !0 && p.slideCount <= p.options.slidesToShow ? p.slideOffset = p.slideWidth * Math.floor(p.options.slidesToShow) / 2 - p.slideWidth * p.slideCount / 2 : p.options.centerMode === !0 && p.options.infinite === !0 ? p.slideOffset += p.slideWidth * Math.floor(p.options.slidesToShow / 2) - p.slideWidth : p.options.centerMode === !0 && (p.slideOffset = 0, p.slideOffset += p.slideWidth * Math.floor(p.options.slidesToShow / 2)), u = p.options.vertical === !1 ? i * p.slideWidth * -1 + p.slideOffset : i * v * -1 + H, p.options.variableWidth === !0 && (d = p.slideCount <= p.options.slidesToShow || p.options.infinite === !1 ? p.$slideTrack.children(".slick-slide").eq(i) : p.$slideTrack.children(".slick-slide").eq(i + p.options.slidesToShow), u = p.options.rtl === !0 ? d[0] ? -1 * (p.$slideTrack.width() - d[0].offsetLeft - d.width()) : 0 : d[0] ? -1 * d[0].offsetLeft : 0, p.options.centerMode === !0 && (d = p.slideCount <= p.options.slidesToShow || p.options.infinite === !1 ? p.$slideTrack.children(".slick-slide").eq(i) : p.$slideTrack.children(".slick-slide").eq(i + p.options.slidesToShow + 1), u = p.options.rtl === !0 ? d[0] ? -1 * (p.$slideTrack.width() - d[0].offsetLeft - d.width()) : 0 : d[0] ? -1 * d[0].offsetLeft : 0, u += (p.$list.width() - d.outerWidth()) / 2)), u;
    }, C.prototype.getOption = C.prototype.slickGetOption = function(i) {
      return this.options[i];
    }, C.prototype.getNavigableIndexes = function() {
      var i, u = this, v = 0, d = 0, g = [];
      for (u.options.infinite === !1 ? i = u.slideCount : (v = -1 * u.options.slidesToScroll, d = -1 * u.options.slidesToScroll, i = 2 * u.slideCount); v < i; )
        g.push(v), v = d + u.options.slidesToScroll, d += u.options.slidesToScroll <= u.options.slidesToShow ? u.options.slidesToScroll : u.options.slidesToShow;
      return g;
    }, C.prototype.getSlick = function() {
      return this;
    }, C.prototype.getSlideCount = function() {
      var i, u, v = this;
      return u = v.options.centerMode === !0 ? v.slideWidth * Math.floor(v.options.slidesToShow / 2) : 0, v.options.swipeToSlide === !0 ? (v.$slideTrack.find(".slick-slide").each(function(d, g) {
        if (g.offsetLeft - u + $(g).outerWidth() / 2 > -1 * v.swipeLeft)
          return i = g, !1;
      }), Math.abs($(i).attr("data-slick-index") - v.currentSlide) || 1) : v.options.slidesToScroll;
    }, C.prototype.goTo = C.prototype.slickGoTo = function(i, u) {
      this.changeSlide({ data: { message: "index", index: parseInt(i) } }, u);
    }, C.prototype.init = function(i) {
      var u = this;
      $(u.$slider).hasClass("slick-initialized") || ($(u.$slider).addClass("slick-initialized"), u.buildRows(), u.buildOut(), u.setProps(), u.startLoad(), u.loadSlider(), u.initializeEvents(), u.updateArrows(), u.updateDots(), u.checkResponsive(!0), u.focusHandler()), i && u.$slider.trigger("init", [u]), u.options.accessibility === !0 && u.initADA(), u.options.autoplay && (u.paused = !1, u.autoPlay());
    }, C.prototype.initADA = function() {
      var i = this, u = Math.ceil(i.slideCount / i.options.slidesToShow), v = i.getNavigableIndexes().filter(function(p) {
        return p >= 0 && p < i.slideCount;
      });
      i.$slides.add(i.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), i.$dots !== null && (i.$slides.not(i.$slideTrack.find(".slick-cloned")).each(function(p) {
        var H = v.indexOf(p);
        $(this).attr({ role: "tabpanel", id: "slick-slide" + i.instanceUid + p, tabindex: -1 }), H !== -1 && $(this).attr({ "aria-describedby": "slick-slide-control" + i.instanceUid + H });
      }), i.$dots.attr("role", "tablist").find("li").each(function(p) {
        var H = v[p];
        $(this).attr({ role: "presentation" }), $(this).find("button").first().attr({ role: "tab", id: "slick-slide-control" + i.instanceUid + p, "aria-controls": "slick-slide" + i.instanceUid + H, "aria-label": p + 1 + " of " + u, "aria-selected": null, tabindex: "-1" });
      }).eq(i.currentSlide).find("button").attr({ "aria-selected": "true", tabindex: "0" }).end());
      for (var d = i.currentSlide, g = d + i.options.slidesToShow; d < g; d++)
        i.$slides.eq(d).attr("tabindex", 0);
      i.activateADA();
    }, C.prototype.initArrowEvents = function() {
      var i = this;
      i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, i.changeSlide), i.options.accessibility === !0 && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)));
    }, C.prototype.initDotEvents = function() {
      var i = this;
      i.options.dots === !0 && ($("li", i.$dots).on("click.slick", { message: "index" }, i.changeSlide), i.options.accessibility === !0 && i.$dots.on("keydown.slick", i.keyHandler)), i.options.dots === !0 && i.options.pauseOnDotsHover === !0 && $("li", i.$dots).on("mouseenter.slick", $.proxy(i.interrupt, i, !0)).on("mouseleave.slick", $.proxy(i.interrupt, i, !1));
    }, C.prototype.initSlideEvents = function() {
      var i = this;
      i.options.pauseOnHover && (i.$list.on("mouseenter.slick", $.proxy(i.interrupt, i, !0)), i.$list.on("mouseleave.slick", $.proxy(i.interrupt, i, !1)));
    }, C.prototype.initializeEvents = function() {
      var i = this;
      i.initArrowEvents(), i.initDotEvents(), i.initSlideEvents(), i.$list.on("touchstart.slick mousedown.slick", { action: "start" }, i.swipeHandler), i.$list.on("touchmove.slick mousemove.slick", { action: "move" }, i.swipeHandler), i.$list.on("touchend.slick mouseup.slick", { action: "end" }, i.swipeHandler), i.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, i.swipeHandler), i.$list.on("click.slick", i.clickHandler), $(document).on(i.visibilityChange, $.proxy(i.visibility, i)), i.options.accessibility === !0 && i.$list.on("keydown.slick", i.keyHandler), i.options.focusOnSelect === !0 && $(i.$slideTrack).children().on("click.slick", i.selectHandler), $(window).on("orientationchange.slick.slick-" + i.instanceUid, $.proxy(i.orientationChange, i)), $(window).on("resize.slick.slick-" + i.instanceUid, $.proxy(i.resize, i)), $("[draggable!=true]", i.$slideTrack).on("dragstart", i.preventDefault), $(window).on("load.slick.slick-" + i.instanceUid, i.setPosition), $(i.setPosition);
    }, C.prototype.initUI = function() {
      var i = this;
      i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.show();
    }, C.prototype.keyHandler = function(i) {
      var u = this;
      i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (i.keyCode === 37 && u.options.accessibility === !0 ? u.changeSlide({ data: { message: u.options.rtl === !0 ? "next" : "previous" } }) : i.keyCode === 39 && u.options.accessibility === !0 && u.changeSlide({ data: { message: u.options.rtl === !0 ? "previous" : "next" } }));
    }, C.prototype.lazyLoad = function() {
      function i(j) {
        $("img[data-lazy]", j).each(function() {
          var M = $(this), _ = $(this).attr("data-lazy"), xe = $(this).attr("data-srcset"), z = $(this).attr("data-sizes") || g.$slider.attr("data-sizes"), Ye = document.createElement("img");
          Ye.onload = function() {
            M.animate({ opacity: 0 }, 100, function() {
              xe && (M.attr("srcset", xe), z && M.attr("sizes", z)), M.attr("src", _).animate({ opacity: 1 }, 200, function() {
                M.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
              }), g.$slider.trigger("lazyLoaded", [g, M, _]);
            });
          }, Ye.onerror = function() {
            M.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), g.$slider.trigger("lazyLoadError", [g, M, _]);
          }, Ye.src = _;
        });
      }
      var u, v, d, g = this;
      if (g.options.centerMode === !0 ? g.options.infinite === !0 ? d = (v = g.currentSlide + (g.options.slidesToShow / 2 + 1)) + g.options.slidesToShow + 2 : (v = Math.max(0, g.currentSlide - (g.options.slidesToShow / 2 + 1)), d = g.options.slidesToShow / 2 + 1 + 2 + g.currentSlide) : (v = g.options.infinite ? g.options.slidesToShow + g.currentSlide : g.currentSlide, d = Math.ceil(v + g.options.slidesToShow), g.options.fade === !0 && (v > 0 && v--, d <= g.slideCount && d++)), u = g.$slider.find(".slick-slide").slice(v, d), g.options.lazyLoad === "anticipated")
        for (var p = v - 1, H = d, D = g.$slider.find(".slick-slide"), re = 0; re < g.options.slidesToScroll; re++)
          p < 0 && (p = g.slideCount - 1), u = (u = u.add(D.eq(p))).add(D.eq(H)), p--, H++;
      i(u), g.slideCount <= g.options.slidesToShow ? i(g.$slider.find(".slick-slide")) : g.currentSlide >= g.slideCount - g.options.slidesToShow ? i(g.$slider.find(".slick-cloned").slice(0, g.options.slidesToShow)) : g.currentSlide === 0 && i(g.$slider.find(".slick-cloned").slice(-1 * g.options.slidesToShow));
    }, C.prototype.loadSlider = function() {
      var i = this;
      i.setPosition(), i.$slideTrack.css({ opacity: 1 }), i.$slider.removeClass("slick-loading"), i.initUI(), i.options.lazyLoad === "progressive" && i.progressiveLazyLoad();
    }, C.prototype.next = C.prototype.slickNext = function() {
      this.changeSlide({ data: { message: "next" } });
    }, C.prototype.orientationChange = function() {
      var i = this;
      i.checkResponsive(), i.setPosition();
    }, C.prototype.pause = C.prototype.slickPause = function() {
      var i = this;
      i.autoPlayClear(), i.paused = !0;
    }, C.prototype.play = C.prototype.slickPlay = function() {
      var i = this;
      i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1;
    }, C.prototype.postSlide = function(i) {
      var u = this;
      u.unslicked || (u.$slider.trigger("afterChange", [u, i]), u.animating = !1, u.slideCount > u.options.slidesToShow && u.setPosition(), u.swipeLeft = null, u.options.autoplay && u.autoPlay(), u.options.accessibility === !0 && (u.initADA(), u.options.focusOnChange && $(u.$slides.get(u.currentSlide)).attr("tabindex", 0).focus()));
    }, C.prototype.prev = C.prototype.slickPrev = function() {
      this.changeSlide({ data: { message: "previous" } });
    }, C.prototype.preventDefault = function(i) {
      i.preventDefault();
    }, C.prototype.progressiveLazyLoad = function(i) {
      i = i || 1;
      var u, v, d, g, p, H = this, D = $("img[data-lazy]", H.$slider);
      D.length ? (u = D.first(), v = u.attr("data-lazy"), d = u.attr("data-srcset"), g = u.attr("data-sizes") || H.$slider.attr("data-sizes"), (p = document.createElement("img")).onload = function() {
        d && (u.attr("srcset", d), g && u.attr("sizes", g)), u.attr("src", v).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), H.options.adaptiveHeight === !0 && H.setPosition(), H.$slider.trigger("lazyLoaded", [H, u, v]), H.progressiveLazyLoad();
      }, p.onerror = function() {
        i < 3 ? setTimeout(function() {
          H.progressiveLazyLoad(i + 1);
        }, 500) : (u.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), H.$slider.trigger("lazyLoadError", [H, u, v]), H.progressiveLazyLoad());
      }, p.src = v) : H.$slider.trigger("allImagesLoaded", [H]);
    }, C.prototype.refresh = function(i) {
      var u, v, d = this;
      v = d.slideCount - d.options.slidesToShow, !d.options.infinite && d.currentSlide > v && (d.currentSlide = v), d.slideCount <= d.options.slidesToShow && (d.currentSlide = 0), u = d.currentSlide, d.destroy(!0), $.extend(d, d.initials, { currentSlide: u }), d.init(), i || d.changeSlide({ data: { message: "index", index: u } }, !1);
    }, C.prototype.registerBreakpoints = function() {
      var i, u, v, d = this, g = d.options.responsive || null;
      if ($.type(g) === "array" && g.length) {
        d.respondTo = d.options.respondTo || "window";
        for (i in g)
          if (v = d.breakpoints.length - 1, g.hasOwnProperty(i)) {
            for (u = g[i].breakpoint; v >= 0; )
              d.breakpoints[v] && d.breakpoints[v] === u && d.breakpoints.splice(v, 1), v--;
            d.breakpoints.push(u), d.breakpointSettings[u] = g[i].settings;
          }
        d.breakpoints.sort(function(p, H) {
          return d.options.mobileFirst ? p - H : H - p;
        });
      }
    }, C.prototype.reinit = function() {
      var i = this;
      i.$slides = i.$slideTrack.children(i.options.slide).addClass("slick-slide"), i.slideCount = i.$slides.length, i.currentSlide >= i.slideCount && i.currentSlide !== 0 && (i.currentSlide = i.currentSlide - i.options.slidesToScroll), i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0), i.registerBreakpoints(), i.setProps(), i.setupInfinite(), i.buildArrows(), i.updateArrows(), i.initArrowEvents(), i.buildDots(), i.updateDots(), i.initDotEvents(), i.cleanUpSlideEvents(), i.initSlideEvents(), i.checkResponsive(!1, !0), i.options.focusOnSelect === !0 && $(i.$slideTrack).children().on("click.slick", i.selectHandler), i.setSlideClasses(typeof i.currentSlide == "number" ? i.currentSlide : 0), i.setPosition(), i.focusHandler(), i.paused = !i.options.autoplay, i.autoPlay(), i.$slider.trigger("reInit", [i]);
    }, C.prototype.resize = function() {
      var i = this;
      $(window).width() !== i.windowWidth && (clearTimeout(i.windowDelay), i.windowDelay = window.setTimeout(function() {
        i.windowWidth = $(window).width(), i.checkResponsive(), i.unslicked || i.setPosition();
      }, 50));
    }, C.prototype.removeSlide = C.prototype.slickRemove = function(i, u, v) {
      var d = this;
      if (i = typeof i == "boolean" ? (u = i) === !0 ? 0 : d.slideCount - 1 : u === !0 ? --i : i, d.slideCount < 1 || i < 0 || i > d.slideCount - 1)
        return !1;
      d.unload(), v === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(i).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, d.reinit();
    }, C.prototype.setCSS = function(i) {
      var u, v, d = this, g = {};
      d.options.rtl === !0 && (i = -i), u = d.positionProp == "left" ? Math.ceil(i) + "px" : "0px", v = d.positionProp == "top" ? Math.ceil(i) + "px" : "0px", g[d.positionProp] = i, d.transformsEnabled === !1 ? d.$slideTrack.css(g) : (g = {}, d.cssTransitions === !1 ? (g[d.animType] = "translate(" + u + ", " + v + ")", d.$slideTrack.css(g)) : (g[d.animType] = "translate3d(" + u + ", " + v + ", 0px)", d.$slideTrack.css(g)));
    }, C.prototype.setDimensions = function() {
      var i = this;
      i.options.vertical === !1 ? i.options.centerMode === !0 && i.$list.css({ padding: "0px " + i.options.centerPadding }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), i.options.centerMode === !0 && i.$list.css({ padding: i.options.centerPadding + " 0px" })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), i.options.vertical === !1 && i.options.variableWidth === !1 ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : i.options.variableWidth === !0 ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
      var u = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
      i.options.variableWidth === !1 && i.$slideTrack.children(".slick-slide").width(i.slideWidth - u);
    }, C.prototype.setFade = function() {
      var i, u = this;
      u.$slides.each(function(v, d) {
        i = u.slideWidth * v * -1, u.options.rtl === !0 ? $(d).css({ position: "relative", right: i, top: 0, zIndex: u.options.zIndex - 2, opacity: 0 }) : $(d).css({ position: "relative", left: i, top: 0, zIndex: u.options.zIndex - 2, opacity: 0 });
      }), u.$slides.eq(u.currentSlide).css({ zIndex: u.options.zIndex - 1, opacity: 1 });
    }, C.prototype.setHeight = function() {
      var i = this;
      if (i.options.slidesToShow === 1 && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
        var u = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.css("height", u);
      }
    }, C.prototype.setOption = C.prototype.slickSetOption = function() {
      var i, u, v, d, g, p = this, H = !1;
      if ($.type(arguments[0]) === "object" ? (v = arguments[0], H = arguments[1], g = "multiple") : $.type(arguments[0]) === "string" && (v = arguments[0], d = arguments[1], H = arguments[2], arguments[0] === "responsive" && $.type(arguments[1]) === "array" ? g = "responsive" : arguments[1] !== void 0 && (g = "single")), g === "single")
        p.options[v] = d;
      else if (g === "multiple")
        $.each(v, function(D, re) {
          p.options[D] = re;
        });
      else if (g === "responsive")
        for (u in d)
          if ($.type(p.options.responsive) !== "array")
            p.options.responsive = [d[u]];
          else {
            for (i = p.options.responsive.length - 1; i >= 0; )
              p.options.responsive[i].breakpoint === d[u].breakpoint && p.options.responsive.splice(i, 1), i--;
            p.options.responsive.push(d[u]);
          }
      H && (p.unload(), p.reinit());
    }, C.prototype.setPosition = function() {
      var i = this;
      i.setDimensions(), i.setHeight(), i.options.fade === !1 ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i]);
    }, C.prototype.setProps = function() {
      var i = this, u = document.body.style;
      i.positionProp = i.options.vertical === !0 ? "top" : "left", i.positionProp === "top" ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), u.WebkitTransition === void 0 && u.MozTransition === void 0 && u.msTransition === void 0 || i.options.useCSS === !0 && (i.cssTransitions = !0), i.options.fade && (typeof i.options.zIndex == "number" ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), u.OTransform !== void 0 && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", u.perspectiveProperty === void 0 && u.webkitPerspective === void 0 && (i.animType = !1)), u.MozTransform !== void 0 && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", u.perspectiveProperty === void 0 && u.MozPerspective === void 0 && (i.animType = !1)), u.webkitTransform !== void 0 && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", u.perspectiveProperty === void 0 && u.webkitPerspective === void 0 && (i.animType = !1)), u.msTransform !== void 0 && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", u.msTransform === void 0 && (i.animType = !1)), u.transform !== void 0 && i.animType !== !1 && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && i.animType !== null && i.animType !== !1;
    }, C.prototype.setSlideClasses = function(i) {
      var u, v, d, g, p = this;
      if (v = p.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), p.$slides.eq(i).addClass("slick-current"), p.options.centerMode === !0) {
        var H = p.options.slidesToShow % 2 == 0 ? 1 : 0;
        u = Math.floor(p.options.slidesToShow / 2), p.options.infinite === !0 && (i >= u && i <= p.slideCount - 1 - u ? p.$slides.slice(i - u + H, i + u + 1).addClass("slick-active").attr("aria-hidden", "false") : (d = p.options.slidesToShow + i, v.slice(d - u + 1 + H, d + u + 2).addClass("slick-active").attr("aria-hidden", "false")), i === 0 ? v.eq(v.length - 1 - p.options.slidesToShow).addClass("slick-center") : i === p.slideCount - 1 && v.eq(p.options.slidesToShow).addClass("slick-center")), p.$slides.eq(i).addClass("slick-center");
      } else
        i >= 0 && i <= p.slideCount - p.options.slidesToShow ? p.$slides.slice(i, i + p.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : v.length <= p.options.slidesToShow ? v.addClass("slick-active").attr("aria-hidden", "false") : (g = p.slideCount % p.options.slidesToShow, d = p.options.infinite === !0 ? p.options.slidesToShow + i : i, p.options.slidesToShow == p.options.slidesToScroll && p.slideCount - i < p.options.slidesToShow ? v.slice(d - (p.options.slidesToShow - g), d + g).addClass("slick-active").attr("aria-hidden", "false") : v.slice(d, d + p.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
      p.options.lazyLoad !== "ondemand" && p.options.lazyLoad !== "anticipated" || p.lazyLoad();
    }, C.prototype.setupInfinite = function() {
      var i, u, v, d = this;
      if (d.options.fade === !0 && (d.options.centerMode = !1), d.options.infinite === !0 && d.options.fade === !1 && (u = null, d.slideCount > d.options.slidesToShow)) {
        for (v = d.options.centerMode === !0 ? d.options.slidesToShow + 1 : d.options.slidesToShow, i = d.slideCount; i > d.slideCount - v; i -= 1)
          u = i - 1, $(d.$slides[u]).clone(!0).attr("id", "").attr("data-slick-index", u - d.slideCount).prependTo(d.$slideTrack).addClass("slick-cloned");
        for (i = 0; i < v + d.slideCount; i += 1)
          u = i, $(d.$slides[u]).clone(!0).attr("id", "").attr("data-slick-index", u + d.slideCount).appendTo(d.$slideTrack).addClass("slick-cloned");
        d.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
          $(this).attr("id", "");
        });
      }
    }, C.prototype.interrupt = function(i) {
      var u = this;
      i || u.autoPlay(), u.interrupted = i;
    }, C.prototype.selectHandler = function(i) {
      var u = this, v = $(i.target).is(".slick-slide") ? $(i.target) : $(i.target).parents(".slick-slide"), d = parseInt(v.attr("data-slick-index"));
      d || (d = 0), u.slideCount <= u.options.slidesToShow ? u.slideHandler(d, !1, !0) : u.slideHandler(d);
    }, C.prototype.slideHandler = function(i, u, v) {
      var d, g, p, H, D, re = null, j = this;
      if (u = u || !1, !(j.animating === !0 && j.options.waitForAnimate === !0 || j.options.fade === !0 && j.currentSlide === i))
        if (u === !1 && j.asNavFor(i), d = i, re = j.getLeft(d), H = j.getLeft(j.currentSlide), j.currentLeft = j.swipeLeft === null ? H : j.swipeLeft, j.options.infinite === !1 && j.options.centerMode === !1 && (i < 0 || i > j.getDotCount() * j.options.slidesToScroll))
          j.options.fade === !1 && (d = j.currentSlide, v !== !0 ? j.animateSlide(H, function() {
            j.postSlide(d);
          }) : j.postSlide(d));
        else if (j.options.infinite === !1 && j.options.centerMode === !0 && (i < 0 || i > j.slideCount - j.options.slidesToScroll))
          j.options.fade === !1 && (d = j.currentSlide, v !== !0 ? j.animateSlide(H, function() {
            j.postSlide(d);
          }) : j.postSlide(d));
        else {
          if (j.options.autoplay && clearInterval(j.autoPlayTimer), g = d < 0 ? j.slideCount % j.options.slidesToScroll != 0 ? j.slideCount - j.slideCount % j.options.slidesToScroll : j.slideCount + d : d >= j.slideCount ? j.slideCount % j.options.slidesToScroll != 0 ? 0 : d - j.slideCount : d, j.animating = !0, j.$slider.trigger("beforeChange", [j, j.currentSlide, g]), p = j.currentSlide, j.currentSlide = g, j.setSlideClasses(j.currentSlide), j.options.asNavFor && (D = (D = j.getNavTarget()).slick("getSlick")).slideCount <= D.options.slidesToShow && D.setSlideClasses(j.currentSlide), j.updateDots(), j.updateArrows(), j.options.fade === !0)
            return v !== !0 ? (j.fadeSlideOut(p), j.fadeSlide(g, function() {
              j.postSlide(g);
            })) : j.postSlide(g), void j.animateHeight();
          v !== !0 ? j.animateSlide(re, function() {
            j.postSlide(g);
          }) : j.postSlide(g);
        }
    }, C.prototype.startLoad = function() {
      var i = this;
      i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading");
    }, C.prototype.swipeDirection = function() {
      var i, u, v, d, g = this;
      return i = g.touchObject.startX - g.touchObject.curX, u = g.touchObject.startY - g.touchObject.curY, v = Math.atan2(u, i), (d = Math.round(180 * v / Math.PI)) < 0 && (d = 360 - Math.abs(d)), d <= 45 && d >= 0 || d <= 360 && d >= 315 ? g.options.rtl === !1 ? "left" : "right" : d >= 135 && d <= 225 ? g.options.rtl === !1 ? "right" : "left" : g.options.verticalSwiping === !0 ? d >= 35 && d <= 135 ? "down" : "up" : "vertical";
    }, C.prototype.swipeEnd = function(i) {
      var u, v, d = this;
      if (d.dragging = !1, d.swiping = !1, d.scrolling)
        return d.scrolling = !1, !1;
      if (d.interrupted = !1, d.shouldClick = !(d.touchObject.swipeLength > 10), d.touchObject.curX === void 0)
        return !1;
      if (d.touchObject.edgeHit === !0 && d.$slider.trigger("edge", [d, d.swipeDirection()]), d.touchObject.swipeLength >= d.touchObject.minSwipe) {
        switch (v = d.swipeDirection()) {
          case "left":
          case "down":
            u = d.options.swipeToSlide ? d.checkNavigable(d.currentSlide + d.getSlideCount()) : d.currentSlide + d.getSlideCount(), d.currentDirection = 0;
            break;
          case "right":
          case "up":
            u = d.options.swipeToSlide ? d.checkNavigable(d.currentSlide - d.getSlideCount()) : d.currentSlide - d.getSlideCount(), d.currentDirection = 1;
        }
        v != "vertical" && (d.slideHandler(u), d.touchObject = {}, d.$slider.trigger("swipe", [d, v]));
      } else
        d.touchObject.startX !== d.touchObject.curX && (d.slideHandler(d.currentSlide), d.touchObject = {});
    }, C.prototype.swipeHandler = function(i) {
      var u = this;
      if (!(u.options.swipe === !1 || "ontouchend" in document && u.options.swipe === !1 || u.options.draggable === !1 && i.type.indexOf("mouse") !== -1))
        switch (u.touchObject.fingerCount = i.originalEvent && i.originalEvent.touches !== void 0 ? i.originalEvent.touches.length : 1, u.touchObject.minSwipe = u.listWidth / u.options.touchThreshold, u.options.verticalSwiping === !0 && (u.touchObject.minSwipe = u.listHeight / u.options.touchThreshold), i.data.action) {
          case "start":
            u.swipeStart(i);
            break;
          case "move":
            u.swipeMove(i);
            break;
          case "end":
            u.swipeEnd(i);
        }
    }, C.prototype.swipeMove = function(i) {
      var u, v, d, g, p, H, D = this;
      return p = i.originalEvent !== void 0 ? i.originalEvent.touches : null, !(!D.dragging || D.scrolling || p && p.length !== 1) && (u = D.getLeft(D.currentSlide), D.touchObject.curX = p !== void 0 ? p[0].pageX : i.clientX, D.touchObject.curY = p !== void 0 ? p[0].pageY : i.clientY, D.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(D.touchObject.curX - D.touchObject.startX, 2))), H = Math.round(Math.sqrt(Math.pow(D.touchObject.curY - D.touchObject.startY, 2))), !D.options.verticalSwiping && !D.swiping && H > 4 ? (D.scrolling = !0, !1) : (D.options.verticalSwiping === !0 && (D.touchObject.swipeLength = H), v = D.swipeDirection(), i.originalEvent !== void 0 && D.touchObject.swipeLength > 4 && (D.swiping = !0, i.preventDefault()), g = (D.options.rtl === !1 ? 1 : -1) * (D.touchObject.curX > D.touchObject.startX ? 1 : -1), D.options.verticalSwiping === !0 && (g = D.touchObject.curY > D.touchObject.startY ? 1 : -1), d = D.touchObject.swipeLength, D.touchObject.edgeHit = !1, D.options.infinite === !1 && (D.currentSlide === 0 && v === "right" || D.currentSlide >= D.getDotCount() && v === "left") && (d = D.touchObject.swipeLength * D.options.edgeFriction, D.touchObject.edgeHit = !0), D.options.vertical === !1 ? D.swipeLeft = u + d * g : D.swipeLeft = u + d * (D.$list.height() / D.listWidth) * g, D.options.verticalSwiping === !0 && (D.swipeLeft = u + d * g), D.options.fade !== !0 && D.options.touchMove !== !1 && (D.animating === !0 ? (D.swipeLeft = null, !1) : void D.setCSS(D.swipeLeft))));
    }, C.prototype.swipeStart = function(i) {
      var u, v = this;
      if (v.interrupted = !0, v.touchObject.fingerCount !== 1 || v.slideCount <= v.options.slidesToShow)
        return v.touchObject = {}, !1;
      i.originalEvent !== void 0 && i.originalEvent.touches !== void 0 && (u = i.originalEvent.touches[0]), v.touchObject.startX = v.touchObject.curX = u !== void 0 ? u.pageX : i.clientX, v.touchObject.startY = v.touchObject.curY = u !== void 0 ? u.pageY : i.clientY, v.dragging = !0;
    }, C.prototype.unfilterSlides = C.prototype.slickUnfilter = function() {
      var i = this;
      i.$slidesCache !== null && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit());
    }, C.prototype.unload = function() {
      var i = this;
      $(".slick-cloned", i.$slider).remove(), i.$dots && i.$dots.remove(), i.$prevArrow && i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove(), i.$nextArrow && i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove(), i.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
    }, C.prototype.unslick = function(i) {
      var u = this;
      u.$slider.trigger("unslick", [u, i]), u.destroy();
    }, C.prototype.updateArrows = function() {
      var i = this;
      Math.floor(i.options.slidesToShow / 2), i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.currentSlide === 0 ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (i.currentSlide >= i.slideCount - i.options.slidesToShow && i.options.centerMode === !1 || i.currentSlide >= i.slideCount - 1 && i.options.centerMode === !0) && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
    }, C.prototype.updateDots = function() {
      var i = this;
      i.$dots !== null && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"));
    }, C.prototype.visibility = function() {
      var i = this;
      i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1);
    }, $.fn.slick = function() {
      var i, u, v = this, d = arguments[0], g = Array.prototype.slice.call(arguments, 1), p = v.length;
      for (i = 0; i < p; i++)
        if (typeof d == "object" || d === void 0 ? v[i].slick = new C(v[i], d) : u = v[i].slick[d].apply(v[i].slick, g), u !== void 0)
          return u;
      return v;
    };
  });
})(Jn);
const Zn = {
  /**
   * @description Enables tabbing and arrow key navigation
   * @default true
   */
  accessibility: {
    type: Boolean,
    default: !0
  },
  /**
   * @description Enables adaptive height for single slide horizontal carousels.
   * @default false
   */
  adaptiveHeight: {
    type: Boolean,
    default: !1
  },
  /**
   * @description Enables Autoplay
   * @default false
   */
  autoplay: {
    type: Boolean,
    default: !1
  },
  /**
   * @description Autoplay Speed in milliseconds
   * @default 3000
   */
  autoplaySpeed: {
    type: Number,
    default: 3e3
  },
  /**
   * @description Enable Prev/Next Arrows
   * @default true
   */
  arrows: {
    type: Boolean,
    default: !0
  },
  /**
   * @description Set the slider to be the navigation of other slider
   * @default null
   */
  asNavFor: {
    type: [Object, String],
    default: null
  },
  // /**
  //  * @description  Change where the navigation arrows are attached (Selector, htmlString, Array, Element, jQuery object)
  //  * `false` will prevent arrows from being created/appended
  //  * @default $(element)
  //  */
  // appendArrows: {
  //   type: [Object, Array, String, Boolean] as PropType<
  //     Element | Element[] | JQuery | string | boolean
  //   >,
  //   default: null,
  // },
  // /**
  //  * @description Change where the navigation dots are attached (Selector, htmlString, Array, Element, jQuery object)
  //  * @default $(element)
  //  */
  // appendDots: {
  //   type: [String] as PropType<Element | Element[] | JQuery | string>,
  //   default: "null",
  // },
  /**
   * @description Allows you to select a node or customize the HTML for the "Previous" arrow.
   * @default '<button type="button" class="slick-prev">Previous</button>
   */
  prevArrow: {
    type: [Object, String],
    default: '<button type="button" class="slick-prev">Previous</button>'
  },
  /**
   * @description Allows you to select a node or customize the HTML for the "Next" arrow.
   * @default '<button type="button" class="slick-next">Next</button>'
   */
  nextArrow: {
    type: [Object, String],
    default: '<button type="button" class="slick-next">Next</button>'
  },
  /**
   * @description Enables centered view with partial prev/next slides. Use with odd numbered slidesToShow counts.
   * @default false
   */
  centerMode: {
    type: Boolean,
    default: !1
  },
  /**
   * @description Side padding when in center mode (px or %)
   * @default '50px'
   */
  centerPadding: {
    type: String,
    default: "50px",
    validator(K) {
      return /px|%/.test(K);
    }
  },
  /**
   * @description CSS3 Animation Easing
   * @default 'ease'
   */
  cssEase: {
    type: String,
    default: "ease"
  },
  /**
   * @description Custom paging templates. See source for use example.
   * @default n/a
   */
  customPaging: {
    type: Function,
    default: () => {
    }
  },
  /**
   * @description Show dot indicators
   * @default false
   */
  dots: {
    type: Boolean,
    default: !1
  },
  /**
   * @description Class for slide indicator dots container
   * @default 'slick-dots'
   */
  dotsClass: {
    type: String,
    default: "slick-dots"
  },
  /**
   * @description Enable mouse dragging
   * @default false
   */
  draggable: {
    type: Boolean,
    default: !1
  },
  /**
   * @description Enable fade
   * @default false
   */
  fade: {
    type: Boolean,
    default: !1
  },
  /**
   * @description Enable focus on selected element (click)
   * @default false
   */
  focusOnSelect: {
    type: Boolean,
    default: !1
  },
  /**
   * @description Add easing for jQuery animate. Use with easing libraries or default easing methods
   * @default 'linear'
   */
  easing: {
    type: String,
    default: "linear"
  },
  /**
   * @description Resistance when swiping edges of non-infinite carousels
   * @default 0.15
   */
  edgeFriction: {
    type: Number,
    default: 0.15
  },
  /**
   * @description Infinite loop sliding
   * @default true
   */
  infinite: {
    type: Boolean,
    default: !0
  },
  /**
   * @description Slide to start on
   * @default 0
   */
  initialSlide: {
    type: Number,
    default: 0
  },
  /**
   * @description Set lazy loading technique. Accepts 'ondemand' or 'progressive'
   * @default 'ondemand'
   */
  lazyLoad: {
    type: String,
    default: "ondemand",
    validator(K) {
      return ["ondemand", "progressive"].includes(K);
    }
  },
  /**
   * @description Responsive settings use mobile first calculation
   * @default false
   */
  mobileFirst: {
    type: Boolean,
    default: !1
  },
  /**
   * @description Pause Autoplay On Focus
   * @default true
   */
  pauseOnFocus: {
    type: Boolean,
    default: !0
  },
  /**
   * @description Pause Autoplay On Hover
   * @default false
   */
  pauseOnHover: {
    type: Boolean,
    default: !1
  },
  /**
   * @description Pause Autoplay when a dot is hovered
   * @default false
   */
  pauseOnDotsHover: {
    type: Boolean,
    default: !1
  },
  /**
   * @description Width that responsive object responds to. Can be 'window', 'slider' or 'min' (the smaller of the two)
   * @default 'window'
   */
  respondTo: {
    type: String,
    default: "window",
    validator(K) {
      return ["window", "slider", "min"].includes(K);
    }
  },
  /**
   * @description Object containing breakpoints and settings objects (see demo). Enables settings sets at given screen width. Set settings to "unslick" instead of an object to disable slick at a given breakpoint.
   * @default null
   */
  responsive: {
    type: [Object],
    default: null
  },
  /**
   * @description Setting this to more than 1 initializes grid mode. Use slidesPerRow to set how many slides should be in each row.
   * @default 1
   */
  rows: {
    type: Number,
    default: 1
  },
  /**
   * @description Element query to use as slide
   * @default ''
   */
  slide: {
    type: [String, Object],
    default: ""
  },
  /**
   * @description With grid mode intialized via the rows option, this sets how many slides are in each grid row. dver
   * @default 1
   */
  slidesPerRow: {
    type: Number,
    default: 1
  },
  /**
   * @description # of slides to show
   * @default 1
   */
  slidesToShow: {
    type: Number,
    default: 1
  },
  /**
   * @description # of slides to scroll
   * @default 1
   */
  slidesToScroll: {
    type: Number,
    default: 1
  },
  /**
   * @description Slide/Fade animation speed
   * @default 300
   */
  speed: {
    type: Number,
    default: 300
  },
  /**
   * @description Enable swiping
   * @default true
   */
  swipe: {
    type: Boolean,
    default: !0
  },
  /**
   * @description Allow users to drag or swipe directly to a slide irrespective of slidesToScroll
   * @default false
   */
  swipeToSlide: {
    type: Boolean,
    default: !1
  },
  /**
   * @description Enable slide motion with touch
   * @default true
   */
  touchMove: {
    type: Boolean,
    default: !0
  },
  /**
   * @description To advance slides, the user must swipe a length of (1/touchThreshold) * the width of the slider
   * @default 5
   */
  touchThreshold: {
    type: Number,
    default: 5
  },
  /**
   * @description Enable/Disable CSS Transitions
   * @default true
   */
  useCSS: {
    type: Boolean,
    default: !0
  },
  /**
   * @description Enable/Disable CSS Transforms
   * @default true
   */
  useTransform: {
    type: Boolean,
    default: !0
  },
  /**
   * @description Variable width slides
   * @default false
   */
  variableWidth: {
    type: Boolean,
    default: !1
  },
  /**
   * @description Vertical slide mode
   * @default false
   */
  vertical: {
    type: Boolean,
    default: !1
  },
  /**
   * @description Vertical swipe mode
   * @default false
   */
  verticalSwiping: {
    type: Boolean,
    default: !1
  },
  /**
   * @description Change the slider's direction to become right-to-left
   * @default false
   */
  rtl: {
    type: Boolean,
    default: !1
  },
  /**
   * @description Ignores requests to advance the slide while animating
   * @default true
   */
  waitForAnimate: {
    type: Boolean,
    default: !0
  },
  /**
   * @description Set the zIndex values for slides, useful for IE9 and lower
   * @default 1000
   */
  zIndex: {
    type: Number,
    default: 1e3
  }
}, er = { class: "vue-slick__carousel" };
var mt = /* @__PURE__ */ ((K) => (K.SLICK_EVENTS_INIT = "init", K.SLICK_EVENTS_REINIT = "reInit", K.SLICK_EVENTS_DESTROY = "destroy", K.SLICK_EVENTS_SET_POSITION = "setPosition", K.SLICK_EVENTS_AFTER_CHANGE = "afterChange", K.SLICK_EVENTS_BEFORE_CHANGE = "beforeChange", K.SLICK_EVENTS_BREAKPOINT = "breakpoint", K.SLICK_EVENTS_EDGE = "edge", K.SLICK_EVENTS_SWIPE = "swipe", K.SLICK_EVENTS_LAZY_LOADED = "lazyLoaded", K.SLICK_EVENTS_LAZY_LOAD_ERROR = "lazyLoadError", K))(mt || {});
const tr = /* @__PURE__ */ Bn({
  __name: "VueSlickCarousel",
  props: Zn,
  setup(K, { emit: W }) {
    const $ = K;
    return Fn(() => {
      const C = Qn(".vue-slick__carousel").slick($);
      Object.keys(mt).forEach((i) => {
        C.on(mt[i], (...u) => {
          W(mt[i], u);
        });
      });
    }), (C, i) => (Un(), Xn("div", er, [
      Vn(C.$slots, "default")
    ]));
  }
});
function ir(K) {
  K.component("VueSlickCarousel", tr);
}
const rr = {
  install: ir
};
export {
  tr as VueSlickCarousel,
  rr as default,
  ir as install
};
