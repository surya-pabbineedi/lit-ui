/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ae = globalThis, _e = ae.ShadowRoot && (ae.ShadyCSS === void 0 || ae.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ae = Symbol(), Ie = /* @__PURE__ */ new WeakMap();
let tt = class {
  constructor(e, t, i) {
    if (this._$cssResult$ = !0, i !== Ae) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (_e && e === void 0) {
      const i = t !== void 0 && t.length === 1;
      i && (e = Ie.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && Ie.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const ut = (n) => new tt(typeof n == "string" ? n : n + "", void 0, Ae), V = (n, ...e) => {
  const t = n.length === 1 ? n[0] : e.reduce((i, o, r) => i + ((s) => {
    if (s._$cssResult$ === !0) return s.cssText;
    if (typeof s == "number") return s;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + s + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + n[r + 1], n[0]);
  return new tt(t, n, Ae);
}, ht = (n, e) => {
  if (_e) n.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const i = document.createElement("style"), o = ae.litNonce;
    o !== void 0 && i.setAttribute("nonce", o), i.textContent = t.cssText, n.appendChild(i);
  }
}, Se = _e ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const i of e.cssRules) t += i.cssText;
  return ut(t);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: mt, defineProperty: gt, getOwnPropertyDescriptor: bt, getOwnPropertyNames: pt, getOwnPropertySymbols: ft, getPrototypeOf: wt } = Object, B = globalThis, Ye = B.trustedTypes, xt = Ye ? Ye.emptyScript : "", me = B.reactiveElementPolyfillSupport, X = (n, e) => n, le = { toAttribute(n, e) {
  switch (e) {
    case Boolean:
      n = n ? xt : null;
      break;
    case Object:
    case Array:
      n = n == null ? n : JSON.stringify(n);
  }
  return n;
}, fromAttribute(n, e) {
  let t = n;
  switch (e) {
    case Boolean:
      t = n !== null;
      break;
    case Number:
      t = n === null ? null : Number(n);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(n);
      } catch {
        t = null;
      }
  }
  return t;
} }, Me = (n, e) => !mt(n, e), Te = { attribute: !0, type: String, converter: le, reflect: !1, useDefault: !1, hasChanged: Me };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), B.litPropertyMetadata ?? (B.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let G = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Te) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const i = Symbol(), o = this.getPropertyDescriptor(e, i, t);
      o !== void 0 && gt(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, i) {
    const { get: o, set: r } = bt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(s) {
      this[t] = s;
    } };
    return { get: o, set(s) {
      const l = o == null ? void 0 : o.call(this);
      r == null || r.call(this, s), this.requestUpdate(e, l, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Te;
  }
  static _$Ei() {
    if (this.hasOwnProperty(X("elementProperties"))) return;
    const e = wt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(X("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(X("properties"))) {
      const t = this.properties, i = [...pt(t), ...ft(t)];
      for (const o of i) this.createProperty(o, t[o]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [i, o] of t) this.elementProperties.set(i, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, i] of this.elementProperties) {
      const o = this._$Eu(t, i);
      o !== void 0 && this._$Eh.set(o, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const o of i) t.unshift(Se(o));
    } else e !== void 0 && t.push(Se(e));
    return t;
  }
  static _$Eu(e, t) {
    const i = t.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var e;
    this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (e = this.constructor.l) == null || e.forEach((t) => t(this));
  }
  addController(e) {
    var t;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(e), this.renderRoot !== void 0 && this.isConnected && ((t = e.hostConnected) == null || t.call(e));
  }
  removeController(e) {
    var t;
    (t = this._$EO) == null || t.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
    for (const i of t.keys()) this.hasOwnProperty(i) && (e.set(i, this[i]), delete this[i]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return ht(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((t) => {
      var i;
      return (i = t.hostConnected) == null ? void 0 : i.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((t) => {
      var i;
      return (i = t.hostDisconnected) == null ? void 0 : i.call(t);
    });
  }
  attributeChangedCallback(e, t, i) {
    this._$AK(e, i);
  }
  _$ET(e, t) {
    var r;
    const i = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, i);
    if (o !== void 0 && i.reflect === !0) {
      const s = (((r = i.converter) == null ? void 0 : r.toAttribute) !== void 0 ? i.converter : le).toAttribute(t, i.type);
      this._$Em = e, s == null ? this.removeAttribute(o) : this.setAttribute(o, s), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var r, s;
    const i = this.constructor, o = i._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const l = i.getPropertyOptions(o), c = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((r = l.converter) == null ? void 0 : r.fromAttribute) !== void 0 ? l.converter : le;
      this._$Em = o;
      const d = c.fromAttribute(t, l.type);
      this[o] = d ?? ((s = this._$Ej) == null ? void 0 : s.get(o)) ?? d, this._$Em = null;
    }
  }
  requestUpdate(e, t, i) {
    var o;
    if (e !== void 0) {
      const r = this.constructor, s = this[e];
      if (i ?? (i = r.getPropertyOptions(e)), !((i.hasChanged ?? Me)(s, t) || i.useDefault && i.reflect && s === ((o = this._$Ej) == null ? void 0 : o.get(e)) && !this.hasAttribute(r._$Eu(e, i)))) return;
      this.C(e, t, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: i, reflect: o, wrapped: r }, s) {
    i && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, s ?? t ?? this[e]), r !== !0 || s !== void 0) || (this._$AL.has(e) || (this.hasUpdated || i || (t = void 0), this._$AL.set(e, t)), o === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (t) {
      Promise.reject(t);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var i;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [r, s] of this._$Ep) this[r] = s;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [r, s] of o) {
        const { wrapped: l } = s, c = this[r];
        l !== !0 || this._$AL.has(r) || c === void 0 || this.C(r, void 0, s, c);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (i = this._$EO) == null || i.forEach((o) => {
        var r;
        return (r = o.hostUpdate) == null ? void 0 : r.call(o);
      }), this.update(t)) : this._$EM();
    } catch (o) {
      throw e = !1, this._$EM(), o;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((i) => {
      var o;
      return (o = i.hostUpdated) == null ? void 0 : o.call(i);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((t) => this._$ET(t, this[t]))), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
G.elementStyles = [], G.shadowRootOptions = { mode: "open" }, G[X("elementProperties")] = /* @__PURE__ */ new Map(), G[X("finalized")] = /* @__PURE__ */ new Map(), me == null || me({ ReactiveElement: G }), (B.reactiveElementVersions ?? (B.reactiveElementVersions = [])).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $ = globalThis, ce = $.trustedTypes, qe = ce ? ce.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, it = "$lit$", H = `lit$${Math.random().toFixed(9).slice(2)}$`, nt = "?" + H, yt = `<${nt}>`, K = document, ee = () => K.createComment(""), te = (n) => n === null || typeof n != "object" && typeof n != "function", De = Array.isArray, vt = (n) => De(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", ge = `[ 	
\f\r]`, Z = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Fe = /-->/g, Ve = />/g, J = RegExp(`>|${ge}(?:([^\\s"'>=/]+)(${ge}*=${ge}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Oe = /'/g, He = /"/g, ot = /^(?:script|style|textarea|title)$/i, _t = (n) => (e, ...t) => ({ _$litType$: n, strings: e, values: t }), p = _t(1), I = Symbol.for("lit-noChange"), h = Symbol.for("lit-nothing"), Be = /* @__PURE__ */ new WeakMap(), R = K.createTreeWalker(K, 129);
function st(n, e) {
  if (!De(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return qe !== void 0 ? qe.createHTML(e) : e;
}
const At = (n, e) => {
  const t = n.length - 1, i = [];
  let o, r = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", s = Z;
  for (let l = 0; l < t; l++) {
    const c = n[l];
    let d, y, w = -1, Y = 0;
    for (; Y < c.length && (s.lastIndex = Y, y = s.exec(c), y !== null); ) Y = s.lastIndex, s === Z ? y[1] === "!--" ? s = Fe : y[1] !== void 0 ? s = Ve : y[2] !== void 0 ? (ot.test(y[2]) && (o = RegExp("</" + y[2], "g")), s = J) : y[3] !== void 0 && (s = J) : s === J ? y[0] === ">" ? (s = o ?? Z, w = -1) : y[1] === void 0 ? w = -2 : (w = s.lastIndex - y[2].length, d = y[1], s = y[3] === void 0 ? J : y[3] === '"' ? He : Oe) : s === He || s === Oe ? s = J : s === Fe || s === Ve ? s = Z : (s = J, o = void 0);
    const O = s === J && n[l + 1].startsWith("/>") ? " " : "";
    r += s === Z ? c + yt : w >= 0 ? (i.push(d), c.slice(0, w) + it + c.slice(w) + H + O) : c + H + (w === -2 ? l : O);
  }
  return [st(n, r + (n[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class ie {
  constructor({ strings: e, _$litType$: t }, i) {
    let o;
    this.parts = [];
    let r = 0, s = 0;
    const l = e.length - 1, c = this.parts, [d, y] = At(e, t);
    if (this.el = ie.createElement(d, i), R.currentNode = this.el.content, t === 2 || t === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (o = R.nextNode()) !== null && c.length < l; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const w of o.getAttributeNames()) if (w.endsWith(it)) {
          const Y = y[s++], O = o.getAttribute(w).split(H), re = /([.?@])?(.*)/.exec(Y);
          c.push({ type: 1, index: r, name: re[2], strings: O, ctor: re[1] === "." ? Dt : re[1] === "?" ? Ct : re[1] === "@" ? Et : he }), o.removeAttribute(w);
        } else w.startsWith(H) && (c.push({ type: 6, index: r }), o.removeAttribute(w));
        if (ot.test(o.tagName)) {
          const w = o.textContent.split(H), Y = w.length - 1;
          if (Y > 0) {
            o.textContent = ce ? ce.emptyScript : "";
            for (let O = 0; O < Y; O++) o.append(w[O], ee()), R.nextNode(), c.push({ type: 2, index: ++r });
            o.append(w[Y], ee());
          }
        }
      } else if (o.nodeType === 8) if (o.data === nt) c.push({ type: 2, index: r });
      else {
        let w = -1;
        for (; (w = o.data.indexOf(H, w + 1)) !== -1; ) c.push({ type: 7, index: r }), w += H.length - 1;
      }
      r++;
    }
  }
  static createElement(e, t) {
    const i = K.createElement("template");
    return i.innerHTML = e, i;
  }
}
function N(n, e, t = n, i) {
  var s, l;
  if (e === I) return e;
  let o = i !== void 0 ? (s = t._$Co) == null ? void 0 : s[i] : t._$Cl;
  const r = te(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== r && ((l = o == null ? void 0 : o._$AO) == null || l.call(o, !1), r === void 0 ? o = void 0 : (o = new r(n), o._$AT(n, t, i)), i !== void 0 ? (t._$Co ?? (t._$Co = []))[i] = o : t._$Cl = o), o !== void 0 && (e = N(n, o._$AS(n, e.values), o, i)), e;
}
class Mt {
  constructor(e, t) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: t }, parts: i } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? K).importNode(t, !0);
    R.currentNode = o;
    let r = R.nextNode(), s = 0, l = 0, c = i[0];
    for (; c !== void 0; ) {
      if (s === c.index) {
        let d;
        c.type === 2 ? d = new ne(r, r.nextSibling, this, e) : c.type === 1 ? d = new c.ctor(r, c.name, c.strings, this, e) : c.type === 6 && (d = new kt(r, this, e)), this._$AV.push(d), c = i[++l];
      }
      s !== (c == null ? void 0 : c.index) && (r = R.nextNode(), s++);
    }
    return R.currentNode = K, o;
  }
  p(e) {
    let t = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, t), t += i.strings.length - 2) : i._$AI(e[t])), t++;
  }
}
class ne {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, i, o) {
    this.type = 2, this._$AH = h, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = i, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = t.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    e = N(this, e, t), te(e) ? e === h || e == null || e === "" ? (this._$AH !== h && this._$AR(), this._$AH = h) : e !== this._$AH && e !== I && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : vt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== h && te(this._$AH) ? this._$AA.nextSibling.data = e : this.T(K.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var r;
    const { values: t, _$litType$: i } = e, o = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = ie.createElement(st(i.h, i.h[0]), this.options)), i);
    if (((r = this._$AH) == null ? void 0 : r._$AD) === o) this._$AH.p(t);
    else {
      const s = new Mt(o, this), l = s.u(this.options);
      s.p(t), this.T(l), this._$AH = s;
    }
  }
  _$AC(e) {
    let t = Be.get(e.strings);
    return t === void 0 && Be.set(e.strings, t = new ie(e)), t;
  }
  k(e) {
    De(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let i, o = 0;
    for (const r of e) o === t.length ? t.push(i = new ne(this.O(ee()), this.O(ee()), this, this.options)) : i = t[o], i._$AI(r), o++;
    o < t.length && (this._$AR(i && i._$AB.nextSibling, o), t.length = o);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, t); e !== this._$AB; ) {
      const o = e.nextSibling;
      e.remove(), e = o;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class he {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, i, o, r) {
    this.type = 1, this._$AH = h, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = r, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = h;
  }
  _$AI(e, t = this, i, o) {
    const r = this.strings;
    let s = !1;
    if (r === void 0) e = N(this, e, t, 0), s = !te(e) || e !== this._$AH && e !== I, s && (this._$AH = e);
    else {
      const l = e;
      let c, d;
      for (e = r[0], c = 0; c < r.length - 1; c++) d = N(this, l[i + c], t, c), d === I && (d = this._$AH[c]), s || (s = !te(d) || d !== this._$AH[c]), d === h ? e = h : e !== h && (e += (d ?? "") + r[c + 1]), this._$AH[c] = d;
    }
    s && !o && this.j(e);
  }
  j(e) {
    e === h ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Dt extends he {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === h ? void 0 : e;
  }
}
class Ct extends he {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== h);
  }
}
class Et extends he {
  constructor(e, t, i, o, r) {
    super(e, t, i, o, r), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = N(this, e, t, 0) ?? h) === I) return;
    const i = this._$AH, o = e === h && i !== h || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, r = e !== h && (i === h || o);
    o && this.element.removeEventListener(this.name, this, i), r && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class kt {
  constructor(e, t, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    N(this, e);
  }
}
const be = $.litHtmlPolyfillSupport;
be == null || be(ie, ne), ($.litHtmlVersions ?? ($.litHtmlVersions = [])).push("3.3.1");
const zt = (n, e, t) => {
  const i = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = i._$litPart$;
  if (o === void 0) {
    const r = (t == null ? void 0 : t.renderBefore) ?? null;
    i._$litPart$ = o = new ne(e.insertBefore(ee(), r), r, void 0, t ?? {});
  }
  return o._$AI(n), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const U = globalThis;
let F = class extends G {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t;
    const e = super.createRenderRoot();
    return (t = this.renderOptions).renderBefore ?? (t.renderBefore = e.firstChild), e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = zt(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) == null || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) == null || e.setConnected(!1);
  }
  render() {
    return I;
  }
};
var et;
F._$litElement$ = !0, F.finalized = !0, (et = U.litElementHydrateSupport) == null || et.call(U, { LitElement: F });
const pe = U.litElementPolyfillSupport;
pe == null || pe({ LitElement: F });
(U.litElementVersions ?? (U.litElementVersions = [])).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const It = { attribute: !0, type: String, converter: le, reflect: !1, hasChanged: Me }, St = (n = It, e, t) => {
  const { kind: i, metadata: o } = t;
  let r = globalThis.litPropertyMetadata.get(o);
  if (r === void 0 && globalThis.litPropertyMetadata.set(o, r = /* @__PURE__ */ new Map()), i === "setter" && ((n = Object.create(n)).wrapped = !0), r.set(t.name, n), i === "accessor") {
    const { name: s } = t;
    return { set(l) {
      const c = e.get.call(this);
      e.set.call(this, l), this.requestUpdate(s, c, n);
    }, init(l) {
      return l !== void 0 && this.C(s, void 0, n, l), l;
    } };
  }
  if (i === "setter") {
    const { name: s } = t;
    return function(l) {
      const c = this[s];
      e.call(this, l), this.requestUpdate(s, c, n);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function a(n) {
  return (e, t) => typeof t == "object" ? St(n, e, t) : ((i, o, r) => {
    const s = o.hasOwnProperty(r);
    return o.constructor.createProperty(r, i), s ? Object.getOwnPropertyDescriptor(o, r) : void 0;
  })(n, e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function v(n) {
  return a({ ...n, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Yt = (n, e, t) => (t.configurable = !0, t.enumerable = !0, Reflect.decorate && typeof e != "object" && Object.defineProperty(n, e, t), t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Ce(n, e) {
  return (t, i, o) => {
    const r = (s) => {
      var l;
      return ((l = s.renderRoot) == null ? void 0 : l.querySelector(n)) ?? null;
    };
    return Yt(t, i, { get() {
      return r(this);
    } });
  };
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const T = (n) => n ?? h;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const L = { ATTRIBUTE: 1, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4 }, Tt = (n) => (...e) => ({ _$litDirective$: n, values: e });
class qt {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, t, i) {
    this._$Ct = e, this._$AM = t, this._$Ci = i;
  }
  _$AS(e, t) {
    return this.update(e, t);
  }
  update(e, t) {
    return this.render(...t);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ft = (n) => n.strings === void 0, Vt = {}, Ot = (n, e = Vt) => n._$AH = e;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Pe = Tt(class extends qt {
  constructor(n) {
    if (super(n), n.type !== L.PROPERTY && n.type !== L.ATTRIBUTE && n.type !== L.BOOLEAN_ATTRIBUTE) throw Error("The `live` directive is not allowed on child or event bindings");
    if (!Ft(n)) throw Error("`live` bindings can only contain a single expression");
  }
  render(n) {
    return n;
  }
  update(n, [e]) {
    if (e === I || e === h) return e;
    const t = n.element, i = n.name;
    if (n.type === L.PROPERTY) {
      if (e === t[i]) return I;
    } else if (n.type === L.BOOLEAN_ATTRIBUTE) {
      if (!!e === t.hasAttribute(i)) return I;
    } else if (n.type === L.ATTRIBUTE && t.getAttribute(i) === e + "") return I;
    return Ot(n), e;
  }
}), oe = V`
  :host {
    /* Colors - Blue */
    --blue-100: rgb(224, 239, 255);
    --blue-200: rgb(173, 212, 255);
    --blue-300: rgb(122, 185, 255);
    --blue-400: rgb(71, 158, 255);
    --blue-500: rgb(20, 131, 255);
    --blue-600: rgb(0, 106, 224);
    --blue-700: rgb(0, 82, 173);
    --blue-800: rgb(0, 58, 122);
    --blue-900: rgb(0, 34, 71);

    /* Colors - Light Blue */
    --lightblue-100: rgb(234, 249, 255);
    --lightblue-200: rgb(184, 234, 254);
    --lightblue-300: rgb(134, 219, 253);
    --lightblue-400: rgb(84, 205, 252);
    --lightblue-500: rgb(34, 190, 251);
    --lightblue-600: rgb(4, 166, 230);
    --lightblue-700: rgb(3, 130, 180);
    --lightblue-800: rgb(2, 94, 130);
    --lightblue-900: rgb(1, 58, 80);

    /* Colors - Green */
    --green-100: rgb(206, 249, 240);
    --green-200: rgb(161, 243, 226);
    --green-300: rgb(116, 237, 212);
    --green-400: rgb(71, 231, 198);
    --green-500: rgb(29, 222, 182);
    --green-600: rgb(23, 177, 145);
    --green-700: rgb(17, 132, 108);
    --green-800: rgb(11, 87, 71);
    --green-900: rgb(5, 42, 34);

    /* Colors - Orange */
    --orange-100: rgb(255, 244, 224);
    --orange-200: rgb(255, 225, 173);
    --orange-300: rgb(255, 206, 122);
    --orange-400: rgb(255, 187, 71);
    --orange-500: rgb(255, 168, 20);
    --orange-600: rgb(224, 141, 0);
    --orange-700: rgb(173, 109, 0);
    --orange-800: rgb(122, 77, 0);
    --orange-900: rgb(71, 45, 0);

    /* Colors - Red */
    --red-100: rgb(255, 230, 224);
    --red-200: rgb(255, 190, 173);
    --red-300: rgb(255, 150, 122);
    --red-400: rgb(255, 109, 71);
    --red-500: rgb(255, 69, 20);
    --red-600: rgb(224, 47, 0);
    --red-700: rgb(173, 36, 0);
    --red-800: rgb(122, 25, 0);
    --red-900: rgb(71, 15, 0);

    /* Colors - Purple */
    --purple-100: rgb(255, 255, 255);
    --purple-200: rgb(239, 234, 252);
    --purple-300: rgb(205, 190, 245);
    --purple-400: rgb(172, 145, 239);
    --purple-500: rgb(138, 101, 232);
    --purple-600: rgb(104, 57, 225);
    --purple-700: rgb(78, 30, 201);
    --purple-800: rgb(61, 23, 157);
    --purple-900: rgb(44, 17, 112);

    /* Colors - Grey */
    --grey-050: rgb(235, 237, 242);
    --grey-100: rgb(205, 210, 221);
    --grey-150: rgb(190, 197, 211);
    --grey-200: rgb(175, 183, 200);
    --grey-250: rgb(160, 170, 190);
    --grey-300: rgb(144, 156, 180);
    --grey-350: rgb(129, 143, 169);
    --grey-350-rgb: 129, 143, 169;
    --grey-400: rgb(114, 129, 159);
    --grey-450: rgb(100, 116, 147);
    --grey-500: rgb(90, 104, 132);
    --grey-550: rgb(80, 92, 117);
    --grey-550-rgb: 80, 92, 117;
    --grey-600: rgb(69, 80, 102);
    --grey-650: rgb(59, 68, 87);
    --grey-650-rgb: 59, 68, 87;
    --grey-700: rgb(49, 56, 71);
    --grey-725: rgb(43, 50, 64);
    --grey-750: rgb(38, 44, 56);
    --grey-775: rgb(33, 38, 49);
    --grey-800: rgb(28, 32, 41);
    --grey-825: rgb(23, 26, 33);
    --grey-850: rgb(18, 20, 26);
    --grey-875: rgb(12, 14, 18);
    --grey-900: rgb(7, 8, 11);

    /* Colors - Base */
    --white: rgb(255, 255, 255);
    --black: rgb(0, 0, 0);

    /* Typography - Font Sizes */
    --font-size-base: 16px;
    --font-size-xxs: 0.625rem;
    --font-size-xs: 0.75rem;
    --font-size-s: 0.875rem;
    --font-size-m: 1rem;
    --font-size-l: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 1.75rem;
    --font-size-4xl: 2rem;
    --font-size-5xl: 2.25rem;
    --font-size-6xl: 3rem;

    /* Typography - Line Heights */
    --font-line-height-100: 1.1;
    --font-line-height-200: 1.42;
    --font-line-height-300: 20px;
    --font-line-height-400: 40px;

    /* Typography - Font Weights */
    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;

    /* Spacing */
    --spacing-0: 0;
    --spacing-2: 2px;
    --spacing-4: 4px;
    --spacing-8: 8px;
    --spacing-10: 10px;
    --spacing-12: 12px;
    --spacing-16: 16px;
    --spacing-20: 20px;
    --spacing-24: 24px;
    --spacing-32: 32px;

    /* Border Radius */
    --radius-0: 0;
    --radius-2: 2px;
    --radius-4: 4px;
    --radius-6: 6px;
    --radius-8: 8px;
    --radius-16: 16px;
    --radius-64: 64px;

    /* Semantic colors */
    --color-error: var(--red-500);
    --color-success: #b0e53c;

    /* Shadows */
    --shadow-1: 0 1px 2px rgba(0, 0, 0, 0.3);
    --shadow-2: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    --shadow-3: 0 1px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.12);
  }
`;
V`
  * {
    box-sizing: border-box;
  }
`;
const Ht = V`
  .swim-icon.ngx-3d-rotate::before {
    content: '\\ea01';
  }
  .swim-icon.ngx-action::before {
    content: '\\ea02';
  }
  .swim-icon.ngx-action-close::before {
    content: '\\ea03';
  }
  .swim-icon.ngx-action-maximize::before {
    content: '\\ea04';
  }
  .swim-icon.ngx-action-maximize-inverse::before {
    content: '\\ea05';
  }
  .swim-icon.ngx-action-minimize::before {
    content: '\\ea06';
  }
  .swim-icon.ngx-action-outline::before {
    content: '\\ea07';
  }
  .swim-icon.ngx-action-outline-small::before {
    content: '\\ea08';
  }
  .swim-icon.ngx-add-circle::before {
    content: '\\ea09';
  }
  .swim-icon.ngx-add-circle-filled::before {
    content: '\\ea0a';
  }
  .swim-icon.ngx-add-circle-medium::before {
    content: '\\ea0b';
  }
  .swim-icon.ngx-add-circle-thin::before {
    content: '\\ea0c';
  }
  .swim-icon.ngx-add-edge::before {
    content: '\\ea0d';
  }
  .swim-icon.ngx-add-new::before {
    content: '\\ea0e';
  }
  .swim-icon.ngx-add-node::before {
    content: '\\ea0f';
  }
  .swim-icon.ngx-advanced-pie::before {
    content: '\\ea10';
  }
  .swim-icon.ngx-alert::before {
    content: '\\ea11';
  }
  .swim-icon.ngx-app-store::before {
    content: '\\ea12';
  }
  .swim-icon.ngx-app-workspaces::before {
    content: '\\ea13';
  }
  .swim-icon.ngx-applet::before {
    content: '\\ea14';
  }
  .swim-icon.ngx-applets::before {
    content: '\\ea15';
  }
  .swim-icon.ngx-application::before {
    content: '\\ea16';
  }
  .swim-icon.ngx-apps::before {
    content: '\\ea17';
  }
  .swim-icon.ngx-area-chart::before {
    content: '\\ea18';
  }
  .swim-icon.ngx-arrow-bold-circle-left::before {
    content: '\\ea19';
  }
  .swim-icon.ngx-arrow-bold-circle-right::before {
    content: '\\ea1a';
  }
  .swim-icon.ngx-arrow-bold-down::before {
    content: '\\ea1b';
  }
  .swim-icon.ngx-arrow-bold-left::before {
    content: '\\ea1c';
  }
  .swim-icon.ngx-arrow-bold-right::before {
    content: '\\ea1d';
  }
  .swim-icon.ngx-arrow-bold-up::before {
    content: '\\ea1e';
  }
  .swim-icon.ngx-arrow-down::before {
    content: '\\ea1f';
  }
  .swim-icon.ngx-arrow-input::before {
    content: '\\ea20';
  }
  .swim-icon.ngx-arrow-left::before {
    content: '\\ea21';
  }
  .swim-icon.ngx-arrow-output::before {
    content: '\\ea22';
  }
  .swim-icon.ngx-arrow-right::before {
    content: '\\ea23';
  }
  .swim-icon.ngx-arrow-right-down-medium::before {
    content: '\\ea24';
  }
  .swim-icon.ngx-arrow-right-medium::before {
    content: '\\ea25';
  }
  .swim-icon.ngx-arrow-tail-left::before {
    content: '\\ea26';
  }
  .swim-icon.ngx-arrow-tail-right::before {
    content: '\\ea27';
  }
  .swim-icon.ngx-arrow-tail-solid-left::before {
    content: '\\ea28';
  }
  .swim-icon.ngx-arrow-tail-solid-right::before {
    content: '\\ea29';
  }
  .swim-icon.ngx-arrow-tail-subright::before {
    content: '\\ea2a';
  }
  .swim-icon.ngx-arrow-up::before {
    content: '\\ea2b';
  }
  .swim-icon.ngx-asset-outline::before {
    content: '\\ea2c';
  }
  .swim-icon.ngx-asset-outline-small::before {
    content: '\\ea2d';
  }
  .swim-icon.ngx-assets::before {
    content: '\\ea2e';
  }
  .swim-icon.ngx-attachment::before {
    content: '\\ea2f';
  }
  .swim-icon.ngx-automation::before {
    content: '\\ea30';
  }
  .swim-icon.ngx-automation-alternate::before {
    content: '\\ea31';
  }
  .swim-icon.ngx-back-arrow::before {
    content: '\\ea32';
  }
  .swim-icon.ngx-back-arrow-filled::before {
    content: '\\ea33';
  }
  .swim-icon.ngx-bars::before {
    content: '\\ea34';
  }
  .swim-icon.ngx-bell::before {
    content: '\\ea35';
  }
  .swim-icon.ngx-bell-alarm::before {
    content: '\\ea36';
  }
  .swim-icon.ngx-bold::before {
    content: '\\ea37';
  }
  .swim-icon.ngx-bolt::before {
    content: '\\ea38';
  }
  .swim-icon.ngx-branch-node::before {
    content: '\\ea39';
  }
  .swim-icon.ngx-branch-node-vert::before {
    content: '\\ea3a';
  }
  .swim-icon.ngx-broom::before {
    content: '\\ea3b';
  }
  .swim-icon.ngx-browser-size::before {
    content: '\\ea3c';
  }
  .swim-icon.ngx-bug::before {
    content: '\\ea3d';
  }
  .swim-icon.ngx-builder::before {
    content: '\\ea3e';
  }
  .swim-icon.ngx-builder-outline::before {
    content: '\\ea3f';
  }
  .swim-icon.ngx-button-push-outline::before {
    content: '\\ea40';
  }
  .swim-icon.ngx-button-push-outline-large::before {
    content: '\\ea41';
  }
  .swim-icon.ngx-button-push-outline-small::before {
    content: '\\ea42';
  }
  .swim-icon.ngx-calendar::before {
    content: '\\ea43';
  }
  .swim-icon.ngx-calendar-clock::before {
    content: '\\ea44';
  }
  .swim-icon.ngx-calender-clock::before {
    content: '\\ea45';
  }
  .swim-icon.ngx-cards::before {
    content: '\\ea46';
  }
  .swim-icon.ngx-center-align::before {
    content: '\\ea47';
  }
  .swim-icon.ngx-chart-area::before {
    content: '\\ea48';
  }
  .swim-icon.ngx-chart-bar-bar::before {
    content: '\\ea49';
  }
  .swim-icon.ngx-chart-bubble::before {
    content: '\\ea4a';
  }
  .swim-icon.ngx-chart-donut::before {
    content: '\\ea4b';
  }
  .swim-icon.ngx-chart-full-stacked-area::before {
    content: '\\ea4c';
  }
  .swim-icon.ngx-chart-heat::before {
    content: '\\ea4d';
  }
  .swim-icon.ngx-chart-horz-full-stack-bar::before {
    content: '\\ea4e';
  }
  .swim-icon.ngx-chart-number-card::before {
    content: '\\ea4f';
  }
  .swim-icon.ngx-chart-pie::before {
    content: '\\ea50';
  }
  .swim-icon.ngx-chart-pie-grid::before {
    content: '\\ea51';
  }
  .swim-icon.ngx-chart-scatter::before {
    content: '\\ea52';
  }
  .swim-icon.ngx-chart-spider::before {
    content: '\\ea53';
  }
  .swim-icon.ngx-chart-stacked-area::before {
    content: '\\ea54';
  }
  .swim-icon.ngx-chart-vert-bar::before {
    content: '\\ea55';
  }
  .swim-icon.ngx-chart-vert-bar2::before {
    content: '\\ea56';
  }
  .swim-icon.ngx-chart-vert-stacked-bar::before {
    content: '\\ea57';
  }
  .swim-icon.ngx-check::before {
    content: '\\ea58';
  }
  .swim-icon.ngx-check-filled::before {
    content: '\\ea59';
  }
  .swim-icon.ngx-check-filled-sm::before {
    content: '\\ea5a';
  }
  .swim-icon.ngx-check-square-filled::before {
    content: '\\ea5b';
  }
  .swim-icon.ngx-checklist::before {
    content: '\\ea5c';
  }
  .swim-icon.ngx-chevron-bold-down::before {
    content: '\\ea5d';
  }
  .swim-icon.ngx-chevron-bold-left::before {
    content: '\\ea5e';
  }
  .swim-icon.ngx-chevron-bold-right::before {
    content: '\\ea5f';
  }
  .swim-icon.ngx-chevron-bold-up::before {
    content: '\\ea60';
  }
  .swim-icon.ngx-circle::before {
    content: '\\ea61';
  }
  .swim-icon.ngx-circle-filled::before {
    content: '\\ea62';
  }
  .swim-icon.ngx-circles::before {
    content: '\\ea63';
  }
  .swim-icon.ngx-circuit-board::before {
    content: '\\ea64';
  }
  .swim-icon.ngx-clipboard::before {
    content: '\\ea65';
  }
  .swim-icon.ngx-clock::before {
    content: '\\ea66';
  }
  .swim-icon.ngx-cloud-download::before {
    content: '\\ea67';
  }
  .swim-icon.ngx-cloud-upload::before {
    content: '\\ea68';
  }
  .swim-icon.ngx-code::before {
    content: '\\ea69';
  }
  .swim-icon.ngx-cog::before {
    content: '\\ea6a';
  }
  .swim-icon.ngx-collapse::before {
    content: '\\ea6b';
  }
  .swim-icon.ngx-commandline::before {
    content: '\\ea6c';
  }
  .swim-icon.ngx-comments::before {
    content: '\\ea6d';
  }
  .swim-icon.ngx-component::before {
    content: '\\ea6e';
  }
  .swim-icon.ngx-component-create::before {
    content: '\\ea6f';
  }
  .swim-icon.ngx-condition::before {
    content: '\\ea70';
  }
  .swim-icon.ngx-copy::before {
    content: '\\ea71';
  }
  .swim-icon.ngx-copy-app::before {
    content: '\\ea72';
  }
  .swim-icon.ngx-copy-filled::before {
    content: '\\ea73';
  }
  .swim-icon.ngx-credit-card::before {
    content: '\\ea74';
  }
  .swim-icon.ngx-dashboard::before {
    content: '\\ea75';
  }
  .swim-icon.ngx-dashboard-outline::before {
    content: '\\ea76';
  }
  .swim-icon.ngx-database::before {
    content: '\\ea77';
  }
  .swim-icon.ngx-debug::before {
    content: '\\ea78';
  }
  .swim-icon.ngx-devil::before {
    content: '\\ea79';
  }
  .swim-icon.ngx-disable::before {
    content: '\\ea7a';
  }
  .swim-icon.ngx-document::before {
    content: '\\ea7b';
  }
  .swim-icon.ngx-documentation::before {
    content: '\\ea7c';
  }
  .swim-icon.ngx-domain::before {
    content: '\\ea7d';
  }
  .swim-icon.ngx-dots-horz::before {
    content: '\\ea7e';
  }
  .swim-icon.ngx-dots-vert::before {
    content: '\\ea7f';
  }
  .swim-icon.ngx-dots-vert-round::before {
    content: '\\ea80';
  }
  .swim-icon.ngx-double-down::before {
    content: '\\ea81';
  }
  .swim-icon.ngx-double-left::before {
    content: '\\ea82';
  }
  .swim-icon.ngx-double-right::before {
    content: '\\ea83';
  }
  .swim-icon.ngx-double-up::before {
    content: '\\ea84';
  }
  .swim-icon.ngx-downgrade::before {
    content: '\\ea85';
  }
  .swim-icon.ngx-downgrade-horizontal::before {
    content: '\\ea86';
  }
  .swim-icon.ngx-download-outline::before {
    content: '\\ea87';
  }
  .swim-icon.ngx-download-outline-large::before {
    content: '\\ea88';
  }
  .swim-icon.ngx-download-outline-small::before {
    content: '\\ea89';
  }
  .swim-icon.ngx-drag::before {
    content: '\\ea8a';
  }
  .swim-icon.ngx-edit::before {
    content: '\\ea8b';
  }
  .swim-icon.ngx-edit-app::before {
    content: '\\ea8c';
  }
  .swim-icon.ngx-edit-outline::before {
    content: '\\ea8d';
  }
  .swim-icon.ngx-edit-outline-large::before {
    content: '\\ea8e';
  }
  .swim-icon.ngx-edit-outline-small::before {
    content: '\\ea8f';
  }
  .swim-icon.ngx-email::before {
    content: '\\ea90';
  }
  .swim-icon.ngx-enrich-small::before {
    content: '\\ea91';
  }
  .swim-icon.ngx-escalate::before {
    content: '\\ea92';
  }
  .swim-icon.ngx-events-outline::before {
    content: '\\ea93';
  }
  .swim-icon.ngx-events-outline-small::before {
    content: '\\ea94';
  }
  .swim-icon.ngx-expand::before {
    content: '\\ea95';
  }
  .swim-icon.ngx-explore::before {
    content: '\\ea96';
  }
  .swim-icon.ngx-export::before {
    content: '\\ea97';
  }
  .swim-icon.ngx-export-filled::before {
    content: '\\ea98';
  }
  .swim-icon.ngx-export-outline::before {
    content: '\\ea99';
  }
  .swim-icon.ngx-export-outline-large::before {
    content: '\\ea9a';
  }
  .swim-icon.ngx-export-outline-small::before {
    content: '\\ea9b';
  }
  .swim-icon.ngx-eye::before {
    content: '\\ea9c';
  }
  .swim-icon.ngx-eye-disabled::before {
    content: '\\ea9d';
  }
  .swim-icon.ngx-eye-hidden::before {
    content: '\\ea9e';
  }
  .swim-icon.ngx-field-created-by::before {
    content: '\\ea9f';
  }
  .swim-icon.ngx-field-created-date::before {
    content: '\\eaa0';
  }
  .swim-icon.ngx-field-date::before {
    content: '\\eaa1';
  }
  .swim-icon.ngx-field-double-select::before {
    content: '\\eaa2';
  }
  .swim-icon.ngx-field-dynamic::before {
    content: '\\eaa3';
  }
  .swim-icon.ngx-field-edited-by::before {
    content: '\\eaa4';
  }
  .swim-icon.ngx-field-edited-date::before {
    content: '\\eaa5';
  }
  .swim-icon.ngx-field-grid::before {
    content: '\\eaa6';
  }
  .swim-icon.ngx-field-html::before {
    content: '\\eaa7';
  }
  .swim-icon.ngx-field-json::before {
    content: '\\eaa8';
  }
  .swim-icon.ngx-field-list::before {
    content: '\\eaa9';
  }
  .swim-icon.ngx-field-list-small::before {
    content: '\\eaaa';
  }
  .swim-icon.ngx-field-lists::before {
    content: '\\eaab';
  }
  .swim-icon.ngx-field-multiselect::before {
    content: '\\eaac';
  }
  .swim-icon.ngx-field-number::before {
    content: '\\eaad';
  }
  .swim-icon.ngx-field-numeric::before {
    content: '\\eaae';
  }
  .swim-icon.ngx-field-richtext::before {
    content: '\\eaaf';
  }
  .swim-icon.ngx-field-single-select::before {
    content: '\\eab0';
  }
  .swim-icon.ngx-field-singleline::before {
    content: '\\eab1';
  }
  .swim-icon.ngx-field-text::before {
    content: '\\eab2';
  }
  .swim-icon.ngx-field-textarea::before {
    content: '\\eab3';
  }
  .swim-icon.ngx-field-textual::before {
    content: '\\eab4';
  }
  .swim-icon.ngx-field-users::before {
    content: '\\eab5';
  }
  .swim-icon.ngx-filter::before {
    content: '\\eab6';
  }
  .swim-icon.ngx-filter-bar::before {
    content: '\\eab7';
  }
  .swim-icon.ngx-find-page::before {
    content: '\\eab8';
  }
  .swim-icon.ngx-flame::before {
    content: '\\eab9';
  }
  .swim-icon.ngx-folder::before {
    content: '\\eaba';
  }
  .swim-icon.ngx-folder-closed-small::before {
    content: '\\eabb';
  }
  .swim-icon.ngx-folder-open-small::before {
    content: '\\eabc';
  }
  .swim-icon.ngx-folders::before {
    content: '\\eabd';
  }
  .swim-icon.ngx-font::before {
    content: '\\eabe';
  }
  .swim-icon.ngx-format-indent-decrease::before {
    content: '\\eabf';
  }
  .swim-icon.ngx-format-indent-increase::before {
    content: '\\eac0';
  }
  .swim-icon.ngx-formula::before {
    content: '\\eac1';
  }
  .swim-icon.ngx-forward-arrow::before {
    content: '\\eac2';
  }
  .swim-icon.ngx-forward-arrow-filled::before {
    content: '\\eac3';
  }
  .swim-icon.ngx-full-align::before {
    content: '\\eac4';
  }
  .swim-icon.ngx-gauge::before {
    content: '\\eac5';
  }
  .swim-icon.ngx-gear::before {
    content: '\\eac6';
  }
  .swim-icon.ngx-gear-small::before {
    content: '\\eac7';
  }
  .swim-icon.ngx-gear-square::before {
    content: '\\eac8';
  }
  .swim-icon.ngx-globe::before {
    content: '\\eac9';
  }
  .swim-icon.ngx-graph::before {
    content: '\\eaca';
  }
  .swim-icon.ngx-graph-alt1::before {
    content: '\\eacb';
  }
  .swim-icon.ngx-grid-view::before {
    content: '\\eacc';
  }
  .swim-icon.ngx-hand::before {
    content: '\\eacd';
  }
  .swim-icon.ngx-handle::before {
    content: '\\eace';
  }
  .swim-icon.ngx-heat::before {
    content: '\\eacf';
  }
  .swim-icon.ngx-helper::before {
    content: '\\ead0';
  }
  .swim-icon.ngx-history::before {
    content: '\\ead1';
  }
  .swim-icon.ngx-horz-bar-graph-grouped::before {
    content: '\\ead2';
  }
  .swim-icon.ngx-horz-stacked-bar::before {
    content: '\\ead3';
  }
  .swim-icon.ngx-html-code::before {
    content: '\\ead4';
  }
  .swim-icon.ngx-icon-chart-bar-horizontal::before {
    content: '\\ead5';
  }
  .swim-icon.ngx-icon-chart-horz-bar::before {
    content: '\\ead6';
  }
  .swim-icon.ngx-import-outline::before {
    content: '\\ead7';
  }
  .swim-icon.ngx-import-outline-large::before {
    content: '\\ead8';
  }
  .swim-icon.ngx-import-outline-small::before {
    content: '\\ead9';
  }
  .swim-icon.ngx-info-filled::before {
    content: '\\eada';
  }
  .swim-icon.ngx-info-filled-2::before {
    content: '\\eadb';
  }
  .swim-icon.ngx-info-filled-small::before {
    content: '\\eadc';
  }
  .swim-icon.ngx-ingest-small::before {
    content: '\\eadd';
  }
  .swim-icon.ngx-inspect::before {
    content: '\\eade';
  }
  .swim-icon.ngx-integration::before {
    content: '\\eadf';
  }
  .swim-icon.ngx-integrations::before {
    content: '\\eae0';
  }
  .swim-icon.ngx-ip::before {
    content: '\\eae1';
  }
  .swim-icon.ngx-italic::before {
    content: '\\eae2';
  }
  .swim-icon.ngx-key::before {
    content: '\\eae3';
  }
  .swim-icon.ngx-key-outline::before {
    content: '\\eae4';
  }
  .swim-icon.ngx-key-outline-small::before {
    content: '\\eae5';
  }
  .swim-icon.ngx-keyboard::before {
    content: '\\eae6';
  }
  .swim-icon.ngx-keyboard-return::before {
    content: '\\eae7';
  }
  .swim-icon.ngx-layer::before {
    content: '\\eae8';
  }
  .swim-icon.ngx-left-align::before {
    content: '\\eae9';
  }
  .swim-icon.ngx-library::before {
    content: '\\eaea';
  }
  .swim-icon.ngx-line-chart::before {
    content: '\\eaeb';
  }
  .swim-icon.ngx-line-graph::before {
    content: '\\eaec';
  }
  .swim-icon.ngx-linear-gauge::before {
    content: '\\eaed';
  }
  .swim-icon.ngx-link::before {
    content: '\\eaee';
  }
  .swim-icon.ngx-list::before {
    content: '\\eaef';
  }
  .swim-icon.ngx-list-1::before {
    content: '\\eaf0';
  }
  .swim-icon.ngx-list-view::before {
    content: '\\eaf1';
  }
  .swim-icon.ngx-loading::before {
    content: '\\eaf2';
  }
  .swim-icon.ngx-locate-filled::before {
    content: '\\eaf3';
  }
  .swim-icon.ngx-locate-outline::before {
    content: '\\eaf4';
  }
  .swim-icon.ngx-locate-outline-large::before {
    content: '\\eaf5';
  }
  .swim-icon.ngx-location::before {
    content: '\\eaf6';
  }
  .swim-icon.ngx-lock::before {
    content: '\\eaf7';
  }
  .swim-icon.ngx-lock-sm::before {
    content: '\\eaf8';
  }
  .swim-icon.ngx-mail::before {
    content: '\\eaf9';
  }
  .swim-icon.ngx-mail-1::before {
    content: '\\eafa';
  }
  .swim-icon.ngx-map::before {
    content: '\\eafb';
  }
  .swim-icon.ngx-marketplace::before {
    content: '\\eafc';
  }
  .swim-icon.ngx-menu::before {
    content: '\\eafd';
  }
  .swim-icon.ngx-mfa::before {
    content: '\\eafe';
  }
  .swim-icon.ngx-mic::before {
    content: '\\eaff';
  }
  .swim-icon.ngx-minus::before {
    content: '\\eb00';
  }
  .swim-icon.ngx-money::before {
    content: '\\eb01';
  }
  .swim-icon.ngx-mouse-hold::before {
    content: '\\eb02';
  }
  .swim-icon.ngx-multi-line::before {
    content: '\\eb03';
  }
  .swim-icon.ngx-new-app::before {
    content: '\\eb04';
  }
  .swim-icon.ngx-notation-arrow-down-left::before {
    content: '\\eb05';
  }
  .swim-icon.ngx-notation-arrow-up::before {
    content: '\\eb06';
  }
  .swim-icon.ngx-numbered-list::before {
    content: '\\eb07';
  }
  .swim-icon.ngx-open::before {
    content: '\\eb08';
  }
  .swim-icon.ngx-orchestration::before {
    content: '\\eb09';
  }
  .swim-icon.ngx-paragraph::before {
    content: '\\eb0a';
  }
  .swim-icon.ngx-pause::before {
    content: '\\eb0b';
  }
  .swim-icon.ngx-pause-circle::before {
    content: '\\eb0c';
  }
  .swim-icon.ngx-percent-gauge::before {
    content: '\\eb0d';
  }
  .swim-icon.ngx-phone::before {
    content: '\\eb0e';
  }
  .swim-icon.ngx-photo::before {
    content: '\\eb0f';
  }
  .swim-icon.ngx-pie-chart::before {
    content: '\\eb10';
  }
  .swim-icon.ngx-pin::before {
    content: '\\eb11';
  }
  .swim-icon.ngx-plane::before {
    content: '\\eb12';
  }
  .swim-icon.ngx-play::before {
    content: '\\eb13';
  }
  .swim-icon.ngx-play-circle::before {
    content: '\\eb14';
  }
  .swim-icon.ngx-playbook-outline::before {
    content: '\\eb15';
  }
  .swim-icon.ngx-playbook-outline-small::before {
    content: '\\eb16';
  }
  .swim-icon.ngx-plugin::before {
    content: '\\eb17';
  }
  .swim-icon.ngx-plugin-outline::before {
    content: '\\eb18';
  }
  .swim-icon.ngx-plugin-outline-small::before {
    content: '\\eb19';
  }
  .swim-icon.ngx-plus::before {
    content: '\\eb1a';
  }
  .swim-icon.ngx-plus-bold::before {
    content: '\\eb1b';
  }
  .swim-icon.ngx-prev::before {
    content: '\\eb1c';
  }
  .swim-icon.ngx-printer::before {
    content: '\\eb1d';
  }
  .swim-icon.ngx-profile::before {
    content: '\\eb1e';
  }
  .swim-icon.ngx-profile-filled::before {
    content: '\\eb1f';
  }
  .swim-icon.ngx-promote::before {
    content: '\\eb20';
  }
  .swim-icon.ngx-promote-horizontal::before {
    content: '\\eb21';
  }
  .swim-icon.ngx-question::before {
    content: '\\eb22';
  }
  .swim-icon.ngx-question-filled::before {
    content: '\\eb23';
  }
  .swim-icon.ngx-question-filled-sm::before {
    content: '\\eb24';
  }
  .swim-icon.ngx-radio-button::before {
    content: '\\eb25';
  }
  .swim-icon.ngx-redo::before {
    content: '\\eb26';
  }
  .swim-icon.ngx-redo-all::before {
    content: '\\eb27';
  }
  .swim-icon.ngx-reference::before {
    content: '\\eb28';
  }
  .swim-icon.ngx-reference-grid::before {
    content: '\\eb29';
  }
  .swim-icon.ngx-reference-multi::before {
    content: '\\eb2a';
  }
  .swim-icon.ngx-reference-single::before {
    content: '\\eb2b';
  }
  .swim-icon.ngx-reference-tree::before {
    content: '\\eb2c';
  }
  .swim-icon.ngx-refresh::before {
    content: '\\eb2d';
  }
  .swim-icon.ngx-refresh-circle::before {
    content: '\\eb2e';
  }
  .swim-icon.ngx-refresh-small::before {
    content: '\\eb2f';
  }
  .swim-icon.ngx-remove::before {
    content: '\\eb30';
  }
  .swim-icon.ngx-remove-edge::before {
    content: '\\eb31';
  }
  .swim-icon.ngx-remove-node::before {
    content: '\\eb32';
  }
  .swim-icon.ngx-remove-users::before {
    content: '\\eb33';
  }
  .swim-icon.ngx-repeat::before {
    content: '\\eb34';
  }
  .swim-icon.ngx-replace::before {
    content: '\\eb35';
  }
  .swim-icon.ngx-reports::before {
    content: '\\eb36';
  }
  .swim-icon.ngx-reports-outline::before {
    content: '\\eb37';
  }
  .swim-icon.ngx-resize::before {
    content: '\\eb38';
  }
  .swim-icon.ngx-right-align::before {
    content: '\\eb39';
  }
  .swim-icon.ngx-rocket::before {
    content: '\\eb3a';
  }
  .swim-icon.ngx-rotate::before {
    content: '\\eb3b';
  }
  .swim-icon.ngx-rule-outline::before {
    content: '\\eb3c';
  }
  .swim-icon.ngx-runner::before {
    content: '\\eb3d';
  }
  .swim-icon.ngx-runs-outline::before {
    content: '\\eb3e';
  }
  .swim-icon.ngx-runs-outline-small::before {
    content: '\\eb3f';
  }
  .swim-icon.ngx-sankey::before {
    content: '\\eb40';
  }
  .swim-icon.ngx-save::before {
    content: '\\eb41';
  }
  .swim-icon.ngx-save-outline::before {
    content: '\\eb42';
  }
  .swim-icon.ngx-save-outline-large::before {
    content: '\\eb43';
  }
  .swim-icon.ngx-save-outline-small::before {
    content: '\\eb44';
  }
  .swim-icon.ngx-screen::before {
    content: '\\eb45';
  }
  .swim-icon.ngx-screen-1::before {
    content: '\\eb46';
  }
  .swim-icon.ngx-search::before {
    content: '\\eb47';
  }
  .swim-icon.ngx-section::before {
    content: '\\eb48';
  }
  .swim-icon.ngx-select-all::before {
    content: '\\eb49';
  }
  .swim-icon.ngx-select-user::before {
    content: '\\eb4a';
  }
  .swim-icon.ngx-select-users::before {
    content: '\\eb4b';
  }
  .swim-icon.ngx-sensor-outline::before {
    content: '\\eb4c';
  }
  .swim-icon.ngx-sensor-outline-small::before {
    content: '\\eb4d';
  }
  .swim-icon.ngx-server::before {
    content: '\\eb4e';
  }
  .swim-icon.ngx-shield::before {
    content: '\\eb4f';
  }
  .swim-icon.ngx-shrink::before {
    content: '\\eb50';
  }
  .swim-icon.ngx-skip::before {
    content: '\\eb51';
  }
  .swim-icon.ngx-slide-left::before {
    content: '\\eb52';
  }
  .swim-icon.ngx-slide-right::before {
    content: '\\eb53';
  }
  .swim-icon.ngx-sliders::before {
    content: '\\eb54';
  }
  .swim-icon.ngx-smartphone::before {
    content: '\\eb55';
  }
  .swim-icon.ngx-smiley-frown::before {
    content: '\\eb56';
  }
  .swim-icon.ngx-snapshot::before {
    content: '\\eb57';
  }
  .swim-icon.ngx-solution::before {
    content: '\\eb58';
  }
  .swim-icon.ngx-sort-ascending::before {
    content: '\\eb59';
  }
  .swim-icon.ngx-sort-descending::before {
    content: '\\eb5a';
  }
  .swim-icon.ngx-spaces::before {
    content: '\\eb5b';
  }
  .swim-icon.ngx-spaces-list::before {
    content: '\\eb5c';
  }
  .swim-icon.ngx-spaces-outline::before {
    content: '\\eb5d';
  }
  .swim-icon.ngx-spaces-outline-large::before {
    content: '\\eb5e';
  }
  .swim-icon.ngx-speedometer::before {
    content: '\\eb5f';
  }
  .swim-icon.ngx-split-handle::before {
    content: '\\eb60';
  }
  .swim-icon.ngx-square::before {
    content: '\\eb61';
  }
  .swim-icon.ngx-square-filled::before {
    content: '\\eb62';
  }
  .swim-icon.ngx-star::before {
    content: '\\eb63';
  }
  .swim-icon.ngx-star-filled::before {
    content: '\\eb64';
  }
  .swim-icon.ngx-stars::before {
    content: '\\eb65';
  }
  .swim-icon.ngx-stopwatch::before {
    content: '\\eb66';
  }
  .swim-icon.ngx-superscript::before {
    content: '\\eb67';
  }
  .swim-icon.ngx-swap::before {
    content: '\\eb68';
  }
  .swim-icon.ngx-switch::before {
    content: '\\eb69';
  }
  .swim-icon.ngx-system-diagnostics::before {
    content: '\\eb6a';
  }
  .swim-icon.ngx-system-diagnostics-2::before {
    content: '\\eb6b';
  }
  .swim-icon.ngx-table::before {
    content: '\\eb6c';
  }
  .swim-icon.ngx-tabs::before {
    content: '\\eb6d';
  }
  .swim-icon.ngx-tag-filled::before {
    content: '\\eb6e';
  }
  .swim-icon.ngx-tags-outline::before {
    content: '\\eb6f';
  }
  .swim-icon.ngx-target::before {
    content: '\\eb70';
  }
  .swim-icon.ngx-task-outline::before {
    content: '\\eb71';
  }
  .swim-icon.ngx-thumb-down-filled::before {
    content: '\\eb72';
  }
  .swim-icon.ngx-thumb-down-outline::before {
    content: '\\eb73';
  }
  .swim-icon.ngx-thumb-down-outline-large::before {
    content: '\\eb74';
  }
  .swim-icon.ngx-thumb-up-filled::before {
    content: '\\eb75';
  }
  .swim-icon.ngx-thumb-up-outline::before {
    content: '\\eb76';
  }
  .swim-icon.ngx-thumb-up-outline-large::before {
    content: '\\eb77';
  }
  .swim-icon.ngx-tracking-id::before {
    content: '\\eb78';
  }
  .swim-icon.ngx-transfer::before {
    content: '\\eb79';
  }
  .swim-icon.ngx-trash::before {
    content: '\\eb7a';
  }
  .swim-icon.ngx-tree::before {
    content: '\\eb7b';
  }
  .swim-icon.ngx-tree-collapse::before {
    content: '\\eb7c';
  }
  .swim-icon.ngx-tree-expand::before {
    content: '\\eb7d';
  }
  .swim-icon.ngx-trend-down::before {
    content: '\\eb7e';
  }
  .swim-icon.ngx-trend-level::before {
    content: '\\eb7f';
  }
  .swim-icon.ngx-trend-up::before {
    content: '\\eb80';
  }
  .swim-icon.ngx-trending::before {
    content: '\\eb81';
  }
  .swim-icon.ngx-underline::before {
    content: '\\eb82';
  }
  .swim-icon.ngx-undo::before {
    content: '\\eb83';
  }
  .swim-icon.ngx-undo-all::before {
    content: '\\eb84';
  }
  .swim-icon.ngx-unlink::before {
    content: '\\eb85';
  }
  .swim-icon.ngx-upload-outline::before {
    content: '\\eb86';
  }
  .swim-icon.ngx-upload-outline-large::before {
    content: '\\eb87';
  }
  .swim-icon.ngx-upload-outline-small::before {
    content: '\\eb88';
  }
  .swim-icon.ngx-user::before {
    content: '\\eb89';
  }
  .swim-icon.ngx-user-add::before {
    content: '\\eb8a';
  }
  .swim-icon.ngx-user-circle::before {
    content: '\\eb8b';
  }
  .swim-icon.ngx-user-groups::before {
    content: '\\eb8c';
  }
  .swim-icon.ngx-users::before {
    content: '\\eb8d';
  }
  .swim-icon.ngx-version::before {
    content: '\\eb8e';
  }
  .swim-icon.ngx-vert-bar-graph-grouped::before {
    content: '\\eb8f';
  }
  .swim-icon.ngx-vert-full-stack-bar::before {
    content: '\\eb90';
  }
  .swim-icon.ngx-view-code::before {
    content: '\\eb91';
  }
  .swim-icon.ngx-view-designer::before {
    content: '\\eb92';
  }
  .swim-icon.ngx-view-split::before {
    content: '\\eb93';
  }
  .swim-icon.ngx-wand::before {
    content: '\\eb94';
  }
  .swim-icon.ngx-warning-filled::before {
    content: '\\eb95';
  }
  .swim-icon.ngx-warning-filled-sm::before {
    content: '\\eb96';
  }
  .swim-icon.ngx-warning-thin::before {
    content: '\\eb97';
  }
  .swim-icon.ngx-web-api::before {
    content: '\\eb98';
  }
  .swim-icon.ngx-webhook-outline::before {
    content: '\\eb99';
  }
  .swim-icon.ngx-webhook-outline-large::before {
    content: '\\eb9a';
  }
  .swim-icon.ngx-webhook-outline-small::before {
    content: '\\eb9b';
  }
  .swim-icon.ngx-widget::before {
    content: '\\eb9c';
  }
  .swim-icon.ngx-worker::before {
    content: '\\eb9d';
  }
  .swim-icon.ngx-workflow::before {
    content: '\\eb9e';
  }
  .swim-icon.ngx-workflow-alternate::before {
    content: '\\eb9f';
  }
  .swim-icon.ngx-workflow-alternate-large::before {
    content: '\\eba0';
  }
  .swim-icon.ngx-workflow-alternate-small::before {
    content: '\\eba1';
  }
  .swim-icon.ngx-workspaces::before {
    content: '\\eba2';
  }
  .swim-icon.ngx-workstation::before {
    content: '\\eba3';
  }
  .swim-icon.ngx-wrench::before {
    content: '\\eba4';
  }
  .swim-icon.ngx-x::before {
    content: '\\eba5';
  }
  .swim-icon.ngx-x-filled::before {
    content: '\\eba6';
  }
  .swim-icon.ngx-x-small::before {
    content: '\\eba7';
  }
`, Bt = V`
  :host {
    display: inline-block;
    vertical-align: baseline;
  }

  :host svg {
    fill: currentColor;
    display: block;
    width: 1em;
    height: 1em;
  }

  .swim-icon__stack {
    position: relative;
    display: inline-block;
    width: 1em;
    height: 1em;
    line-height: 1em;
    vertical-align: baseline;
  }

  .swim-icon__stack .swim-icon__i {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: inherit;
    line-height: 1em;
    display: block;
  }

  /* Later icons paint on top (e.g. x over square-filled) */
  .swim-icon__stack .swim-icon__i--1 {
    z-index: 1;
  }
  .swim-icon__stack .swim-icon__i--2 {
    z-index: 2;
  }
  .swim-icon__stack .swim-icon__i--3 {
    z-index: 3;
  }

  .swim-icon__stack .swim-icon__i::before {
    line-height: 1em;
  }

  /* Modifier: badge overlay (small icon at top-right), match ngx-ui icons-effects.scss */
  .icon-fx-badge {
    font-size: 0.25em !important;
    position: relative;
    top: -0.5em;
    left: 0.5em;
    width: auto;
    height: auto;
  }

  /* Modifier: red color for overlay icon (match ngx-ui) */
  .text-red {
    color: var(--red-500);
  }

  /* Font icon base (glyphs in icon-font-glyphs.ts) */
  .swim-icon {
    display: inline-block;
    font: normal normal normal 1em/1 'swim-ngx-icon';
    flex-shrink: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Loading spinner: animate only the inner glyph inside this shadow root */
  @keyframes swim-icon-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  :host([font-icon='loading']) .swim-icon__i {
    animation: swim-icon-spin 1s linear infinite;
  }

  :host([font-icon='loading']) span[part='icon'] {
    animation: swim-icon-spin 1s linear infinite;
  }

  ${Ht}
`, Pt = (n) => `swim-icon ${n.trim().split(" ").map((t) => {
  const [i, o] = t.split(":");
  return i.length ? `${i} ${i}-${o}` : o;
}).join(" ")}`;
class Jt {
  constructor() {
    this._defaultFontSetClass = "ngx", this._iconMap = /* @__PURE__ */ new Map();
  }
  setDefaultFontSetClass(e) {
    return this._defaultFontSetClass = e, this._defaultFontSetClass;
  }
  get(e, t) {
    return this.lookup(e, t).map((i) => Pt(i));
  }
  lookup(e, t) {
    const i = t ?? this._defaultFontSetClass;
    return (Array.isArray(e) ? e : [e]).reduce((o, r) => {
      const s = this._expandKeys(r, i).map((l) => {
        const c = this._iconMap.get(l);
        return c && c.length === 1 ? c[0] : l;
      }).join(" ");
      return o.concat(this._iconMap.get(s) || [s]);
    }, []);
  }
  add(e, t) {
    const i = this._expandKeys(e, this._defaultFontSetClass).join(" "), o = this.lookup(t);
    this._iconMap.set(i, o);
  }
  _expandKeys(e, t) {
    return e.split(" ").map((i) => i.includes(":") ? i : `${t}:${i}`);
  }
}
const Rt = new Jt(), Ut = "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", Kt = "swim-ngx-icon";
let Je = !1;
function Lt() {
  if (Je || typeof document > "u") return;
  const n = document.createElement("style");
  n.setAttribute("data-swim-icon-font", ""), n.textContent = `
@font-face {
  font-family: '${Kt}';
  src: url('data:font/woff2;base64,${Ut}') format('woff2');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
`, document.head.appendChild(n), Je = !0;
}
var Gt = Object.defineProperty, se = (n, e, t, i) => {
  for (var o = void 0, r = n.length - 1, s; r >= 0; r--)
    (s = n[r]) && (o = s(e, t, o) || o);
  return o && Gt(e, t, o), o;
};
const Re = "swim-icon", Ee = class Ee extends F {
  constructor() {
    super(...arguments), this.fontIcon = "", this.alt = "", this.fontSet = "ngx", this.iconClass = "", this._cssClasses = [], this._iconClassTokensOnHost = [];
  }
  connectedCallback() {
    super.connectedCallback(), Lt(), this._updateFontIcon();
  }
  updated(e) {
    super.updated(e), (e.has("fontIcon") || e.has("fontSet")) && this._updateFontIcon(), e.has("iconClass") && this._syncIconClassToHost();
  }
  _syncIconClassToHost() {
    var t;
    const e = (((t = this.iconClass) == null ? void 0 : t.trim()) ?? "").split(/\s+/).filter(Boolean);
    this._iconClassTokensOnHost.forEach((i) => this.classList.remove(i)), e.forEach((i) => this.classList.add(i)), this._iconClassTokensOnHost = e;
  }
  _parseFontIcon(e) {
    if (Array.isArray(e)) return e.filter(Boolean);
    if (typeof e != "string" || !e) return [];
    const t = e.trim();
    if (t.startsWith("["))
      try {
        const i = JSON.parse(t);
        return Array.isArray(i) ? i : [t];
      } catch {
        return [t];
      }
    return [t];
  }
  _updateFontIcon() {
    const e = this._parseFontIcon(this.fontIcon);
    if (e.length === 0) {
      this._cssClasses = [];
      return;
    }
    this._cssClasses = Rt.get(e, this.fontSet);
  }
  render() {
    var r;
    const e = this._cssClasses, t = !!this.alt, i = ((r = this.iconClass) == null ? void 0 : r.trim()) ?? "", o = i ? ` ${i}` : "";
    return !e || e.length === 0 ? p`
        <span
          part="icon"
          class="${i}"
          role="${t ? "img" : "presentation"}"
          aria-label="${t ? this.alt : h}"
          aria-hidden="${t ? "false" : "true"}"
        >
          <slot></slot>
        </span>
      ` : e.length === 1 ? p`
        <i
          part="icon"
          class="swim-icon__i ${e[0]}${o}"
          role="${t ? "img" : "presentation"}"
          aria-label="${t ? this.alt : h}"
          aria-hidden="${t ? "false" : "true"}"
        ></i>
      ` : p`
      <span
        class="swim-icon__stack"
        role="${t ? "img" : "presentation"}"
        aria-label="${t ? this.alt : h}"
        aria-hidden="${t ? "false" : "true"}"
      >
        ${e.map(
      (s, l) => p`<i part="icon icon-${l}" class="swim-icon__i swim-icon__i--${l} ${s}${o}"></i>`
    )}
      </span>
    `;
  }
};
Ee.styles = [oe, Bt];
let P = Ee;
se([
  a({ type: String, attribute: "font-icon" })
], P.prototype, "fontIcon");
se([
  a({ type: String })
], P.prototype, "alt");
se([
  a({ type: String, attribute: "font-set" })
], P.prototype, "fontSet");
se([
  a({ type: String, attribute: "icon-class" })
], P.prototype, "iconClass");
se([
  v()
], P.prototype, "_cssClasses");
customElements.get(Re) || customElements.define(Re, P);
const rt = V`
  /* Only set standard scrollbar props in browsers that don't support -webkit-scrollbar.
   * Chrome 121+ disables ::-webkit-scrollbar (and thumb :hover) when scrollbar-color/width are set. */
  @supports not selector(::-webkit-scrollbar) {
    .swim-scroll,
    .swim-scroll-overlay,
    .swim-scroll-muted,
    .swim-scroll * {
      scrollbar-width: thin;
      scrollbar-color: rgb(80, 92, 117) transparent;
    }
  }

  /* Base: make element scrollable so scrollbar styling applies (matches overlay/muted) */
  .swim-scroll {
    overflow: auto;
    overflow: overlay;
  }

  .swim-scroll::-webkit-scrollbar,
  .swim-scroll-overlay::-webkit-scrollbar,
  .swim-scroll-muted::-webkit-scrollbar,
  .swim-scroll *::-webkit-scrollbar {
    width: 13px;
    height: 13px;
  }

  /* Track: transparent (matches ngx-ui scrollbars.scss) */
  .swim-scroll::-webkit-scrollbar-track,
  .swim-scroll-overlay::-webkit-scrollbar-track,
  .swim-scroll-muted::-webkit-scrollbar-track,
  .swim-scroll *::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 10px;
    margin: 0;
  }

  .swim-scroll::-webkit-scrollbar-corner,
  .swim-scroll-overlay::-webkit-scrollbar-corner,
  .swim-scroll-muted::-webkit-scrollbar-corner,
  .swim-scroll *::-webkit-scrollbar-corner {
    background-color: transparent;
  }

  .swim-scroll::-webkit-scrollbar-thumb,
  .swim-scroll-overlay::-webkit-scrollbar-thumb,
  .swim-scroll-muted::-webkit-scrollbar-thumb,
  .swim-scroll *::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-clip: padding-box;
    border: 4px solid transparent;
  }

  .swim-scroll::-webkit-scrollbar-button,
  .swim-scroll::-webkit-scrollbar-track-piece,
  .swim-scroll::-webkit-scrollbar-corner,
  .swim-scroll::-webkit-resizer,
  .swim-scroll-overlay::-webkit-scrollbar-button,
  .swim-scroll-overlay::-webkit-scrollbar-track-piece,
  .swim-scroll-overlay::-webkit-scrollbar-corner,
  .swim-scroll-overlay::-webkit-resizer,
  .swim-scroll-muted::-webkit-scrollbar-button,
  .swim-scroll-muted::-webkit-scrollbar-track-piece,
  .swim-scroll-muted::-webkit-scrollbar-corner,
  .swim-scroll-muted::-webkit-resizer,
  .swim-scroll *::-webkit-scrollbar-button,
  .swim-scroll *::-webkit-scrollbar-track-piece,
  .swim-scroll *::-webkit-scrollbar-corner,
  .swim-scroll *::-webkit-resizer {
    display: none;
  }

  /* Default & overlay: thumb 50% opacity (rest), full opacity on hover (matches ngx-ui). */
  /* Use literal rgba for default so scrollbar pseudo-elements always get a distinct rest state. */
  .swim-scroll::-webkit-scrollbar-thumb,
  .swim-scroll *::-webkit-scrollbar-thumb,
  .swim-scroll-overlay::-webkit-scrollbar-thumb {
    background-color: rgba(80, 92, 117, 0.5);
  }

  .swim-scroll::-webkit-scrollbar-thumb:hover,
  .swim-scroll *::-webkit-scrollbar-thumb:hover,
  .swim-scroll-overlay::-webkit-scrollbar-thumb:hover {
    background-color: rgb(80, 92, 117);
  }

  /* Overlay: scrollbars hidden until hover */
  .swim-scroll-overlay {
    overflow: auto;
    overflow: overlay;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }

  .swim-scroll-overlay::-webkit-scrollbar {
    display: none;
  }

  .swim-scroll-overlay:hover::-webkit-scrollbar {
    display: initial;
  }

  /* Muted: thumb 30% → 50% on container hover → 100% on thumb hover (matches ngx-ui). Literal rgba for reliability. */
  .swim-scroll-muted {
    overflow: auto;
    overflow: overlay;
  }

  .swim-scroll-muted::-webkit-scrollbar-thumb {
    background-color: rgba(80, 92, 117, 0.3);
  }

  .swim-scroll-muted:hover::-webkit-scrollbar-thumb {
    background-color: rgba(80, 92, 117, 0.5);
  }

  .swim-scroll-muted:hover::-webkit-scrollbar-thumb:hover {
    background-color: rgb(80, 92, 117);
  }
`, Nt = V`
  :host {
    display: block;
    max-width: 100%;
    margin-top: var(--spacing-16);
    margin-bottom: var(--spacing-8);
    line-height: calc(1em + 0.75em);
    padding-top: calc(0.75rem + 8px);
    padding-bottom: 0;
  }

  :host([marginless]) {
    margin-top: 0;
    margin-bottom: 0;
  }

  :host([no-label]) {
    padding-top: 0;
  }

  :host([size='md']) .input-box,
  :host([size='md']) .input-textarea {
    font-size: var(--font-size-l) !important;
  }

  :host([size='lg']) .input-box,
  :host([size='lg']) .input-textarea {
    font-size: var(--font-size-xl) !important;
  }

  :host([focused]:not([invalid])) .input-label {
    color: var(--blue-500) !important;
  }

  :host([invalid][touched]) .input-underline,
  :host([invalid][dirty]) .input-underline {
    background-color: var(--red-500) !important;
  }

  :host([invalid][touched]) .underline-fill,
  :host([invalid][dirty]) .underline-fill {
    background-color: var(--red-500) !important;
  }

  :host([invalid][touched]) .input-label,
  :host([invalid][dirty]) .input-label {
    color: var(--red-500);
  }

  :host([invalid][touched]) .input-hint,
  :host([invalid][dirty]) .input-hint {
    color: var(--red-500);
  }

  :host([invalid][touched]) .input-box,
  :host([invalid][dirty]) .input-box,
  :host([invalid][touched]) .input-textarea,
  :host([invalid][dirty]) .input-textarea {
    caret-color: var(--red-500) !important;
  }

  :host([autosize]) {
    display: inline-block;
  }

  /* Chrome autofill override */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: var(--grey-100) !important;
  }

  .input-flex-wrap {
    display: flex;
  }

  .input-flex-wrap-inner {
    display: flex;
    flex: 1;
    max-width: 100%;
  }

  ::slotted([slot='prefix']),
  ::slotted([slot='suffix']) {
    flex: none;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ::slotted([slot='prefix']) {
    margin-right: var(--spacing-8);
  }

  ::slotted([slot='suffix']) {
    margin-left: var(--spacing-8);
  }

  .input-wrap {
    position: relative;
    display: block;
    margin-bottom: var(--spacing-0);
    width: 100%;
  }

  .input-box-wrap {
    position: relative;
    width: 100%;
    display: flex;
    min-height: 1.75em;
  }

  .input-box-wrap:focus {
    outline: none;
  }

  .input-box,
  .input-textarea {
    flex: auto;
    display: block;
    background: transparent;
    border: none;
    margin-bottom: var(--spacing-0);
    padding-left: var(--spacing-0);
    width: 100%;
    max-width: 100%;
    color: var(--grey-050);
    font-size: var(--font-size-m);
    line-height: 1.25em;
    min-height: var(--input-height, 33px);
    font-family: inherit;
    caret-color: var(--blue-500);
  }

  .input-box::placeholder,
  .input-textarea::placeholder {
    color: var(--grey-350);
  }

  .input-box:focus,
  .input-textarea:focus {
    box-shadow: none;
    outline: none;
  }

  .input-box:disabled,
  .input-textarea:disabled {
    color: var(--grey-400);
    user-select: none;
  }

  .input-box {
    margin: 3px 0;
  }

  .input-box[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  .input-textarea {
    resize: none;
  }

  .input-label {
    position: absolute;
    top: 0.5em;
    line-height: var(--font-line-height-100);
    pointer-events: none;
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-semibold);
    color: var(--grey-350);
    white-space: nowrap;
    overflow-x: clip;
    max-width: 100%;
    text-overflow: ellipsis;
    transition: color 0.2s ease-out, font-size 150ms ease-out, top 150ms ease-out;
  }

  :host([active]) .input-label,
  :host([has-placeholder]) .input-label {
    font-size: var(--font-size-xs);
    top: -1.4em;
  }

  .input-underline {
    width: 100%;
    height: 1px;
    background-color: var(--grey-600);
  }

  .input-underline.visibility-hidden {
    visibility: hidden;
  }

  .underline-fill {
    background-color: var(--blue-500);
    transition: width 250ms ease-out;
    width: 0;
    height: 2px;
    margin: 0 auto;
  }

  :host([focused]) .underline-fill {
    width: 100%;
  }

  .input-hint {
    font-size: var(--font-size-xs);
    color: var(--grey-350);
    margin-top: var(--spacing-8);
    min-height: 1em;
    line-height: 14px;
    transition: color 0.2s ease-in-out;
  }

  .input-hint.hidden {
    display: none;
  }

  .password-toggle,
  .lock-toggle {
    line-height: 25px;
    top: 0;
    bottom: 0;
    right: 10px;
    cursor: pointer;
    font-size: var(--font-size-s);
    color: var(--grey-300);
    transition: color 100ms;
    padding: 0;
    z-index: 1;
    background: transparent;
    border: none;
    position: absolute;
  }

  .password-toggle:hover,
  .lock-toggle:hover {
    color: var(--grey-050);
  }

  .numeric-spinner {
    display: flex;
    z-index: 2;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    flex-direction: column;
    transition: all 0.1s ease-out;
  }

  :host(:not([disabled])) .input-box-wrap:hover .numeric-spinner,
  .input-box:focus + .numeric-spinner {
    opacity: 1;
  }

  .spinner-btn {
    font-size: var(--font-size-xxs);
    color: var(--grey-300);
    cursor: pointer;
    background: transparent;
    border: none;
    padding: 0;
    margin: 0;
    line-height: 1;
  }

  .spinner-btn:hover {
    color: var(--grey-100);
  }

  .spinner-btn:active {
    transform: scale(1.4);
  }

  /* Fill appearance */
  :host([appearance='fill']:not([readonly])) .input-flex-wrap {
    position: relative;
  }

  :host([appearance='fill']:not([readonly])) .input-flex-wrap::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--grey-875);
    mix-blend-mode: exclusion;
    pointer-events: none;
    border-top-left-radius: var(--radius-4);
    border-top-right-radius: var(--radius-4);
  }

  :host([appearance='fill']) .input-label {
    left: 0;
  }

  :host([appearance='fill']) .input-box-wrap .password-toggle,
  :host([appearance='fill']) .input-box-wrap .lock-toggle {
    line-height: 33.33px;
    z-index: 2;
  }

  :host([appearance='fill']) .input-box,
  :host([appearance='fill']) .input-textarea {
    margin: 0;
    padding: var(--spacing-4) 10px;
    position: relative;
    z-index: 1;
  }

  :host([appearance='fill']) .input-box + .numeric-spinner {
    right: 10px;
  }

  :host([appearance='fill']) ::slotted([slot='prefix']),
  :host([appearance='fill']) ::slotted([slot='suffix']) {
    color: var(--grey-350);
  }

  :host([appearance='fill']) ::slotted([slot='prefix']) {
    padding-left: var(--spacing-10);
  }

  :host([appearance='fill']) ::slotted([slot='suffix']) {
    padding-right: var(--spacing-10);
  }

  /* swim-icon in spinner and password toggle */
  .spinner-btn swim-icon,
  .password-toggle swim-icon {
    display: inline-block;
    font-size: 1em;
  }
`;
var q = /* @__PURE__ */ ((n) => (n.text = "text", n.password = "password", n.email = "email", n.number = "number", n.tel = "tel", n.url = "url", n.textarea = "textarea", n))(q || {}), at = /* @__PURE__ */ ((n) => (n.legacy = "legacy", n.fill = "fill", n))(at || {}), lt = /* @__PURE__ */ ((n) => (n.sm = "sm", n.md = "md", n.lg = "lg", n))(lt || {});
function M(n) {
  return n != null && `${n}` != "false";
}
function ct(n, e = null) {
  return isNaN(parseFloat(n)) || isNaN(Number(n)) ? e : Number(n);
}
var Wt = Object.defineProperty, Zt = Object.getOwnPropertyDescriptor, f = (n, e, t, i) => {
  for (var o = i > 1 ? void 0 : i ? Zt(e, t) : e, r = n.length - 1, s; r >= 0; r--)
    (s = n[r]) && (o = (i ? s(e, t, o) : s(o)) || o);
  return i && o && Wt(e, t, o), o;
};
const Ue = "swim-input", de = class de extends F {
  constructor() {
    super(), this.type = q.text, this.label = "", this.placeholder = "", this.hint = "", this._value = "", this.name = "", this.id = `swim-input-${Math.random().toString(36).substr(2, 9)}`, this._disabled = !1, this._readonly = !1, this._required = !1, this._autofocus = !1, this.autocomplete = "off", this.appearance = at.legacy, this.size = lt.sm, this._withMargin = !0, this._withHint = !0, this._passwordToggleEnabled = !1, this.textareaRows = 3, this.requiredIndicator = "*", this._focused = !1, this._passwordVisible = !1, this._touched = !1, this._dirty = !1, this._invalid = !1, this._internals = this.attachInternals();
  }
  get value() {
    return this._value;
  }
  set value(e) {
    const t = this._value;
    this._value = e, this._internals.setFormValue(e), this.requestUpdate("value", t), this._updateActiveState();
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(e) {
    this._disabled = M(e);
  }
  get readonly() {
    return this._readonly;
  }
  set readonly(e) {
    this._readonly = M(e);
  }
  get required() {
    return this._required;
  }
  set required(e) {
    this._required = M(e);
  }
  get autofocus() {
    return this._autofocus;
  }
  set autofocus(e) {
    this._autofocus = M(e);
  }
  get marginless() {
    return !this._withMargin;
  }
  set marginless(e) {
    this._withMargin = !M(e);
  }
  get withHint() {
    return this._withHint;
  }
  set withHint(e) {
    this._withHint = M(e);
  }
  get passwordToggleEnabled() {
    return this._passwordToggleEnabled;
  }
  set passwordToggleEnabled(e) {
    this._passwordToggleEnabled = M(e);
  }
  connectedCallback() {
    super.connectedCallback(), this._updateActiveState();
  }
  firstUpdated() {
    this.autofocus && this.inputElement && setTimeout(() => {
      this.inputElement.focus();
    });
  }
  /** Delegate focus to the internal input so form validation can focus invalid controls. */
  focus(e) {
    var t;
    (t = this.inputElement) == null || t.focus(e);
  }
  updated(e) {
    super.updated(e), e.has("value") && this._updateActiveState(), (e.has("required") || e.has("min") || e.has("max")) && this._validate();
  }
  render() {
    const e = this.type === q.textarea, t = this.type === q.password && this.passwordToggleEnabled && !this.disabled, i = this.type === q.number && !this.disabled, o = this._passwordVisible ? q.text : this.type;
    return p`
      <div class="input-wrap">
        <div class="input-flex-wrap">
          <slot name="prefix"></slot>
          <div class="input-flex-wrap-inner">
            <div class="input-box-wrap">
              ${e ? this._renderTextarea() : this._renderInput(o)}
              ${i ? p`
                    <div class="numeric-spinner">
                      <button
                        type="button"
                        class="spinner-btn"
                        @mousedown="${this._incrementValue}"
                        @mouseup="${this._stopSpinner}"
                        @mouseleave="${this._stopSpinner}"
                        aria-label="Increment"
                      >
                        <swim-icon font-icon="chevron-bold-up"></swim-icon>
                      </button>
                      <button
                        type="button"
                        class="spinner-btn"
                        @mousedown="${this._decrementValue}"
                        @mouseup="${this._stopSpinner}"
                        @mouseleave="${this._stopSpinner}"
                        aria-label="Decrement"
                      >
                        <swim-icon font-icon="chevron-bold-down"></swim-icon>
                      </button>
                    </div>
                  ` : h}
              ${t ? p`
                    <button
                      type="button"
                      class="password-toggle"
                      @click="${this._togglePassword}"
                      aria-label="Toggle password visibility"
                    >
                      <swim-icon font-icon="${this._passwordVisible ? "eye-disabled" : "eye"}"></swim-icon>
                    </button>
                  ` : h}
            </div>
            <label class="input-label" part="label" for="${this.id}">
              ${this.label} ${this.required ? p`<span>${this.requiredIndicator}</span>` : h}
            </label>
          </div>
          <slot name="suffix"></slot>
        </div>
        <div class="input-underline ${this.readonly ? "visibility-hidden" : ""}">
          <div class="underline-fill"></div>
        </div>
        <div class="input-hint ${this.withHint ? "" : "hidden"}">
          <slot name="hint">${this.hint}</slot>
        </div>
      </div>
    `;
  }
  _renderInput(e) {
    return p`
      <input
        part="input"
        class="input-box"
        type="${e}"
        id="${this.id}"
        name="${this.name}"
        .value="${Pe(this.value)}"
        placeholder="${this.placeholder}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        ?required="${this.required}"
        min="${T(this.min)}"
        max="${T(this.max)}"
        minlength="${T(this.minlength)}"
        maxlength="${T(this.maxlength)}"
        tabindex="${T(this.tabindex)}"
        autocomplete="${this.autocomplete}"
        @input="${this._handleInput}"
        @change="${this._handleChange}"
        @focus="${this._handleFocus}"
        @blur="${this._handleBlur}"
      />
    `;
  }
  _renderTextarea() {
    return p`
      <textarea
        part="input"
        class="input-textarea swim-scroll"
        id="${this.id}"
        name="${this.name}"
        .value="${Pe(this.value)}"
        placeholder="${this.placeholder}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        ?required="${this.required}"
        rows="${this.textareaRows}"
        minlength="${T(this.minlength)}"
        maxlength="${T(this.maxlength)}"
        tabindex="${T(this.tabindex)}"
        autocomplete="${this.autocomplete}"
        @input="${this._handleInput}"
        @change="${this._handleChange}"
        @focus="${this._handleFocus}"
        @blur="${this._handleBlur}"
      ></textarea>
    `;
  }
  _handleInput(e) {
    const t = e.target;
    this.value = t.value, this._dirty || (this._dirty = !0, this.setAttribute("dirty", "")), this.dispatchEvent(new Event("input", { bubbles: !0, composed: !0 }));
  }
  _handleChange(e) {
    this._validate(), this.dispatchEvent(new Event("change", { bubbles: !0, composed: !0 }));
  }
  _handleFocus(e) {
    this._focused = !0, this.setAttribute("focused", ""), this.dispatchEvent(new FocusEvent("focus", { bubbles: !0, composed: !0 }));
  }
  _handleBlur(e) {
    this._focused = !1, this.removeAttribute("focused"), this._touched || (this._touched = !0, this.setAttribute("touched", "")), this._validate(), this.dispatchEvent(new FocusEvent("blur", { bubbles: !0, composed: !0 }));
  }
  _togglePassword() {
    var e;
    this._passwordVisible = !this._passwordVisible, (e = this.inputElement) == null || e.focus();
  }
  _incrementValue(e) {
    e.preventDefault(), !this.disabled && (this._increment(), this._spinnerTimeout = window.setTimeout(() => {
      this._spinnerInterval = window.setInterval(() => this._increment(), 50);
    }, 500));
  }
  _decrementValue(e) {
    e.preventDefault(), !this.disabled && (this._decrement(), this._spinnerTimeout = window.setTimeout(() => {
      this._spinnerInterval = window.setInterval(() => this._decrement(), 50);
    }, 500));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._stopSpinner();
  }
  _stopSpinner() {
    this._spinnerTimeout !== void 0 && (clearTimeout(this._spinnerTimeout), this._spinnerTimeout = void 0), this._spinnerInterval !== void 0 && (clearInterval(this._spinnerInterval), this._spinnerInterval = void 0);
  }
  _increment() {
    if (this.inputElement && this.type === q.number) {
      const e = this.inputElement, t = parseFloat(e.value) || 0;
      if (this.max !== void 0 && t >= this.max) return;
      const i = t + 1;
      this.value = i.toString(), this.dispatchEvent(new Event("change", { bubbles: !0, composed: !0 }));
    }
  }
  _decrement() {
    if (this.inputElement && this.type === q.number) {
      const e = this.inputElement, t = parseFloat(e.value) || 0;
      if (this.min !== void 0 && t <= this.min) return;
      const i = t - 1;
      this.value = i.toString(), this.dispatchEvent(new Event("change", { bubbles: !0, composed: !0 }));
    }
  }
  _validate() {
    let e = !0;
    if (this.required && !this.value && (e = !1), this.type === q.number && this.value) {
      const t = parseFloat(this.value);
      this.min !== void 0 && t < this.min && (e = !1), this.max !== void 0 && t > this.max && (e = !1);
    }
    return this.minlength && this.value.length < this.minlength && (e = !1), this.maxlength && this.value.length > this.maxlength && (e = !1), this.inputElement && (this.inputElement.validity.valid || (e = !1)), this._invalid = !e, this._invalid ? (this.setAttribute("invalid", ""), this._internals.setValidity({ customError: !0 }, "Invalid input")) : (this.removeAttribute("invalid"), this._internals.setValidity({})), e;
  }
  _updateActiveState() {
    const e = this.value && this.value.length > 0, t = !!this.placeholder;
    this._focused || e ? this.setAttribute("active", "") : this.removeAttribute("active"), t ? this.setAttribute("has-placeholder", "") : this.removeAttribute("has-placeholder"), this.label ? this.removeAttribute("no-label") : this.setAttribute("no-label", "");
  }
  // Form API
  formResetCallback() {
    this.value = "", this._touched = !1, this._dirty = !1, this.removeAttribute("touched"), this.removeAttribute("dirty");
  }
  formDisabledCallback(e) {
    this.disabled = e;
  }
};
de.styles = [oe, rt, Nt], de.formAssociated = !0;
let b = de;
f([
  Ce(".input-box, .input-textarea")
], b.prototype, "inputElement", 2);
f([
  a({ type: String })
], b.prototype, "type", 2);
f([
  a({ type: String })
], b.prototype, "label", 2);
f([
  a({ type: String })
], b.prototype, "placeholder", 2);
f([
  a({ type: String })
], b.prototype, "hint", 2);
f([
  a({ type: String })
], b.prototype, "value", 1);
f([
  a({ type: String })
], b.prototype, "name", 2);
f([
  a({ type: String })
], b.prototype, "id", 2);
f([
  a({ type: Boolean, reflect: !0 })
], b.prototype, "disabled", 1);
f([
  a({ type: Boolean, reflect: !0 })
], b.prototype, "readonly", 1);
f([
  a({ type: Boolean, reflect: !0 })
], b.prototype, "required", 1);
f([
  a({ type: Boolean })
], b.prototype, "autofocus", 1);
f([
  a({ type: String })
], b.prototype, "autocomplete", 2);
f([
  a({ type: String, reflect: !0 })
], b.prototype, "appearance", 2);
f([
  a({ type: String, reflect: !0 })
], b.prototype, "size", 2);
f([
  a({ type: Boolean, reflect: !0, attribute: "marginless" })
], b.prototype, "marginless", 1);
f([
  a({ type: Boolean })
], b.prototype, "withHint", 1);
f([
  a({ type: Boolean, attribute: "password-toggle-enabled" })
], b.prototype, "passwordToggleEnabled", 1);
f([
  a({ type: Number })
], b.prototype, "min", 2);
f([
  a({ type: Number })
], b.prototype, "max", 2);
f([
  a({ type: Number })
], b.prototype, "minlength", 2);
f([
  a({ type: Number })
], b.prototype, "maxlength", 2);
f([
  a({ type: Number, attribute: "textarea-rows" })
], b.prototype, "textareaRows", 2);
f([
  a({ type: String, attribute: "required-indicator" })
], b.prototype, "requiredIndicator", 2);
f([
  a({ type: Number })
], b.prototype, "tabindex", 2);
f([
  v()
], b.prototype, "_focused", 2);
f([
  v()
], b.prototype, "_passwordVisible", 2);
f([
  v()
], b.prototype, "_touched", 2);
f([
  v()
], b.prototype, "_dirty", 2);
f([
  v()
], b.prototype, "_invalid", 2);
customElements.get(Ue) || customElements.define(Ue, b);
const Qt = V`
  :host {
    position: relative;
    font-size: var(--font-size-m);
    background: var(--grey-800);
    display: inline-block;
    border: 1px solid var(--grey-700);
    width: 270px;
    padding: 0.5rem 0;
    border-radius: var(--radius-6);
    box-sizing: border-box;
    color: var(--grey-050);
  }

  :host(:focus) {
    outline: none;
  }

  /* ------------------------------------------------------------------ */
  /* Title row (navigation)                                              */
  /* ------------------------------------------------------------------ */

  .title-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--grey-800);
    color: var(--grey-050);
    padding: 0.69rem 0;
    font-weight: var(--font-weight-semibold);
    line-height: 1;
  }

  .title-row .title {
    color: var(--blue-400);
    min-width: 100px;
    padding: 4px 8px;
    cursor: pointer;
    border-radius: var(--radius-4);
    background: none;
    border: none;
    font: inherit;
    font-weight: var(--font-weight-semibold);
    font-size: inherit;
  }

  .title-row .title:hover {
    background: var(--grey-750);
  }

  .title-row .prev-month,
  .title-row .next-month {
    color: var(--grey-350);
    font-size: var(--font-size-xxs);
    border-radius: var(--radius-4);
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px 8px;
    line-height: 1;
  }

  .title-row .prev-month:hover,
  .title-row .next-month:hover {
    color: var(--grey-050);
  }

  .title-row .prev-month:disabled,
  .title-row .next-month:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  button {
    outline: 0px var(--blue-200);
  }

  button:focus-visible {
    outline: 2px solid var(--blue-200);
    outline-offset: 1px;
  }

  /* ------------------------------------------------------------------ */
  /* Day names row                                                       */
  /* ------------------------------------------------------------------ */

  .day-name-row {
    color: var(--grey-350);
    font-weight: var(--font-weight-semibold);
    display: flex;
  }

  .day-name {
    flex: 1 0 30px;
    margin: 0.1rem 0.2rem;
    line-height: 1.8rem;
    text-align: center;
    width: 1.8rem;
    height: 1.8rem;
  }

  /* ------------------------------------------------------------------ */
  /* Day grid                                                            */
  /* ------------------------------------------------------------------ */

  .day-container {
    margin-top: 0;
    width: 100%;
    border-collapse: collapse;
  }

  .day-row {
    display: flex;
  }

  .day-cell {
    flex: 1 0 30px;
    margin: 0.1rem 0.2rem;
    line-height: 1.8rem;
    text-align: center;
    width: 1.8rem;
    height: 1.8rem;
    padding: 0;
  }

  .day {
    color: var(--grey-050);
    height: 100%;
    width: 100%;
    max-height: 30px;
    max-width: 30px;
    line-height: 1.8rem;
    border-radius: 50%;
    text-align: center;
    transition: background 200ms;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    font: inherit;
    font-size: inherit;
  }

  .day.prev-month,
  .day.next-month {
    color: var(--grey-350);
    opacity: 0.2;
  }

  .day.today {
    background: var(--grey-750);
  }

  .day.active {
    background: var(--blue-400);
    color: var(--grey-050);
  }

  .day:hover:not(.active):not([disabled]) {
    background: var(--blue-400);
    color: var(--grey-050);
    opacity: 1;
  }

  .day:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  .day.focus:not([disabled]) {
    outline: 2px solid var(--blue-200);
    outline-offset: 1px;
  }

  /* ------------------------------------------------------------------ */
  /* Month grid                                                          */
  /* ------------------------------------------------------------------ */

  .months-container {
    margin: 0.5rem;
    color: var(--grey-050);
    width: calc(100% - 1rem);
    border-collapse: collapse;
  }

  .months-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border: 1px solid var(--grey-700);
  }

  .month-cell {
    padding: 0;
    border: 1px solid var(--grey-700);
  }

  .month {
    grid-auto-rows: auto;
    text-transform: uppercase;
    text-align: center;
    font-size: var(--font-size-s);
    width: 100%;
    padding: 0.75rem;
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    font: inherit;
    font-size: var(--font-size-s);
    text-transform: uppercase;
  }

  .month.active {
    background-color: var(--blue-400);
  }

  .month.current:not(.active) {
    background-color: var(--grey-750);
  }

  .month:hover:not(.active):not([disabled]) {
    background: var(--blue-400);
    color: var(--grey-050);
    opacity: 1;
  }

  .month:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  /* ------------------------------------------------------------------ */
  /* Year grid                                                           */
  /* ------------------------------------------------------------------ */

  .years-container {
    margin: 0.5rem;
    color: var(--grey-050);
    width: calc(100% - 1rem);
    border-collapse: collapse;
  }

  .years-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border: 1px solid var(--grey-700);
  }

  .year-cell {
    padding: 0;
    border: 1px solid var(--grey-700);
  }

  .year {
    grid-auto-rows: auto;
    text-transform: uppercase;
    text-align: center;
    font-size: var(--font-size-s);
    width: 100%;
    padding: 0.475rem;
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    font: inherit;
    font-size: var(--font-size-s);
  }

  .year.active {
    background-color: var(--blue-400);
  }

  .year.current:not(.active) {
    background-color: var(--grey-750);
  }

  .year:hover:not(.active):not([disabled]) {
    background: var(--blue-400);
    color: var(--grey-050);
    opacity: 1;
  }

  .year:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`, jt = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], Xt = ["S", "M", "T", "W", "T", "F", "S"];
function ye(n, e) {
  return n.getFullYear() === e.getFullYear() && n.getMonth() === e.getMonth() && n.getDate() === e.getDate();
}
function $t(n, e) {
  return n.getFullYear() === e.getFullYear();
}
function Ke(n, e) {
  return new Date(n, e + 1, 0).getDate();
}
function fe(n, e, t) {
  return {
    num: n.getDate(),
    dayOfWeek: n.getDay(),
    date: new Date(n),
    today: ye(n, t),
    prevMonth: n.getMonth() < e || n.getMonth() === 11 && e === 0,
    nextMonth: n.getMonth() > e || n.getMonth() === 0 && e === 11
  };
}
function k(n) {
  const e = /* @__PURE__ */ new Date(), t = n.getFullYear(), i = n.getMonth(), o = Ke(t, i), r = new Date(t, i, 1).getDay(), s = [];
  if (r > 0) {
    const d = Ke(t, i - 1);
    for (let y = r - 1; y >= 0; y--) {
      const w = new Date(t, i - 1, d - y);
      s.push(fe(w, i, e));
    }
  }
  for (let d = 1; d <= o; d++)
    s.push(fe(new Date(t, i, d), i, e));
  const l = s.length % 7;
  if (l > 0) {
    const d = 7 - l;
    for (let y = 1; y <= d; y++)
      s.push(fe(new Date(t, i + 1, y), i, e));
  }
  const c = [];
  for (let d = 0; d < s.length; d += 7)
    c.push(s.slice(d, d + 7));
  return c;
}
function Le(n) {
  return Math.floor(n / 20) * 20;
}
function we(n, e, t = "day") {
  if (!e) return !1;
  switch (t) {
    case "year":
      return n.getFullYear() < e.getFullYear();
    case "month":
      return n.getFullYear() < e.getFullYear() || n.getFullYear() === e.getFullYear() && n.getMonth() < e.getMonth();
    default:
      return new Date(n.getFullYear(), n.getMonth(), n.getDate()) < new Date(e.getFullYear(), e.getMonth(), e.getDate());
  }
}
function xe(n, e, t = "day") {
  if (!e) return !1;
  switch (t) {
    case "year":
      return n.getFullYear() > e.getFullYear();
    case "month":
      return n.getFullYear() > e.getFullYear() || n.getFullYear() === e.getFullYear() && n.getMonth() > e.getMonth();
    default:
      return new Date(n.getFullYear(), n.getMonth(), n.getDate()) > new Date(e.getFullYear(), e.getMonth(), e.getDate());
  }
}
var x = /* @__PURE__ */ ((n) => (n.date = "date", n.time = "time", n.datetime = "datetime", n))(x || {}), z = /* @__PURE__ */ ((n) => (n.HUMAN = "human", n.TIMEZONE = "timezone", n.LOCAL = "local", n.CUSTOM = "custom", n))(z || {});
const ei = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ti = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
], ii = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ni = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], Ge = {
  L: "MM/DD/YYYY",
  l: "M/D/YYYY",
  LL: "MMMM D, YYYY",
  ll: "MMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  lll: "MMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A",
  llll: "ddd, MMM D, YYYY h:mm A",
  LT: "h:mm A",
  LTS: "h:mm:ss A"
}, g = {
  shortDate: "l",
  shortTime: "LT",
  shortDateTime: "l LT",
  shortDateTimeSeconds: "l LTS",
  date: "ll",
  time: "LT",
  dateTime: "lll",
  dateTimeSeconds: "ll LTS",
  dateMonth: "MMM YYYY",
  dateYear: "YYYY",
  fullDate: "ddd, ll Z [(]zz[)]",
  fullTime: "LT Z [(]zz[)]",
  fullDateTime: "llll Z [(]zz[)]",
  fullDateMonth: "MMM YYYY Z [(]zz[)]",
  fullDateYear: "YYYY Z [(]zz[)]",
  localeDate: "L",
  localeDateTime: "L LT",
  localeTime: "LT",
  timezoneDate: "L Z",
  timezoneDateTime: "L LT Z",
  timezoneDateTimeSeconds: "L LTS Z",
  timezoneTime: "LT Z",
  timezoneDateMonth: "MMM YYYY Z",
  timezoneDateYear: "YYYY Z",
  locale: "LLL",
  shortLocale: "LL",
  fullLocale: "LLLL"
};
function D(n, e = 2) {
  return String(n).padStart(e, "0");
}
function dt(n, e) {
  if (!e)
    return {
      year: n.getFullYear(),
      month: n.getMonth(),
      day: n.getDate(),
      hour: n.getHours(),
      minute: n.getMinutes(),
      second: n.getSeconds(),
      ms: n.getMilliseconds(),
      dow: n.getDay()
    };
  try {
    const i = new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "numeric",
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: !1
    }).formatToParts(n), o = (s) => {
      var l;
      return ((l = i.find((c) => c.type === s)) == null ? void 0 : l.value) ?? "";
    }, r = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    return {
      year: parseInt(o("year"), 10),
      month: parseInt(o("month"), 10) - 1,
      day: parseInt(o("day"), 10),
      hour: parseInt(o("hour"), 10) % 24,
      minute: parseInt(o("minute"), 10),
      second: parseInt(o("second"), 10),
      ms: n.getMilliseconds(),
      dow: r[o("weekday")] ?? 0
    };
  } catch {
    return dt(n);
  }
}
function Ne(n, e) {
  if (!e) {
    const t = -n.getTimezoneOffset();
    return We(t);
  }
  try {
    const t = n.toLocaleString("en-US", { timeZone: "UTC" }), i = n.toLocaleString("en-US", { timeZone: e }), o = new Date(i).getTime() - new Date(t).getTime(), r = Math.round(o / 6e4);
    return We(r);
  } catch {
    return "+00:00";
  }
}
function We(n) {
  const e = n >= 0 ? "+" : "-", t = Math.abs(n);
  return `${e}${D(Math.floor(t / 60))}:${D(t % 60)}`;
}
function oi(n, e) {
  var t;
  try {
    return ((t = new Intl.DateTimeFormat("en-US", {
      timeZone: e || void 0,
      timeZoneName: "short"
    }).formatToParts(n).find((o) => o.type === "timeZoneName")) == null ? void 0 : t.value) ?? "";
  } catch {
    return "";
  }
}
function si(n) {
  const e = ["LLLL", "llll", "LLL", "lll", "LTS", "LL", "ll", "LT", "L", "l"];
  let t = n;
  for (const i of e)
    Ge[i] && (t = t.split(i).join(Ge[i]));
  return t;
}
const ri = /(MMMM|YYYY|dddd|MMM|ddd|SSS|MM|DD|HH|hh|mm|ss|YY|ZZ|zz|M|D|H|h|A|a|Z|z)/g;
function ai(n, e, t, i) {
  switch (n) {
    case "YYYY":
      return String(e.year);
    case "YY":
      return String(e.year).slice(-2);
    case "MMMM":
      return ti[e.month];
    case "MMM":
      return ei[e.month];
    case "MM":
      return D(e.month + 1);
    case "M":
      return String(e.month + 1);
    case "DD":
      return D(e.day);
    case "D":
      return String(e.day);
    case "dddd":
      return ni[e.dow];
    case "ddd":
      return ii[e.dow];
    case "HH":
      return D(e.hour);
    case "H":
      return String(e.hour);
    case "hh":
      return D(e.hour % 12 || 12);
    case "h":
      return String(e.hour % 12 || 12);
    case "mm":
      return D(e.minute);
    case "ss":
      return D(e.second);
    case "SSS":
      return D(e.ms, 3);
    case "A":
      return e.hour >= 12 ? "PM" : "AM";
    case "a":
      return e.hour >= 12 ? "pm" : "am";
    case "Z":
      return Ne(t, i);
    case "ZZ":
      return Ne(t, i).replace(":", "");
    case "zz":
    case "z":
      return oi(t, i);
    default:
      return n;
  }
}
function li(n) {
  return g[n] || n;
}
function Q(n, e, t) {
  const i = ve(t);
  let o = si(e);
  const r = [];
  o = o.replace(/\[([^\]]*)\]/g, (c, d) => (r.push(d), `\0${r.length - 1}\0`));
  const s = dt(n, i);
  return o.replace(ri, (c) => ai(c, s, n, i)).replace(/\x00(\d+)\x00/g, (c, d) => r[parseInt(d, 10)]);
}
function W(n) {
  if (n instanceof Date) return A(n) ? n : null;
  if (!n || typeof n != "string") return null;
  const e = n.trim();
  if (!e) return null;
  const t = new Date(e);
  if (A(t)) return t;
  const i = e.match(/^(\d{1,2})\/(\d{4})$/);
  if (i) {
    const s = new Date(parseInt(i[2], 10), parseInt(i[1], 10) - 1, 1);
    if (A(s)) return s;
  }
  const o = e.match(/^(\d{4})$/);
  if (o) {
    const s = new Date(parseInt(o[1], 10), 0, 1);
    if (A(s)) return s;
  }
  const r = e.match(/^(\w{3,})\s+(\d{4})$/);
  if (r) {
    const s = /* @__PURE__ */ new Date(`${r[1]} 1, ${r[2]}`);
    if (A(s)) return s;
  }
  return null;
}
function A(n) {
  return n instanceof Date && !isNaN(n.getTime());
}
function Ze(n, e) {
  if (!e || !A(n)) return n;
  const t = new Date(n), i = [
    ["millisecond", () => {
    }],
    ["second", () => t.setMilliseconds(0)],
    [
      "minute",
      () => {
        t.setMilliseconds(0), t.setSeconds(0);
      }
    ],
    [
      "hour",
      () => {
        t.setMilliseconds(0), t.setSeconds(0), t.setMinutes(0);
      }
    ],
    [
      "date",
      () => {
        t.setMilliseconds(0), t.setSeconds(0), t.setMinutes(0), t.setHours(0);
      }
    ],
    [
      "month",
      () => {
        t.setMilliseconds(0), t.setSeconds(0), t.setMinutes(0), t.setHours(0), t.setDate(1);
      }
    ],
    [
      "year",
      () => {
        t.setMilliseconds(0), t.setSeconds(0), t.setMinutes(0), t.setHours(0), t.setDate(1), t.setMonth(0);
      }
    ]
  ], o = i.findIndex(([r]) => r === e);
  return o >= 0 && i[o][1](), t;
}
function ci(n, e, t) {
  switch (n) {
    case z.HUMAN:
    case z.TIMEZONE:
      switch (e) {
        case x.date:
          return t === "month" ? g.timezoneDateMonth : t === "year" ? g.timezoneDateYear : g.timezoneDate;
        case x.time:
          return g.timezoneTime;
        default:
          return g.timezoneDateTime;
      }
    case z.LOCAL:
      switch (e) {
        case x.date:
          return t === "month" ? g.dateMonth : t === "year" ? g.dateYear : g.localeDate;
        case x.time:
          return g.localeTime;
        default:
          return g.localeDateTime;
      }
    case z.CUSTOM:
      switch (e) {
        case x.date:
          return t === "month" ? g.dateMonth : t === "year" ? g.dateYear : g.date;
        case x.time:
          return g.time;
        default:
          return g.dateTime;
      }
    default:
      return g.localeDate;
  }
}
function _i(n, e, t) {
  switch (n) {
    case z.HUMAN:
    case z.TIMEZONE:
      switch (e) {
        case x.date:
          return t === "month" ? g.fullDateMonth : t === "year" ? g.fullDateYear : g.fullDate;
        case x.time:
          return g.fullTime;
        default:
          return g.fullDateTime;
      }
    case z.LOCAL:
      switch (e) {
        case x.date:
          return t === "month" ? g.dateMonth : t === "year" ? g.dateYear : g.localeDate;
        case x.time:
          return g.localeTime;
        default:
          return g.localeDateTime;
      }
    case z.CUSTOM:
      switch (e) {
        case x.date:
          return t === "month" ? g.dateMonth : t === "year" ? g.dateYear : g.date;
        case x.time:
          return g.time;
        default:
          return g.dateTime;
      }
    default:
      return g.localeDate;
  }
}
function ve(n) {
  if (n)
    return n.toLowerCase() === "utc" ? "UTC" : n;
}
function Ai(n, e) {
  if (!n || !A(n)) return "";
  const t = n.getFullYear(), i = D(n.getMonth() + 1), o = D(n.getDate()), r = D(n.getHours()), s = D(n.getMinutes()), l = D(n.getSeconds());
  switch (e) {
    case "time":
      return `${r}:${s}:${l}`;
    case "datetime":
    case "datetime-local":
      return `${t}-${i}-${o}T${r}:${s}:${l}`;
    case "month":
      return `${t}-${i}`;
    default:
      return `${t}-${i}-${o}`;
  }
}
function Qe(n, e, t) {
  if (!A(n)) return !1;
  const i = e ? W(e) : null, o = t ? W(t) : null;
  return !!(i && A(i) && n < i || o && A(o) && n > o);
}
var di = Object.defineProperty, ui = Object.getOwnPropertyDescriptor, S = (n, e, t, i) => {
  for (var o = i > 1 ? void 0 : i ? ui(e, t) : e, r = n.length - 1, s; r >= 0; r--)
    (s = n[r]) && (o = (i ? s(e, t, o) : s(o)) || o);
  return i && o && di(e, t, o), o;
};
const je = "swim-calendar", ke = class ke extends F {
  constructor() {
    super(...arguments), this._value = null, this.disabled = !1, this._currentView = "date", this._focusDate = /* @__PURE__ */ new Date(), this._weeks = [], this._startYear = 0, this._currentDate = /* @__PURE__ */ new Date(), this._onDayKeyDown = (e) => {
      let t = !1;
      switch (e.code) {
        case "ArrowDown":
          this._moveFocus(1, "week"), t = !0;
          break;
        case "ArrowUp":
          this._moveFocus(-1, "week"), t = !0;
          break;
        case "ArrowLeft":
          this._moveFocus(-1, "day"), t = !0;
          break;
        case "ArrowRight":
          this._moveFocus(1, "day"), t = !0;
          break;
        case "PageUp":
          this._moveFocus(-1, e.altKey ? "year" : "month"), t = !0;
          break;
        case "PageDown":
          this._moveFocus(1, e.altKey ? "year" : "month"), t = !0;
          break;
        case "Home": {
          const i = new Date(this._focusDate);
          e.altKey ? i.setDate(1) : i.setDate(i.getDate() - i.getDay()), this._focusDate = i, this._weeks = k(this._focusDate), this.requestUpdate(), this.updateComplete.then(() => this.focusDay()), t = !0;
          break;
        }
        case "End": {
          const i = new Date(this._focusDate);
          e.altKey ? i.setMonth(i.getMonth() + 1, 0) : i.setDate(i.getDate() + (6 - i.getDay())), this._focusDate = i, this._weeks = k(this._focusDate), this.requestUpdate(), this.updateComplete.then(() => this.focusDay()), t = !0;
          break;
        }
        case "Enter":
          setTimeout(() => {
            this.dispatchEvent(new CustomEvent("day-key-enter", { bubbles: !0, composed: !0 }));
          }, 200);
          break;
      }
      t && (e.stopPropagation(), e.preventDefault());
    }, this._onMonthKeyDown = (e) => {
      let t = !1;
      switch (e.code) {
        case "ArrowDown":
          this._moveFocus(3, "month"), t = !0;
          break;
        case "ArrowUp":
          this._moveFocus(-3, "month"), t = !0;
          break;
        case "ArrowLeft":
          this._moveFocus(-1, "month"), t = !0;
          break;
        case "ArrowRight":
          this._moveFocus(1, "month"), t = !0;
          break;
        case "PageUp":
          this._moveFocus(-1, "year"), t = !0;
          break;
        case "PageDown":
          this._moveFocus(1, "year"), t = !0;
          break;
        case "Enter":
          setTimeout(() => {
            this.dispatchEvent(new CustomEvent("day-key-enter", { bubbles: !0, composed: !0 }));
          }, 200);
          break;
      }
      t && (e.stopPropagation(), e.preventDefault());
    }, this._onYearKeyDown = (e) => {
      let t = !1;
      switch (e.code) {
        case "ArrowDown":
          this._moveFocus(4, "year"), t = !0;
          break;
        case "ArrowUp":
          this._moveFocus(-4, "year"), t = !0;
          break;
        case "ArrowLeft":
          this._moveFocus(-1, "year"), t = !0;
          break;
        case "ArrowRight":
          this._moveFocus(1, "year"), t = !0;
          break;
        case "PageUp":
          this._moveFocus(-20, "year"), t = !0;
          break;
        case "PageDown":
          this._moveFocus(20, "year"), t = !0;
          break;
        case "Enter":
          setTimeout(() => {
            this.dispatchEvent(new CustomEvent("day-key-enter", { bubbles: !0, composed: !0 }));
          }, 200);
          break;
      }
      t && (e.stopPropagation(), e.preventDefault());
    };
  }
  get value() {
    return this._value;
  }
  set value(e) {
    const t = this._value;
    e && A(e) ? this._value = new Date(e) : this._value = null, this.requestUpdate("value", t);
  }
  set minView(e) {
    this._minView = e, this._validateView(), this.requestUpdate();
  }
  get minView() {
    return this._minView || "date";
  }
  // today, for highlighting
  // ---------------------------------------------------------------------------
  // Lifecycle
  // ---------------------------------------------------------------------------
  connectedCallback() {
    super.connectedCallback(), this._init();
  }
  updated(e) {
    super.updated(e), e.has("value") && this._value && (this._focusDate = new Date(this._value), this._weeks = k(this._focusDate), this._startYear = Le(this._focusDate.getFullYear()));
  }
  // ---------------------------------------------------------------------------
  // Public methods
  // ---------------------------------------------------------------------------
  /** Focus the active/focused day button. */
  focusDay() {
    var t;
    const e = (t = this.shadowRoot) == null ? void 0 : t.querySelector("button.focus");
    e == null || e.focus();
  }
  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------
  render() {
    switch (this._currentView) {
      case "month":
        return this._renderMonthView();
      case "year":
        return this._renderYearView();
      default:
        return this._renderDateView();
    }
  }
  _renderDateView() {
    const e = this._formatMonthYear(this._focusDate);
    return p`
      <div class="text-center">
        <div class="title-row">
          <button
            type="button"
            class="prev-month"
            ?disabled="${this.disabled}"
            title="Previous Month"
            @click="${this._prevMonth}"
          >
            <swim-icon font-icon="arrow-left"></swim-icon>
          </button>
          <button type="button" class="title" @click="${this._changeViews}">${e}</button>
          <button
            type="button"
            class="next-month"
            ?disabled="${this.disabled}"
            title="Next Month"
            @click="${this._nextMonth}"
          >
            <swim-icon font-icon="arrow-right"></swim-icon>
          </button>
        </div>
        <div class="day-name-row">${Xt.map((t) => p`<div class="day-name text-center">${t}</div>`)}</div>
        <table class="day-container" role="grid">
          ${this._weeks.map(
      (t) => p`
              <tr class="day-row" role="row">
                ${t.map((i) => {
        if (!i.num)
          return p`<td class="day-cell text-center" role="gridcell"></td>`;
        const o = this._value ? ye(i.date, this._value) : !1, r = ye(i.date, this._focusDate), s = this.disabled || this._isDayDisabled(i.date), l = ["day"];
        return i.prevMonth && l.push("prev-month"), i.nextMonth && l.push("next-month"), i.today && l.push("today"), o && l.push("active"), r && !s && l.push("focus"), p`
                    <td class="day-cell text-center" role="gridcell">
                      <button
                        type="button"
                        class="${l.join(" ")}"
                        ?disabled="${s}"
                        tabindex="${r && !s ? 0 : -1}"
                        @click="${() => this._onDayClick(i)}"
                        @keydown="${this._onDayKeyDown}"
                      >
                        ${i.num}
                      </button>
                    </td>
                  `;
      })}
              </tr>
            `
    )}
        </table>
      </div>
    `;
  }
  _renderMonthView() {
    const e = String(this._focusDate.getFullYear());
    return p`
      <div class="text-center">
        <div class="title-row">
          <button
            type="button"
            class="prev-month"
            ?disabled="${this.disabled}"
            title="Previous Year"
            @click="${this._prevYear}"
          >
            <swim-icon font-icon="arrow-left"></swim-icon>
          </button>
          <button type="button" class="title" @click="${this._changeViews}">${e}</button>
          <button
            type="button"
            class="next-month"
            ?disabled="${this.disabled}"
            title="Next Year"
            @click="${this._nextYear}"
          >
            <swim-icon font-icon="arrow-right"></swim-icon>
          </button>
        </div>
        <table class="months-container" role="grid">
          <tr class="months-row" role="row">
            ${jt.map((t, i) => {
      const o = this._isMonthActive(i), r = this._isCurrentMonth(i), s = this._focusDate.getMonth() === i && $t(this._focusDate, this._focusDate), l = this.disabled || this._isMonthDisabled(i), c = ["month"];
      return o && c.push("active"), r && c.push("current"), s && c.push("focus"), p`
                <td class="month-cell text-center" role="gridcell">
                  <button
                    type="button"
                    class="${c.join(" ")}"
                    ?disabled="${l}"
                    tabindex="${s && !l ? 0 : -1}"
                    @click="${() => this._onMonthClick(i)}"
                    @keydown="${this._onMonthKeyDown}"
                  >
                    ${t}
                  </button>
                </td>
              `;
    })}
          </tr>
        </table>
      </div>
    `;
  }
  _renderYearView() {
    const e = Array.from({ length: 20 }, (t, i) => this._startYear + i);
    return p`
      <div class="text-center">
        <div class="title-row">
          <button
            type="button"
            class="prev-month"
            ?disabled="${this.disabled}"
            title="Previous Two Decades"
            @click="${this._prevTwoDecades}"
          >
            <swim-icon font-icon="arrow-left"></swim-icon>
          </button>
          <button type="button" class="title" @click="${this._changeViews}">
            ${this._startYear} - ${this._startYear + 20}
          </button>
          <button
            type="button"
            class="next-month"
            ?disabled="${this.disabled}"
            title="Next Two Decades"
            @click="${this._nextTwoDecades}"
          >
            <swim-icon font-icon="arrow-right"></swim-icon>
          </button>
        </div>
        <table class="years-container" role="grid">
          <tr class="years-row" role="row">
            ${e.map((t) => {
      const i = this._isYearActive(t), o = t === this._currentDate.getFullYear(), r = t === this._focusDate.getFullYear(), s = this.disabled || this._isYearDisabled(t), l = ["year"];
      return i && l.push("active"), o && l.push("current"), r && l.push("focus"), p`
                <td class="year-cell text-center" role="gridcell">
                  <button
                    type="button"
                    class="${l.join(" ")}"
                    ?disabled="${s}"
                    tabindex="${r && !s ? 0 : -1}"
                    @click="${() => this._onYearClick(t)}"
                    @keydown="${this._onYearKeyDown}"
                  >
                    ${t}
                  </button>
                </td>
              `;
    })}
          </tr>
        </table>
      </div>
    `;
  }
  // ---------------------------------------------------------------------------
  // Internal helpers
  // ---------------------------------------------------------------------------
  _init() {
    this._value && (this._focusDate = new Date(this._value)), this._weeks = k(this._focusDate), this._currentDate = /* @__PURE__ */ new Date(), this._startYear = Le(this._focusDate.getFullYear()), this._validateView();
  }
  _validateView() {
    [
      "date",
      "month",
      "year"
      /* Year */
    ].indexOf(
      this._minView || "date"
      /* Date */
    ) < 0 && (this._minView = "date"), this._currentView = this._minView || "date";
  }
  _formatMonthYear(e) {
    return `${[
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ][e.getMonth()]} ${e.getFullYear()}`;
  }
  _resolveMin() {
    return this.minDate ? this.minDate instanceof Date ? this.minDate : W(this.minDate) : null;
  }
  _resolveMax() {
    return this.maxDate ? this.maxDate instanceof Date ? this.maxDate : W(this.maxDate) : null;
  }
  _isDayDisabled(e) {
    return we(e, this._resolveMin(), "day") || xe(e, this._resolveMax(), "day");
  }
  _isMonthDisabled(e) {
    const t = new Date(this._focusDate.getFullYear(), e, 1);
    return we(t, this._resolveMin(), "month") || xe(t, this._resolveMax(), "month");
  }
  _isYearDisabled(e) {
    const t = new Date(e, 0, 1);
    return we(t, this._resolveMin(), "year") || xe(t, this._resolveMax(), "year");
  }
  _isMonthActive(e) {
    return this._value ? this._value.getMonth() === e && this._value.getFullYear() === this._focusDate.getFullYear() : !1;
  }
  _isCurrentMonth(e) {
    return this._currentDate.getMonth() === e && this._currentDate.getFullYear() === this._focusDate.getFullYear();
  }
  _isYearActive(e) {
    return this._value ? this._value.getFullYear() === e : !1;
  }
  // ---------------------------------------------------------------------------
  // Navigation
  // ---------------------------------------------------------------------------
  _prevMonth() {
    const e = new Date(this._focusDate);
    e.setMonth(e.getMonth() - 1), this._focusDate = e, this._weeks = k(this._focusDate);
  }
  _nextMonth() {
    const e = new Date(this._focusDate);
    e.setMonth(e.getMonth() + 1), this._focusDate = e, this._weeks = k(this._focusDate);
  }
  _prevYear() {
    const e = new Date(this._focusDate);
    e.setFullYear(e.getFullYear() - 1), this._focusDate = e;
  }
  _nextYear() {
    const e = new Date(this._focusDate);
    e.setFullYear(e.getFullYear() + 1), this._focusDate = e;
  }
  _prevTwoDecades() {
    this._startYear -= 20;
  }
  _nextTwoDecades() {
    this._startYear += 20;
  }
  _changeViews() {
    this._currentView === "date" ? this._currentView = "month" : this._currentView === "month" ? this._currentView = "year" : this._currentView = this._minView || "date", this._weeks = k(this._focusDate);
  }
  // ---------------------------------------------------------------------------
  // Day interaction
  // ---------------------------------------------------------------------------
  _onDayClick(e) {
    this._focusDate = new Date(e.date), this._value = new Date(e.date), (e.prevMonth || e.nextMonth) && (this._weeks = k(this._focusDate)), this.requestUpdate(), this.dispatchEvent(new CustomEvent("change", { detail: this._value, bubbles: !0, composed: !0 }));
  }
  _onMonthClick(e) {
    const t = new Date(this._focusDate);
    t.setMonth(e), this._focusDate = t, this._value = new Date(t), (this._minView || "date") !== "month" && (this._currentView = "date", this._weeks = k(this._focusDate)), this.requestUpdate(), this.dispatchEvent(new CustomEvent("change", { detail: this._value, bubbles: !0, composed: !0 }));
  }
  _onYearClick(e) {
    const t = new Date(this._focusDate);
    t.setFullYear(e), this._focusDate = t, this._value = new Date(t), (this._minView || "date") !== "year" && (this._currentView = "month", this._weeks = k(this._focusDate)), this.requestUpdate(), this.dispatchEvent(new CustomEvent("change", { detail: this._value, bubbles: !0, composed: !0 }));
  }
  // ---------------------------------------------------------------------------
  // Keyboard navigation
  // ---------------------------------------------------------------------------
  _moveFocus(e, t) {
    const i = new Date(this._focusDate);
    switch (t) {
      case "day":
        i.setDate(i.getDate() + e);
        break;
      case "week":
        i.setDate(i.getDate() + e * 7);
        break;
      case "month":
        i.setMonth(i.getMonth() + e);
        break;
      case "year":
        i.setFullYear(i.getFullYear() + e);
        break;
    }
    this._focusDate = i, this._weeks = k(this._focusDate), this._focusDate.getFullYear() < this._startYear ? this._prevTwoDecades() : this._focusDate.getFullYear() > this._startYear + 20 && this._nextTwoDecades(), this.requestUpdate(), this.updateComplete.then(() => this.focusDay());
  }
};
ke.styles = [oe, Qt];
let E = ke;
S([
  a({ attribute: !1 })
], E.prototype, "value", 1);
S([
  a({ attribute: "min-date" })
], E.prototype, "minDate", 2);
S([
  a({ attribute: "max-date" })
], E.prototype, "maxDate", 2);
S([
  a({ type: Boolean, reflect: !0 })
], E.prototype, "disabled", 2);
S([
  a({ type: String })
], E.prototype, "timezone", 2);
S([
  a({ type: String, attribute: "min-view" })
], E.prototype, "minView", 1);
S([
  v()
], E.prototype, "_currentView", 2);
S([
  v()
], E.prototype, "_focusDate", 2);
S([
  v()
], E.prototype, "_weeks", 2);
S([
  v()
], E.prototype, "_startYear", 2);
customElements.get(je) || customElements.define(je, E);
const hi = [
  oe,
  rt,
  V`
    :host {
      --swim-dialog-bg: var(--grey-800);
      --swim-dialog-header-color: var(--grey-100);
      --swim-dialog-body-color: var(--grey-200);
    }

    .swim-dialog {
      position: fixed;
      display: flex;
      align-items: center;
      justify-content: center;
      inset: 0;
      width: 100%;
      height: 100vh;
      pointer-events: none;
      z-index: var(--swim-dialog-z, 991);
    }

    /* Matches ngx-overlay: black at 80% opacity when active */
    .swim-dialog__backdrop {
      position: absolute;
      inset: 0;
      background-color: var(--black);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.1s ease-in;
    }

    .swim-dialog.swim-dialog--open .swim-dialog__backdrop {
      opacity: 0.8;
    }

    .swim-dialog__content {
      pointer-events: auto;
      position: relative;
      border-radius: var(--radius-8);
      box-shadow: var(--shadow-3);
      background: var(--swim-dialog-bg);
      padding: 1.4rem;
      min-width: 250px;
      font-size: var(--font-size-m);
      color: var(--swim-dialog-body-color);
      animation-fill-mode: forwards;
      opacity: 0;
      transform: scale3d(1.2, 1.2, 1);
      transition: opacity 0.2s ease-out, transform 0.2s ease-out;
      z-index: calc(var(--swim-dialog-z, 991) + 1);
    }

    .swim-dialog.swim-dialog--open .swim-dialog__content {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }

    .swim-dialog__content--large,
    .swim-dialog__content--medium {
      padding: var(--spacing-0);
      width: calc(100vw - 120px);
      background-color: transparent;
    }

    .swim-dialog__content--large {
      height: calc(100vh - 120px);
      max-height: calc(100vh - 120px);
      border-radius: var(--radius-64);
      display: flex;
      flex-direction: column;
    }

    .swim-dialog__content--large .swim-dialog__body {
      flex: 1 1 auto;
      min-height: 0;
      max-height: none;
    }

    .swim-dialog__content--medium {
      height: auto;
      min-height: 340px;
      max-height: 75vh;
      max-width: 900px;
      border-radius: var(--radius-64);
      display: flex;
      flex-direction: column;
    }

    .swim-dialog__content--medium .swim-dialog__body {
      flex: 1 1 auto;
      min-height: 0;
      max-height: none;
    }

    .swim-dialog__close {
      position: absolute;
      font-size: var(--font-size-s);
      color: var(--grey-400);
      right: 1rem;
      top: 1rem;
      background: none;
      border: none;
      padding: 0.25rem;
      cursor: pointer;
      line-height: 1;
      border-radius: var(--radius-4);
    }

    .swim-dialog__close:hover,
    .swim-dialog__close:active {
      color: var(--white);
    }

    .swim-dialog__close:focus-visible {
      outline: 2px solid var(--blue-500);
      outline-offset: 2px;
    }

    .swim-dialog__header {
      margin: 0 0 1.4rem 0;
    }

    .swim-dialog__title,
    .swim-dialog__header h1,
    .swim-dialog__header h2 {
      font-size: var(--font-size-3xl);
      font-weight: 400;
      margin: 0 0 1.4rem 0;
      color: var(--swim-dialog-header-color);
    }

    .swim-dialog__content--medium .swim-dialog__header,
    .swim-dialog__content--large .swim-dialog__header {
      border-top-left-radius: var(--radius-64);
      border-top-right-radius: var(--radius-64);
    }

    .swim-dialog__body {
      margin: 0;
      max-height: calc(100vh - 12rem);
      min-height: 0;
    }

    .swim-dialog__footer {
      text-align: right;
      margin-top: 1.4rem;
    }

    .swim-dialog__footer .btn,
    .swim-dialog__footer swim-button {
      margin-left: var(--spacing-4);
    }

    /* Full screen variant (class="swim-dialog--full-screen" on host or wrapper) */
    :host(.swim-dialog--full-screen) .swim-dialog,
    .swim-dialog.swim-dialog--full-screen {
      width: 100vw;
      height: 100%;
      overflow-y: auto;
    }

    :host(.swim-dialog--full-screen) .swim-dialog__content,
    .swim-dialog.swim-dialog--full-screen .swim-dialog__content {
      box-shadow: none;
      width: 100%;
      min-height: 100vh;
    }

    :host(.swim-dialog--full-screen) .swim-dialog__close,
    .swim-dialog.swim-dialog--full-screen .swim-dialog__close {
      right: 1rem;
      top: 2rem;
    }

    /* Wizard / custom header-footer variant (class="wizard" on root) - style slotted header/footer */
    .swim-dialog.wizard .swim-dialog__content {
      padding: var(--spacing-0);
      background: var(--grey-725);
    }

    .swim-dialog.wizard .swim-dialog__body slot::slotted(.swim-dialog__header) {
      padding: 1.4rem;
      background: var(--grey-750);
      border-top-left-radius: var(--radius-16);
      border-top-right-radius: var(--radius-16);
      margin: 0;
      display: block;
    }

    .swim-dialog.wizard .swim-dialog__body slot::slotted(.swim-dialog__footer) {
      padding: 1.4rem;
      margin-top: 0;
      display: block;
    }
  `
];
var j = /* @__PURE__ */ ((n) => (n.Regular = "regular", n.Medium = "medium", n.Large = "large", n))(j || {}), mi = Object.defineProperty, gi = Object.getOwnPropertyDescriptor, C = (n, e, t, i) => {
  for (var o = i > 1 ? void 0 : i ? gi(e, t) : e, r = n.length - 1, s; r >= 0; r--)
    (s = n[r]) && (o = (i ? s(e, t, o) : s(o)) || o);
  return i && o && mi(e, t, o), o;
};
const Xe = "swim-dialog", ze = class ze extends F {
  constructor() {
    super(...arguments), this.dialogTitle = "", this.content = "", this.class = "", this.cssClass = "", this.format = j.Regular, this.showBackdrop = !0, this._closeButton = !0, this._visible = !1, this._zIndex = 991, this._contentId = `swim-dialog-content-${Math.random().toString(36).slice(2, 11)}`, this._titleId = `swim-dialog-title-${Math.random().toString(36).slice(2, 11)}`, this._previousActiveElement = null;
  }
  get title() {
    return this.dialogTitle;
  }
  set title(e) {
    e && (this.dialogTitle = e);
  }
  get closeButton() {
    return this._closeButton;
  }
  set closeButton(e) {
    this._closeButton = M(e);
  }
  get visible() {
    return this._visible;
  }
  set visible(e) {
    const t = M(e);
    this._visible !== t && (this._visible = t, t ? (this._previousActiveElement = typeof document < "u" ? document.activeElement : null, this.dispatchEvent(new CustomEvent("open", { bubbles: !0 }))) : (this._restoreFocus(), this.dispatchEvent(new CustomEvent("close", { detail: void 0, bubbles: !0 }))));
  }
  get zIndex() {
    return this._zIndex;
  }
  set zIndex(e) {
    this._zIndex = ct(e, 991);
  }
  get _contentzIndex() {
    return this.zIndex + 1;
  }
  get _canClose() {
    return this.beforeClose ? this.beforeClose() : !0;
  }
  _restoreFocus() {
    this._previousActiveElement && typeof this._previousActiveElement.focus == "function" && this._previousActiveElement.focus(), this._previousActiveElement = null;
  }
  /** Show the dialog */
  show() {
    this.visible = !0;
  }
  /** Hide the dialog (respects beforeClose) */
  hide() {
    this._canClose && (this.visible = !1);
  }
  firstUpdated() {
    this.visible && this._contentEl && this._contentEl.focus({ preventScroll: !0 });
  }
  updated(e) {
    e.has("visible") && this.visible && this._contentEl && requestAnimationFrame(() => {
      var t;
      (t = this._contentEl) == null || t.focus({ preventScroll: !0 });
    });
  }
  render() {
    if (!this.visible) return h;
    const e = this.format === j.Regular || this.format === "regular", t = this.format === j.Large || this.format === "large", i = this.format === j.Medium || this.format === "medium", o = [
      "swim-dialog__content",
      this.cssClass,
      t ? "swim-dialog__content--large" : "",
      i ? "swim-dialog__content--medium" : ""
    ].filter(Boolean).join(" "), r = this.class.includes("swim-dialog--full-screen"), s = ["swim-dialog", "swim-dialog--open", this.class, r ? "swim-scroll" : ""].filter(Boolean).join(" ");
    return p`
      <div class="${s}" style="--swim-dialog-z: ${this.zIndex}" role="presentation">
        ${this.showBackdrop ? p`<div class="swim-dialog__backdrop" aria-hidden="true"></div>` : h}
        <div
          part="content"
          class="${o}"
          style="z-index: ${this._contentzIndex}"
          tabindex="-1"
          role="dialog"
          aria-modal="true"
          aria-labelledby="${this.dialogTitle ? this._titleId : h}"
          id="${this._contentId}"
        >
          ${e ? p`
                ${this.closeButton ? p`
                      <button
                        part="close-button"
                        type="button"
                        class="swim-dialog__close"
                        aria-label="Close dialog"
                        @click="${this.hide}"
                      >
                        <swim-icon font-icon="x"></swim-icon>
                      </button>
                    ` : h}
                ${this.dialogTitle ? p`
                      <div class="swim-dialog__header">
                        <h2 id="${this._titleId}" class="swim-dialog__title">${this.dialogTitle}</h2>
                      </div>
                    ` : h}
                <div class="swim-dialog__body swim-scroll">
                  <slot></slot>
                  ${this.content ? p`<div>${this.content}</div>` : h}
                </div>
              ` : p`
                <div class="swim-dialog__body swim-scroll">
                  <slot></slot>
                  ${this.content ? p`<div>${this.content}</div>` : h}
                </div>
              `}
        </div>
      </div>
    `;
  }
};
ze.styles = hi;
let _ = ze;
C([
  a({ type: String, attribute: "dialog-title" })
], _.prototype, "dialogTitle", 2);
C([
  a({ type: String })
], _.prototype, "title", 1);
C([
  a({ type: String })
], _.prototype, "content", 2);
C([
  a({ type: String })
], _.prototype, "class", 2);
C([
  a({ type: String, attribute: "css-class" })
], _.prototype, "cssClass", 2);
C([
  a({ type: String, reflect: !0 })
], _.prototype, "format", 2);
C([
  a({
    type: Boolean,
    attribute: "show-backdrop",
    reflect: !0,
    converter: {
      fromAttribute: (n) => n === null ? !0 : n !== "false" && n !== "0",
      toAttribute: (n) => n ? "" : "false"
    }
  })
], _.prototype, "showBackdrop", 2);
C([
  a({ type: Boolean, attribute: "close-button" })
], _.prototype, "closeButton", 1);
C([
  a({ type: Boolean, reflect: !0 })
], _.prototype, "visible", 1);
C([
  a({ type: Number })
], _.prototype, "zIndex", 1);
C([
  a({ attribute: !1 })
], _.prototype, "beforeClose", 2);
C([
  v()
], _.prototype, "_contentId", 2);
C([
  v()
], _.prototype, "_titleId", 2);
C([
  Ce(".swim-dialog__content")
], _.prototype, "_contentEl", 2);
customElements.get(Xe) || customElements.define(Xe, _);
const bi = V`
  :host {
    position: relative;
    display: block;
    max-width: 100%;
  }

  :host([autosize]) {
    display: inline-block;
  }

  /* ------------------------------------------------------------------ */
  /* Container                                                          */
  /* ------------------------------------------------------------------ */

  .swim-date-time__container {
    position: relative;
  }

  /* Ensure the inner swim-input leaves space for the calendar button */
  .swim-date-time__container swim-input {
    --swim-input-padding-right: 28px;
  }

  /* Override swim-input display when host is autosize */
  :host([autosize]) .swim-date-time__container swim-input {
    display: inline-block;
  }

  /* ------------------------------------------------------------------ */
  /* Calendar / clock button                                            */
  /* ------------------------------------------------------------------ */

  .swim-date-time__calendar-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    padding: 0;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--grey-200);
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 2;
    font-size: var(--font-size-m);
    line-height: 1;
  }

  .swim-date-time__calendar-btn:hover {
    color: var(--grey-050);
  }

  .swim-date-time__calendar-btn:disabled {
    color: var(--grey-400);
    cursor: not-allowed;
    pointer-events: none;
  }

  .swim-date-time__calendar-btn:focus-visible {
    outline: 2px solid var(--blue-500);
    outline-offset: 2px;
    border-radius: var(--radius-2);
  }

  /* No-label adjustment (button at top instead of center) */
  :host(:not([has-label])) .swim-date-time__calendar-btn {
    top: 0.5rem;
    transform: translateY(0);
  }

  /* Fill appearance */
  :host([appearance='fill']) .swim-date-time__calendar-btn {
    right: 10px;
  }

  /* Autosize: tweak vertical alignment */
  :host([autosize]) .swim-date-time__calendar-btn {
    transform: translateY(-25%);
  }

  :host([autosize][appearance='fill']) .swim-date-time__calendar-btn {
    transform: translateY(-15%);
  }

  :host([autosize][marginless]) .swim-date-time__calendar-btn {
    transform: translateY(-35%);
  }

  :host([autosize]:not([has-label])) .swim-date-time__calendar-btn {
    transform: translateY(0);
  }

  /* ------------------------------------------------------------------ */
  /* Invalid / out-of-range state                                       */
  /* ------------------------------------------------------------------ */

  :host([date-invalid]) swim-input,
  :host([date-out-of-range]) swim-input {
    --swim-input-underline-color: var(--red-500);
    --swim-input-label-color: var(--red-500);
    --swim-input-hint-color: var(--red-500);
    --swim-input-caret-color: var(--red-500);
  }

  /* Force invalid styling on the inner input via attribute forwarding */
  :host([date-invalid]) swim-input,
  :host([date-out-of-range]) swim-input {
    color: inherit;
  }

  /* ------------------------------------------------------------------ */
  /* Dialog: override swim-dialog content padding                        */
  /* ------------------------------------------------------------------ */

  swim-dialog::part(content) {
    padding: 0 !important;
    width: auto;
    min-width: auto;
    background: transparent;
    box-shadow: none;
    border-radius: 0;
  }

  .swim-date-time__dialog {
    padding: 0;
    width: auto;
  }

  /* ------------------------------------------------------------------ */
  /* Selected header                                                     */
  /* ------------------------------------------------------------------ */

  .swim-date-time__dialog-header {
    border-top: 1px solid var(--grey-700);
    border-left: 1px solid var(--grey-700);
    border-right: 1px solid var(--grey-700);
    border-top-left-radius: var(--radius-6);
    border-top-right-radius: var(--radius-6);
    padding: 4px 20px;
    background: var(--grey-800);
    color: var(--grey-100);
    text-align: center;
  }

  .swim-date-time__dialog-header h1 {
    font-size: 1.2rem;
    white-space: nowrap;
    margin: 0.5rem 0;
    font-weight: normal;
  }

  .swim-date-time__dialog-header h1 small {
    color: var(--grey-100);
  }

  /* ------------------------------------------------------------------ */
  /* Calendar inside dialog                                              */
  /* ------------------------------------------------------------------ */

  .swim-date-time__dialog swim-calendar {
    box-shadow: none;
    border-radius: 0;
    border: none;
    border-left: 1px solid var(--grey-700);
    border-right: 1px solid var(--grey-700);
    border-bottom: 1px solid var(--grey-700);
    display: block;
    width: auto;
  }

  /* ------------------------------------------------------------------ */
  /* Time row                                                            */
  /* ------------------------------------------------------------------ */

  .swim-date-time__time-row {
    background: var(--grey-800);
    border-left: 1px solid var(--grey-700);
    border-right: 1px solid var(--grey-700);
    border-bottom: 1px solid var(--grey-700);
    padding: 8px 16px;
    margin-top: 0;
    height: 94px;
    flex-direction: row;
    box-sizing: border-box;
    display: flex;
    place-content: stretch center;
    align-items: baseline;
    justify-content: space-between;
  }

  .swim-date-time__time-row > * {
    flex: 0 0 calc(15% - 6px);
  }

  .swim-date-time__time-input {
    width: 42px;
    padding: 4px 2px;
    text-align: center;
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--grey-400);
    color: var(--grey-050);
    font-size: var(--font-size-m);
    font-family: inherit;
    outline: none;
  }

  .swim-date-time__time-input:focus {
    border-bottom-color: var(--blue-400);
  }

  .swim-date-time__time-input:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .swim-date-time__time-input--ms {
    width: 55px;
  }

  .swim-date-time__time-hint {
    font-size: var(--font-size-xxs);
    color: var(--grey-400);
    text-align: center;
    margin-top: 2px;
  }

  .swim-date-time__time-field {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .swim-date-time__ampm-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .swim-date-time__ampm {
    background: none;
    border: none;
    color: var(--grey-500);
    cursor: pointer;
    padding: 2px 6px;
    font-size: var(--font-size-s);
    font-family: inherit;
    border-radius: var(--radius-2);
  }

  .swim-date-time__ampm:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .swim-date-time__ampm.selected {
    color: var(--white);
    background-color: rgba(var(--grey-350-rgb), 0.2);
  }

  /* ------------------------------------------------------------------ */
  /* Dialog footer (Current / Clear / Apply)                            */
  /* ------------------------------------------------------------------ */

  .swim-date-time__dialog-footer {
    background: var(--grey-800);
    border: 1px solid var(--grey-700);
    border-bottom-left-radius: var(--radius-6);
    border-bottom-right-radius: var(--radius-6);
    border-top: 0;
    padding: 0.5rem 0;
    flex-direction: row;
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }

  .swim-date-time__dialog-footer > * {
    flex: 1 1 50%;
  }

  .swim-date-time__dialog-footer .text-left {
    text-align: left;
  }

  .swim-date-time__dialog-footer .text-right {
    text-align: right;
  }

  .swim-date-time__footer-btn {
    font-size: var(--font-size-m);
    color: var(--grey-400);
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  .swim-date-time__footer-btn:hover {
    color: var(--grey-200);
  }

  .swim-date-time__footer-btn--current {
    margin-left: 16px;
    opacity: 1;
    transition: opacity 200ms;
  }

  .swim-date-time__footer-btn--current[hidden] {
    display: inline-block !important;
    opacity: 0;
    pointer-events: none;
  }

  .swim-date-time__footer-btn--apply {
    margin-right: 16px;
    color: var(--blue-400);
  }

  .swim-date-time__footer-btn--apply:hover {
    color: var(--blue-300);
  }

  .swim-date-time__footer-btn--clear {
    margin-right: 16px;
  }
`;
var pi = Object.defineProperty, fi = Object.getOwnPropertyDescriptor, m = (n, e, t, i) => {
  for (var o = i > 1 ? void 0 : i ? fi(e, t) : e, r = n.length - 1, s; r >= 0; r--)
    (s = n[r]) && (o = (i ? s(e, t, o) : s(o)) || o);
  return i && o && pi(e, t, o), o;
};
let wi = 0;
const $e = "swim-date-time", ue = class ue extends F {
  // ---------------------------------------------------------------------------
  // Lifecycle
  // ---------------------------------------------------------------------------
  constructor() {
    super(), this.id = `swim-date-time-${++wi}`, this.name = "", this.label = "", this.hint = "", this.placeholder = "", this.size = "sm", this.appearance = "legacy", this._disabled = !1, this._required = !1, this.requiredIndicator = "*", this._autofocus = !1, this._autosize = !1, this._minWidth = 60, this._marginless = !1, this._value = null, this._displayValue = "", this._dateInvalid = !1, this._dateOutOfRange = !1, this._focused = !1, this._dialogOpen = !1, this._dialogModel = null, this._dialogHour = 12, this._dialogMinute = "00", this._dialogSecond = "00", this._dialogMillisecond = "000", this._dialogAmPm = "AM", this._modes = ["millisecond", "second", "minute", "hour", "date", "month", "year"], this._apply = () => {
      this._dialogModel && (this.value = this._dialogModel, this._update(), this.dispatchEvent(new CustomEvent("date-time-selected", { detail: this.value, bubbles: !0, composed: !0 })), this.dispatchEvent(new CustomEvent("change", { detail: this.value, bubbles: !0, composed: !0 }))), this._close();
    }, this._clear = () => {
      this.value = void 0, this._update(), this.dispatchEvent(new CustomEvent("date-time-selected", { detail: void 0, bubbles: !0, composed: !0 })), this.dispatchEvent(new CustomEvent("change", { detail: void 0, bubbles: !0, composed: !0 })), this._close();
    }, this._selectCurrent = () => {
      this._setDialogDate(/* @__PURE__ */ new Date());
    }, this._close = () => {
      this._dialogOpen = !1, this._update();
    }, this._onCalendarChange = (e) => {
      e.stopPropagation();
      const t = e.detail;
      t && A(t) && (this._dialogModel && this._showTime && t.setHours(
        this._dialogModel.getHours(),
        this._dialogModel.getMinutes(),
        this._dialogModel.getSeconds(),
        this._dialogModel.getMilliseconds()
      ), this._setDialogDate(t));
    }, this._onHourChange = (e) => {
      const t = +e.target.value % 12, i = this._dialogAmPm === "PM" ? 12 + t : t;
      if (this._dialogModel) {
        const o = new Date(this._dialogModel);
        o.setHours(i), this._setDialogDate(o);
      }
    }, this._onMinuteChange = (e) => {
      const t = +e.target.value;
      if (this._dialogModel) {
        const i = new Date(this._dialogModel);
        i.setMinutes(t), this._setDialogDate(i);
      }
    }, this._onSecondChange = (e) => {
      const t = +e.target.value;
      if (this._dialogModel) {
        const i = new Date(this._dialogModel);
        i.setSeconds(t), this._setDialogDate(i);
      }
    }, this._onMillisecondChange = (e) => {
      const t = +e.target.value;
      if (this._dialogModel) {
        const i = new Date(this._dialogModel);
        i.setMilliseconds(t), this._setDialogDate(i);
      }
    }, this._onDialogKeyDown = (e) => {
      e.code === "Escape" && (this._close(), e.stopPropagation(), e.preventDefault());
    }, this._internals = this.attachInternals();
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(e) {
    const t = this._disabled;
    this._disabled = M(e), this.requestUpdate("disabled", t);
  }
  get required() {
    return this._required;
  }
  set required(e) {
    const t = this._required;
    this._required = M(e), this.requestUpdate("required", t);
  }
  get autofocus() {
    return this._autofocus;
  }
  set autofocus(e) {
    this._autofocus = M(e);
  }
  get autosize() {
    return this._autosize;
  }
  set autosize(e) {
    const t = this._autosize;
    this._autosize = M(e), this.requestUpdate("autosize", t);
  }
  get minWidth() {
    return this._minWidth;
  }
  set minWidth(e) {
    this._minWidth = ct(e) ?? 60;
  }
  set inputType(e) {
    const t = this._inputType;
    this._inputType = e, this.requestUpdate("inputType", t);
  }
  get inputType() {
    return this._effectiveInputType;
  }
  set displayMode(e) {
    const t = this._displayMode;
    this._displayMode = e, this.requestUpdate("displayMode", t);
  }
  get displayMode() {
    return this._effectiveDisplayMode;
  }
  get marginless() {
    return this._marginless;
  }
  set marginless(e) {
    const t = this._marginless;
    this._marginless = M(e), this.requestUpdate("marginless", t);
  }
  get value() {
    return this._value;
  }
  set value(e) {
    const t = this._value;
    if (typeof e == "string" && (e = e.trim(), e || (e = null)), !e && !this._value) {
      this._value = null;
      return;
    }
    if (e === this._value) return;
    let i = e instanceof Date && A(e);
    if (typeof e == "string") {
      const o = W(e);
      o && (e = o, i = !0);
    }
    if (i && e instanceof Date && this.precision && (e = Ze(e, this.precision)), this._value = e, this._update(), this._internals) {
      const o = this._value instanceof Date ? this._value.toISOString() : String(this._value ?? "");
      this._internals.setFormValue(o);
    }
    this.requestUpdate("value", t);
  }
  // ---------------------------------------------------------------------------
  // Computed helpers
  // ---------------------------------------------------------------------------
  get _effectiveInputType() {
    return this._inputType ? this._inputType : this.precision === "hour" || this.precision === "minute" ? x.datetime : x.date;
  }
  get _effectiveDisplayMode() {
    return this._displayMode ? this._displayMode : this.timezone ? z.TIMEZONE : z.LOCAL;
  }
  get _effectiveFormat() {
    return this.format ? li(this.format) : ci(
      this._effectiveDisplayMode,
      this._effectiveInputType,
      this.precision
    );
  }
  get _iconName() {
    switch (this._effectiveInputType) {
      case x.time:
        return "clock";
      case x.datetime:
        return "calendar-clock";
      default:
        return "calendar";
    }
  }
  get _showCalendar() {
    return this._effectiveInputType === x.date || this._effectiveInputType === x.datetime;
  }
  get _showTime() {
    return this._effectiveInputType === x.time || this._effectiveInputType === x.datetime;
  }
  connectedCallback() {
    super.connectedCallback(), this._update();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }
  firstUpdated() {
    this.autofocus && this._swimInput && requestAnimationFrame(() => {
      var e, t;
      (t = (e = this._swimInput) == null ? void 0 : e.focus) == null || t.call(e);
    });
  }
  updated(e) {
    super.updated(e), this.label ? this.setAttribute("has-label", "") : this.removeAttribute("has-label"), this._dateInvalid ? this.setAttribute("date-invalid", "") : this.removeAttribute("date-invalid"), this._dateOutOfRange ? this.setAttribute("date-out-of-range", "") : this.removeAttribute("date-out-of-range"), this._focused ? this.setAttribute("focused", "") : this.removeAttribute("focused"), (e.has("format") || e.has("precision") || e.has("timezone") || e.has("displayMode") || e.has("inputType")) && this._update(), (e.has("required") || e.has("minDate") || e.has("maxDate")) && this._validate();
  }
  /** Delegate focus to the inner input. */
  focus(e) {
    var t, i;
    (i = (t = this._swimInput) == null ? void 0 : t.focus) == null || i.call(t, e);
  }
  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------
  render() {
    return p`
      <div class="swim-date-time__container">
        <swim-input
          part="input"
          .id="${this.id + "-input"}"
          .name="${this.name}"
          .label="${this.label}"
          .hint="${this.hint}"
          .placeholder="${this.placeholder}"
          .size="${this.size}"
          .appearance="${this.appearance}"
          .disabled="${this.disabled}"
          .required="${this.required}"
          .requiredIndicator="${String(this.requiredIndicator)}"
          .value="${this._displayValue}"
          ?marginless="${this.marginless}"
          tabindex="${T(this.tabindex)}"
          autocomplete="off"
          @input="${this._handleInput}"
          @focus="${this._handleFocus}"
          @blur="${this._handleBlur}"
          @keydown="${this._handleKeyDown}"
        ></swim-input>

        <button
          part="calendar-btn"
          class="swim-date-time__calendar-btn"
          type="button"
          ?disabled="${this.disabled}"
          @click="${this._openPicker}"
          title="Show date/time selector"
          aria-label="Open ${this._effectiveInputType} picker"
        >
          <swim-icon font-icon="${this._iconName}"></swim-icon>
        </button>
      </div>

      ${this._renderDialog()}
    `;
  }
  _renderDialog() {
    const e = this._getDialogHeaderText();
    return p`
      <swim-dialog
        css-class="ngx-date-time-dialog"
        .closeButton="${!1}"
        .visible="${this._dialogOpen}"
        @close="${this._close}"
      >
        <div class="swim-date-time__dialog" @keydown="${this._onDialogKeyDown}">
          <div class="swim-date-time__dialog-header">
            <h1>${e}</h1>
          </div>

          ${this._showCalendar ? p`
                <swim-calendar
                  .value="${this._dialogModel}"
                  .minDate="${this.minDate}"
                  .maxDate="${this.maxDate}"
                  .disabled="${this.disabled}"
                  min-view="${this._calendarMinView}"
                  @change="${this._onCalendarChange}"
                  @day-key-enter="${this._apply}"
                ></swim-calendar>
              ` : h}
          ${this._showTime ? this._renderTimeRow() : h}

          <nav role="navigation" class="swim-date-time__dialog-footer">
            <div class="text-left">
              <button
                type="button"
                class="swim-date-time__footer-btn swim-date-time__footer-btn--current"
                ?hidden="${this._isCurrent()}"
                @click="${this._selectCurrent}"
              >
                Current
              </button>
            </div>
            <div class="text-right">
              <button
                type="button"
                class="swim-date-time__footer-btn swim-date-time__footer-btn--clear"
                @click="${this._clear}"
              >
                Clear
              </button>
              <button
                type="button"
                class="swim-date-time__footer-btn swim-date-time__footer-btn--apply"
                @click="${this._apply}"
              >
                Apply
              </button>
            </div>
          </nav>
        </div>
      </swim-dialog>
    `;
  }
  _renderTimeRow() {
    const e = this._isTimeDisabled("hour"), t = this._isTimeDisabled("minute"), i = this._isTimeDisabled("second"), o = this._isTimeDisabled("millisecond");
    return p`
      <div class="swim-date-time__time-row">
        <div class="swim-date-time__time-field">
          <input
            type="number"
            class="swim-date-time__time-input"
            .value="${String(this._dialogHour)}"
            min="1"
            max="12"
            ?disabled="${e}"
            @change="${this._onHourChange}"
          />
          <div class="swim-date-time__time-hint">Hour</div>
        </div>
        <div class="swim-date-time__time-field">
          <input
            type="number"
            class="swim-date-time__time-input"
            .value="${this._dialogMinute}"
            min="0"
            max="59"
            ?disabled="${t}"
            @change="${this._onMinuteChange}"
          />
          <div class="swim-date-time__time-hint">Minute</div>
        </div>
        <div class="swim-date-time__time-field">
          <input
            type="number"
            class="swim-date-time__time-input"
            .value="${this._dialogSecond}"
            min="0"
            max="59"
            ?disabled="${i}"
            @change="${this._onSecondChange}"
          />
          <div class="swim-date-time__time-hint">Second</div>
        </div>
        <div class="swim-date-time__time-field">
          <input
            type="number"
            class="swim-date-time__time-input swim-date-time__time-input--ms"
            .value="${this._dialogMillisecond}"
            min="0"
            max="999"
            ?disabled="${o}"
            @change="${this._onMillisecondChange}"
          />
          <div class="swim-date-time__time-hint">Millisecond</div>
        </div>
        <div class="swim-date-time__ampm-group">
          <button
            type="button"
            class="swim-date-time__ampm ${this._dialogAmPm === "AM" ? "selected" : ""}"
            ?disabled="${e}"
            @click="${() => this._onAmPmChange("AM")}"
          >
            AM
          </button>
          <button
            type="button"
            class="swim-date-time__ampm ${this._dialogAmPm === "PM" ? "selected" : ""}"
            ?disabled="${e}"
            @click="${() => this._onAmPmChange("PM")}"
          >
            PM
          </button>
        </div>
      </div>
    `;
  }
  // ---------------------------------------------------------------------------
  // Dialog helpers
  // ---------------------------------------------------------------------------
  get _calendarMinView() {
    return this.precision === "month" ? "month" : this.precision === "year" ? "year" : "date";
  }
  _getDialogHeaderText() {
    if (!this._dialogModel)
      return "No value";
    const e = this._effectiveInputType, t = ve(this.timezone);
    if (e === x.time)
      return Q(this._dialogModel, "h:mm a", t);
    if (e === x.datetime) {
      const i = Q(this._dialogModel, "ddd, MMM D YYYY", t), o = Q(this._dialogModel, "h:mm a", t);
      return p`${i} <small>${o}</small>`;
    }
    return Q(this._dialogModel, "ddd, MMM D YYYY", t);
  }
  _setDialogDate(e) {
    this._dialogModel = new Date(e);
    const t = this._dialogModel.getHours();
    this._dialogHour = t % 12 || 12, this._dialogMinute = String(this._dialogModel.getMinutes()).padStart(2, "0"), this._dialogSecond = String(this._dialogModel.getSeconds()).padStart(2, "0"), this._dialogMillisecond = String(this._dialogModel.getMilliseconds()).padStart(3, "0"), this._dialogAmPm = t >= 12 ? "PM" : "AM";
  }
  _isTimeDisabled(e) {
    return this.precision ? this._modes.indexOf(this.precision) > this._modes.indexOf(e) : !1;
  }
  _isCurrent() {
    if (!this._dialogModel) return !1;
    const e = /* @__PURE__ */ new Date(), t = this._effectiveInputType;
    return t === x.time ? e.getHours() === this._dialogModel.getHours() && e.getMinutes() === this._dialogModel.getMinutes() && e.getSeconds() === this._dialogModel.getSeconds() && e.getMilliseconds() === this._dialogModel.getMilliseconds() : t === x.datetime ? e.getFullYear() === this._dialogModel.getFullYear() && e.getMonth() === this._dialogModel.getMonth() && e.getDate() === this._dialogModel.getDate() && e.getHours() === this._dialogModel.getHours() && e.getMinutes() === this._dialogModel.getMinutes() && e.getSeconds() === this._dialogModel.getSeconds() && e.getMilliseconds() === this._dialogModel.getMilliseconds() : e.getFullYear() === this._dialogModel.getFullYear() && e.getMonth() === this._dialogModel.getMonth() && e.getDate() === this._dialogModel.getDate();
  }
  // ---------------------------------------------------------------------------
  // Dialog actions
  // ---------------------------------------------------------------------------
  _openPicker() {
    if (this.disabled || this._dialogOpen) return;
    const e = this._value instanceof Date && A(this._value) ? this._value : /* @__PURE__ */ new Date();
    this._setDialogDate(e), this._dialogOpen = !0;
  }
  _onAmPmChange(e) {
    if (!this._dialogModel) return;
    const t = new Date(this._dialogModel), i = t.getHours();
    e === "AM" && this._dialogAmPm === "PM" ? t.setHours(i - 12) : e === "PM" && this._dialogAmPm === "AM" && t.setHours(i + 12), this._setDialogDate(t);
  }
  // ---------------------------------------------------------------------------
  // Input event handlers
  // ---------------------------------------------------------------------------
  _handleInput(e) {
    e.stopPropagation();
    const i = e.target.value;
    this._displayValue = i;
    const o = W(i), r = this._value;
    if (o) {
      const s = this.precision ? Ze(o, this.precision) : o;
      this._value = s, this._dateInvalid = !1;
    } else i ? (this._value = i, this._dateInvalid = !0) : (this._value = null, this._dateInvalid = !1);
    this._dateOutOfRange = !this._dateInvalid && this._value instanceof Date ? Qe(this._value, this.minDate, this.maxDate) : !1, this._updateFormValue(), this.dispatchEvent(new CustomEvent("input-change", { detail: this._value, bubbles: !0, composed: !0 })), this._value !== r && this.dispatchEvent(new CustomEvent("value-change", { detail: this._value, bubbles: !0, composed: !0 })), !this._dateInvalid && this._value !== r && this.dispatchEvent(new CustomEvent("change", { detail: this._value, bubbles: !0, composed: !0 }));
  }
  _handleFocus(e) {
    e.stopPropagation(), this._focused = !0, this.dispatchEvent(new FocusEvent("focus", { bubbles: !0, composed: !0 }));
  }
  _handleBlur(e) {
    e.stopPropagation(), this._focused = !1, this._update(), !this._dateInvalid && this._swimInput && this._swimInput.value !== this._displayValue && (this._swimInput.value = this._displayValue), this.dispatchEvent(new FocusEvent("blur", { bubbles: !0, composed: !0 }));
  }
  _handleKeyDown(e) {
    e.code === "ArrowDown" ? (e.preventDefault(), this._openPicker()) : e.code === "Escape" && (this._dialogOpen && this._close(), e.stopPropagation());
  }
  // ---------------------------------------------------------------------------
  // Internal helpers
  // ---------------------------------------------------------------------------
  _update() {
    const e = this._value, t = e instanceof Date && A(e);
    if (this._dateInvalid = !!e && !t, this._displayValue = e ? String(e) : "", this._dateOutOfRange = !1, !t) return;
    const i = ve(this.timezone);
    this._displayValue = Q(e, this._effectiveFormat, i), this._dateOutOfRange = Qe(e, this.minDate, this.maxDate);
  }
  _validate() {
    let e = {}, t = "";
    this._required && !this._value ? (e = { valueMissing: !0 }, t = "A value is required.") : this._dateInvalid ? (e = { typeMismatch: !0 }, t = "Invalid date.") : this._dateOutOfRange && (e = { rangeOverflow: !0 }, t = "Date is out of the allowed range."), t ? this._internals.setValidity(e, t) : this._internals.setValidity({});
  }
  _updateFormValue() {
    if (!this._internals) return;
    const e = this._value;
    e instanceof Date && A(e) ? this._internals.setFormValue(e.toISOString()) : this._internals.setFormValue(String(e ?? "")), this._validate();
  }
  // ---------------------------------------------------------------------------
  // Form callbacks
  // ---------------------------------------------------------------------------
  formResetCallback() {
    this._value = null, this._displayValue = "", this._dateInvalid = !1, this._dateOutOfRange = !1, this._internals.setFormValue(""), this._internals.setValidity({}), this.requestUpdate();
  }
  formDisabledCallback(e) {
    this.disabled = e;
  }
};
ue.styles = [oe, bi], ue.formAssociated = !0;
let u = ue;
m([
  Ce("swim-input")
], u.prototype, "_swimInput", 2);
m([
  a({ type: String })
], u.prototype, "id", 2);
m([
  a({ type: String })
], u.prototype, "name", 2);
m([
  a({ type: String })
], u.prototype, "label", 2);
m([
  a({ type: String })
], u.prototype, "hint", 2);
m([
  a({ type: String })
], u.prototype, "placeholder", 2);
m([
  a({ type: String, reflect: !0 })
], u.prototype, "size", 2);
m([
  a({ type: String, reflect: !0 })
], u.prototype, "appearance", 2);
m([
  a({ type: Boolean, reflect: !0 })
], u.prototype, "disabled", 1);
m([
  a({ type: Boolean, reflect: !0 })
], u.prototype, "required", 1);
m([
  a({ type: String, attribute: "required-indicator" })
], u.prototype, "requiredIndicator", 2);
m([
  a({ type: Boolean })
], u.prototype, "autofocus", 1);
m([
  a({ type: Boolean, reflect: !0 })
], u.prototype, "autosize", 1);
m([
  a({ type: Number, attribute: "min-width" })
], u.prototype, "minWidth", 1);
m([
  a({ type: Number })
], u.prototype, "tabindex", 2);
m([
  a({ type: String, attribute: "input-type" })
], u.prototype, "inputType", 1);
m([
  a({ type: String })
], u.prototype, "precision", 2);
m([
  a({ type: String })
], u.prototype, "timezone", 2);
m([
  a({ type: String, attribute: "display-mode" })
], u.prototype, "displayMode", 1);
m([
  a({ type: String })
], u.prototype, "format", 2);
m([
  a({ type: Boolean, reflect: !0 })
], u.prototype, "marginless", 1);
m([
  a({ attribute: "min-date" })
], u.prototype, "minDate", 2);
m([
  a({ attribute: "max-date" })
], u.prototype, "maxDate", 2);
m([
  a({ attribute: !1 })
], u.prototype, "value", 1);
m([
  v()
], u.prototype, "_displayValue", 2);
m([
  v()
], u.prototype, "_dateInvalid", 2);
m([
  v()
], u.prototype, "_dateOutOfRange", 2);
m([
  v()
], u.prototype, "_focused", 2);
m([
  v()
], u.prototype, "_dialogOpen", 2);
m([
  v()
], u.prototype, "_dialogModel", 2);
m([
  v()
], u.prototype, "_dialogHour", 2);
m([
  v()
], u.prototype, "_dialogMinute", 2);
m([
  v()
], u.prototype, "_dialogSecond", 2);
m([
  v()
], u.prototype, "_dialogMillisecond", 2);
m([
  v()
], u.prototype, "_dialogAmPm", 2);
customElements.get($e) || customElements.define($e, u);
export {
  z as DateDisplayType,
  x as DateTimeType,
  u as SwimDateTime,
  Q as formatDate,
  _i as getEffectiveDisplayFormat,
  ci as getEffectiveInputFormat,
  Qe as isOutOfRange,
  A as isValidDate,
  ve as normalizeTimezone,
  W as parseDate,
  li as resolveFormat,
  Ze as roundToPrecision,
  Ai as toNativeInputValue
};
