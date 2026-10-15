"use client";

import { useMemo, useState } from "react";
import { ArrowDownRight, Minus, Plus, ShoppingBag } from "lucide-react";
import { siteConfig } from "@/config/site";
import { currency, menuCategories, menuItems } from "@/content/menu";
import type { MenuCategory } from "@/content/menu";

type Basket = Record<string, number>;

export function Menu() {
  const [category, setCategory] = useState<"All" | MenuCategory>("All");
  const [basket, setBasket] = useState<Basket>({});
  const [notice, setNotice] = useState("");
  const visibleItems = menuItems.filter((item) => category === "All" || item.category === category);
  const basketItems = useMemo(
    () => menuItems.filter((item) => basket[item.id]).map((item) => ({ ...item, quantity: basket[item.id] ?? 0 })),
    [basket],
  );
  const itemCount = basketItems.reduce((count, item) => count + item.quantity, 0);
  const total = basketItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const lines = basketItems.map((item) => `${item.quantity} × ${item.name} (${currency(item.price * item.quantity)})`);
  const orderMessage = [
    "Hello Savanna Grill! I’d like to place an order:",
    ...(lines.length ? lines : ["Please share today’s menu."]),
    ...(lines.length ? [`Total: ${currency(total)}`] : []),
    "Please let me know the next step. Thank you!",
  ].join("\n");
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(orderMessage)}`;

  function changeQuantity(id: string, amount: number) {
    setBasket((current) => {
      const quantity = (current[id] ?? 0) + amount;
      if (quantity <= 0) {
        const next = { ...current };
        delete next[id];
        return next;
      }
      return { ...current, [id]: quantity };
    });
  }

  return (
    <section className="menu-section section-pad" id="menu" aria-labelledby="menu-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">The good part</p>
          <h2 id="menu-title">Good food.<br /><span>No long story.</span></h2>
        </div>
        <p className="section-intro">Straight from the grill, with Ghanaian favourites made for sharing. Pick your plate and we’ll get your WhatsApp order ready.</p>
      </div>

      <div className="menu-layout">
        <div className="menu-listing">
          <div className="category-tabs" aria-label="Filter menu by category">
            {menuCategories.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={category === item}
                className={category === item ? "category-tab is-active" : "category-tab"}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="menu-items" aria-label={`${category} menu items`}>
            {visibleItems.map((item, index) => (
              <article className="menu-item" key={item.id}>
                <div className="menu-item-number">{String(index + 1).padStart(2, "0")}</div>
                <div className="menu-item-copy">
                  {item.note ? <span className="menu-note">{item.note}</span> : <span className="menu-category-label">{item.category}</span>}
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="menu-item-action">
                  <strong>{currency(item.price)}</strong>
                  <button type="button" className="add-button" onClick={() => { changeQuantity(item.id, 1); setNotice(`${item.name} added to your order.`); }} aria-label={`Add ${item.name} to order`}>
                    <span>Add</span><Plus size={16} aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="basket-card" id="order" aria-labelledby="basket-title">
          <div className="basket-card-heading">
            <div className="basket-icon"><ShoppingBag size={19} aria-hidden="true" /></div>
            <div><p className="eyebrow">Your table</p><h3 id="basket-title">Order basket <span>({itemCount})</span></h3></div>
          </div>
          {basketItems.length ? (
            <ul className="basket-lines">
              {basketItems.map((item) => (
                <li key={item.id}>
                  <div><strong>{item.name}</strong><span>{currency(item.price * item.quantity)}</span></div>
                  <div className="quantity-controls" aria-label={`${item.name} quantity`}>
                    <button type="button" onClick={() => changeQuantity(item.id, -1)} aria-label={`Remove one ${item.name}`}><Minus size={14} aria-hidden="true" /></button>
                    <span aria-live="polite">{item.quantity}</span>
                    <button type="button" onClick={() => changeQuantity(item.id, 1)} aria-label={`Add one ${item.name}`}><Plus size={14} aria-hidden="true" /></button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="basket-empty">Your basket is waiting for something good.</p>
          )}
          <div className="basket-total"><span>Estimated total</span><strong>{currency(total)}</strong></div>
          <a className="button button-primary basket-checkout" href={whatsappHref} target="_blank" rel="noreferrer">
            Send order on WhatsApp <ArrowDownRight size={18} aria-hidden="true" />
          </a>
          <p className="basket-footnote">We’ll confirm availability and collection details in chat.</p>
          <p className="sr-only" aria-live="polite">{notice}</p>
        </aside>
      </div>

      <a className="mobile-order-cta" href={whatsappHref} target="_blank" rel="noreferrer">
        <span>Order on WhatsApp</span><span className="mobile-order-count">{itemCount ? `${itemCount} item${itemCount === 1 ? "" : "s"} · ${currency(total)}` : "View today’s menu"}</span>
      </a>
    </section>
  );
}
