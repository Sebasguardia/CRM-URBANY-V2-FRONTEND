import React, { useState, useEffect } from "react";
import { Modal } from "../../../shared/components/UI/Modal/Modal";
import Select from "../../../shared/components/UI/Select/Select";
import { User as UserIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon, Tag as TagIcon } from "lucide-react";
import "../contactos.css";

const ContactosPage = () => {
  const STORAGE_KEY = "contacts";
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState(null);
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [form, setForm] = useState({
    type: "Propietario",
    name: "",
    phone: "",
    email: "",
    properties: "",
  });
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
    return [
      {
        id: "c-1",
        name: "Maria",
        email: "MariaTextraño@gmail.com",
        type: "Interesada",
        phone: "999 666 777",
        avatar:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=60&w=80&h=80&auto=format",
        createdAt: new Date(),
        tags: ""
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  const openDelete = (id) => { setDeleteTargetId(id); setDeleteOpen(true); };
  const closeDelete = () => { setDeleteOpen(false); setDeleteTargetId(null); };
  const confirmDelete = () => {
    setContacts((prev) => prev.filter((c) => c.id !== deleteTargetId));
    setDeleteOpen(false);
    setDeleteTargetId(null);
  };
  const openAdd = () => setAddOpen(true);
  const closeAdd = () => setAddOpen(false);
  const [editForm, setEditForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    tags: "",
    id: null,
  });
  const openEdit = (contact) => {
    setEditForm({
      id: contact.id,
      name: contact.name || "",
      phone: contact.phone || "",
      email: contact.email || "",
      address: contact.address || "",
      tags: contact.tags || "",
    });
    setEditOpen(true);
  };
  const closeEdit = () => setEditOpen(false);
  const saveAdd = () => {
    if (form.name || form.email || form.phone) {
      setContacts((prev) => [
        ...prev,
        {
          id: `c-${Date.now()}`,
          name: form.name || "Nuevo contacto",
          email: form.email || "",
          type: form.type || "Interesado",
          phone: form.phone || "",
          avatar:
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=60&w=80&h=80&auto=format",
          createdAt: new Date(),
          tags: ""
        },
      ]);
    }
    setAddOpen(false);
    setForm({ type: "Propietario", name: "", phone: "", email: "", properties: "" });
  };

  const normalizedIncludes = (value, query) => {
    if (!value) return false;
    return String(value).toLowerCase().includes(query);
  };

  const displayedContacts = contacts.filter((c) => {
    const q = search.trim().toLowerCase();
    const matchesQuery = q
      ? normalizedIncludes(c.name, q) || normalizedIncludes(c.email, q) || normalizedIncludes(c.phone, q)
      : true;

    const agentFilter = filter === "agent" ? c.type === "Agente" : true;
    const tagsFilter = filter === "tags" ? !!(c.tags && c.tags.trim()) : true;
    const recentFilter = filter === "recent" ? (c.createdAt && (new Date() - new Date(c.createdAt)) <= 7 * 24 * 60 * 60 * 1000) : true;

    return matchesQuery && agentFilter && tagsFilter && recentFilter;
  });
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1 className="contact-title">Contacto</h1>
        <button className="contact-add-button" onClick={openAdd}>Añadir nuevo contacto</button>
      </div>

      <div className="contact-card">
        <div className="contact-toolbar">
          <div className="contact-search">
            <span className="contact-search-icon">🔍</span>
            <input
              className="contact-input"
              placeholder="Filtrar por nombre, gmail o telefono"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="contact-chips">
            <button className={`chip-green ${filter === 'agent' ? 'active' : ''}`} onClick={() => setFilter('agent')}>Agente</button>
            <button className={`chip-green ${filter === 'all' ? 'active' : ''}`} onClick={() => { setFilter('all'); setSearch(''); }}>Todos los contactos</button>
            <button className={`chip-green ${filter === 'tags' ? 'active' : ''}`} onClick={() => setFilter('tags')}>Etiquetas</button>
            <button className="chip-icon" aria-label="Calendario" onClick={() => setFilter('recent')}>📅</button>
          </div>
        </div>

        <table className="contact-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Tipo</th>
              <th>Telefono</th>
              <th className="th-actions"></th>
            </tr>
          </thead>
          <tbody>
            {displayedContacts.map((c) => (
              <tr key={c.id} className="contact-row">
                <td className="td-name">
                  <div className="contact-name">
                    <div className="contact-avatar">
                      <img src={c.avatar} alt={c.name} />
                    </div>
                    <span>{c.name}</span>
                  </div>
                </td>
                <td className="td-email">{c.email}</td>
                <td className="td-type">
                  <span className="type-pill">{c.type}</span>
                </td>
                <td className="td-phone">{c.phone}</td>
                <td className="td-actions">
                  <button className="icon-btn" aria-label="Editar" onClick={() => openEdit(c)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20h9"/>
                      <path d="M16.5 3.5l4 4-11 11H5.5v-4.5l11-11z"/>
                    </svg>
                  </button>
                  <button className="icon-btn" aria-label="Eliminar" onClick={() => openDelete(c.id)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 6h18"/>
                      <path d="M8 6V4h8v2"/>
                      <path d="M7 6l1 12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2l1-12"/>
                    </svg>
                  </button>
                  <button className="icon-btn whatsapp" aria-label="WhatsApp">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.5 6.5A7.5 7.5 0 0 0 5 17l-1.2 3.5 3.6-1.1A7.5 7.5 0 1 0 17.5 6.5z"/>
                      <path d="M8 9c.5 1.5 1.7 3 3.3 4 .8.5 1.9.9 2.3.8.6-.2 1.1-.8 1.5-1.2"/>
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="contact-pagination">
          <button className="page active">1</button>
          <button className="page">2</button>
          <button className="page">3</button>
          <span className="page dots">...</span>
          <button className="page">67</button>
          <button className="page">100</button>
        </div>
      </div>

      <Modal isOpen={deleteOpen} onClose={closeDelete} title="Eliminar contacto" size="sm" showClose={true} titleAlign="center">
        <div className="delete-modal">
          <div className="delete-desc">Si borras este interesado, eliminarás tambien la conversación con el mismo.</div>
          <div className="delete-actions">
            <button className="delete-cancel" onClick={closeDelete}>Cancelar</button>
            <button className="delete-confirm" onClick={confirmDelete}>Sí, eliminar contacto</button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={addOpen} onClose={closeAdd} title="Añadir contacto" size="md" showClose={true} titleAlign="center" scroll={false}>
        <div className="add-modal">
          <div className="add-field">
            <label className="add-label">Tipo de contacto</label>
            <Select
              className="add-select"
              value={form.type}
              onChange={(e) => setForm((f) => ({ ...f, type: e.target.value }))}
              options={[
                { value: "Propietario", label: "Propietario" },
                { value: "Interesado", label: "Interesado" },
                { value: "Agente", label: "Agente" },
              ]}
            />
          </div>

          <div className="add-section-title">O crear uno nuevo</div>

          <div className="add-field">
            <label className="add-label">Nombre del propietario</label>
            <div className="input-wrapper">
              <span className="input-icon"><UserIcon size={16} /></span>
              <input
                className="add-input"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder=""
              />
            </div>
          </div>

          <div className="add-field">
            <label className="add-label">Teléfono <span className="optional">*Opcional</span></label>
            <div className="input-wrapper">
              <span className="input-icon"><PhoneIcon size={16} /></span>
              <input
                className="add-input"
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                placeholder=""
              />
            </div>
          </div>

          <div className="add-field">
            <label className="add-label">Email <span className="optional">*Opcional</span></label>
            <div className="input-wrapper">
              <span className="input-icon"><MailIcon size={16} /></span>
              <input
                className="add-input"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                placeholder=""
              />
            </div>
          </div>

          <div className="add-field">
            <label className="add-label">Propiedades</label>
            <input
              className="add-input"
              value={form.properties}
              onChange={(e) => setForm((f) => ({ ...f, properties: e.target.value }))}
              placeholder=""
            />
          </div>

          <p className="add-helper">El propietario se verá reflejado en la pestaña información privada, solo visible en el CRM.</p>

          <div className="add-actions">
            <button className="add-cancel" onClick={closeAdd}>Cancelar</button>
            <button className="add-save" onClick={saveAdd}>Guardar contacto</button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={editOpen} onClose={closeEdit} title="Editar contacto" size="md" showClose={true} titleAlign="start" scroll={false}>
        <div className="add-modal">
          <div className="add-field">
            <label className="add-label">Nombre completo</label>
            <div className="input-wrapper">
              <span className="input-icon"><UserIcon size={16} /></span>
              <input
                className="add-input"
                value={editForm.name}
                onChange={(e) => setEditForm((f) => ({ ...f, name: e.target.value }))}
                placeholder=""
              />
            </div>
          </div>

          <div className="add-field">
            <label className="add-label">Teléfono de contacto <span className="optional">*Opcional</span></label>
            <div className="input-wrapper">
              <span className="input-icon"><PhoneIcon size={16} /></span>
              <input
                className="add-input"
                value={editForm.phone}
                onChange={(e) => setEditForm((f) => ({ ...f, phone: e.target.value }))}
                placeholder=""
              />
            </div>
          </div>

          <div className="add-field">
            <label className="add-label">Email <span className="optional">*Opcional</span></label>
            <div className="input-wrapper">
              <span className="input-icon"><MailIcon size={16} /></span>
              <input
                className="add-input"
                value={editForm.email}
                onChange={(e) => setEditForm((f) => ({ ...f, email: e.target.value }))}
                placeholder=""
              />
            </div>
          </div>

          <div className="add-field">
            <label className="add-label">Dirección <span className="optional">*Opcional</span></label>
            <div className="input-wrapper">
              <span className="input-icon"><MapPinIcon size={16} /></span>
              <input
                className="add-input"
                value={editForm.address}
                onChange={(e) => setEditForm((f) => ({ ...f, address: e.target.value }))}
                placeholder="Ingrese una dirección"
              />
            </div>
          </div>

          <div className="add-field">
            <label className="add-label">Etiquetas</label>
            <div className="input-wrapper">
              <span className="input-icon"><TagIcon size={16} /></span>
              <input
                className="add-input"
                value={editForm.tags}
                onChange={(e) => setEditForm((f) => ({ ...f, tags: e.target.value }))}
                placeholder=""
              />
            </div>
          </div>

          <div className="add-actions">
            <button className="add-cancel" onClick={closeEdit}>Cancelar</button>
            <button
              className="add-save"
              onClick={() => {
                setContacts((prev) => prev.map((c) => c.id === editForm.id ? {
                  ...c,
                  name: editForm.name,
                  phone: editForm.phone,
                  email: editForm.email,
                  address: editForm.address,
                  tags: editForm.tags,
                } : c));
                setEditOpen(false);
              }}
            >
              Editar contacto
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ContactosPage;
